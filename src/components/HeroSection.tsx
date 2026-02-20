import React, { useEffect, useMemo, useState } from "react";
import CTAButton from "./CTAButton";
import RegistrationCard from "./RegistrationCard";
import { CalendarDays, Clock3 } from "lucide-react";

type EventInfo = {
  dateLabel: string; // e.g. "22 Feb 2026"
  dayLabel: string;  // e.g. "Sunday"
  timeLabel: string; // e.g. "10:30AM to 1PM"
};

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgYdKQ-iZqInteay0bBUyxG00z6Esx1-1wGfcHeSg4bMqS4f2MgcgqQsaT0JoExOEKc1h_nvs9U2Vo/pub?output=csv&gid=1912301520";

/** Small CSV parser that handles quoted commas */
function parseCSV(csvText: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const ch = csvText[i];
    const next = csvText[i + 1];

    if (ch === '"' && inQuotes && next === '"') {
      cur += '"';
      i++;
      continue;
    }

    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (ch === "," && !inQuotes) {
      row.push(cur.trim());
      cur = "";
      continue;
    }

    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (cur.length || row.length) {
        row.push(cur.trim());
        rows.push(row);
      }
      row = [];
      cur = "";
      continue;
    }

    cur += ch;
  }

  if (cur.length || row.length) {
    row.push(cur.trim());
    rows.push(row);
  }

  return rows.filter(r => r.some(cell => cell !== ""));
}

/** Map columns safely from header names OR fallback to positions */
function mapEventFromSheet(rows: string[][]): EventInfo | null {
  if (rows.length < 2) return null;

  const header = rows[0].map(h => h.toLowerCase().trim());
  const data = rows[1];

  const getByHeader = (keys: string[]) => {
    for (const k of keys) {
      const idx = header.indexOf(k);
      if (idx !== -1 && data[idx]) return data[idx];
    }
    return "";
  };

  // Try common header names first
  const dateLabel =
    getByHeader(["date", "event_date", "workshop_date"]) || data[0] || "";
  const dayLabel =
    getByHeader(["day", "event_day", "workshop_day"]) || data[1] || "";
  const timeLabel =
    getByHeader(["time", "event_time", "workshop_time", "timing"]) || data[2] || "";

  if (!dateLabel && !dayLabel && !timeLabel) return null;

  return {
    dateLabel: dateLabel || "—",
    dayLabel: dayLabel || "—",
    timeLabel: timeLabel || "—",
  };
}

const EventBlocks = ({ event }: { event: EventInfo }) => {
  return (
    <div className="mt-6 inline-flex w-full max-w-lg rounded-xl border border-white/10 bg-[#2f3e4e] text-white overflow-hidden">
      {/* LEFT: Date */}
      <div className="flex-1 px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
          <CalendarDays className="w-4 h-4 text-[#C89B3C]" />
        </div>
        <div className="leading-tight">
          <div className="text-xs font-semibold">{event.dateLabel}</div>
          <div className="text-[11px] text-white/60">Date</div>
        </div>
      </div>

      <div className="w-px bg-white/15" />

      {/* RIGHT: Time ONLY (no day concat) */}
      <div className="flex-[1.2] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
          <Clock3 className="w-4 h-4 text-[#C89B3C]" />
        </div>
        <div className="leading-tight">
          <div className="text-xs font-semibold">{event.timeLabel}</div>
          <div className="text-[11px] text-white/60">Time</div>
        </div>
      </div>
    </div>
  );
};



const HeroSection = () => {
  const [eventInfo, setEventInfo] = useState<EventInfo | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
        const text = await res.text();
        const rows = parseCSV(text);
        const mapped = mapEventFromSheet(rows);

        if (!cancelled) {
          // If sheet has no usable data, keep a safe fallback
          setEventInfo(
            mapped || {
              dateLabel: "Coming Soon",
              dayLabel: "—",
              timeLabel: "—",
            }
          );
        }
      } catch (e) {
        if (!cancelled) {
          setEventInfo({
            dateLabel: "Coming Soon",
            dayLabel: "—",
            timeLabel: "—",
          });
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const event = useMemo(
    () =>
      eventInfo || {
        dateLabel: "Loading…",
        dayLabel: "Loading…",
        timeLabel: "Loading…",
      },
    [eventInfo]
  );

  return (
    <section className="w-full bg-[#e8d8c3] text-white">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-[#2f3e4e] font-bold text-3xl md:text-9xl lg:text-6xl leading-tight mb-6">
              Stop Chasing Abundance. <br />
              <span className="text-[#2a2e26]">Let It Flow To You.</span>
            </h1>

            <p className="text-[#2f3e4e] text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              The proven 3-step formula to reprogram your mind for health, wealth
              , & happiness — so abundance doesn't just arrive, it stays.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <CTAButton>
                <span className="flex items-center gap-2">
                  Register Now For Just
                  <span className="line-through opacity-70">₹999</span>
                  <span className="font-bold">₹99</span>
                </span>
              </CTAButton>
            </div>

            {/* Date + Time blocks (like screenshot) */}
            <div className="flex justify-center lg:justify-start">
              <EventBlocks event={event} />
            </div>

            {/* MOBILE FORM */}
            <div className="mt-8 lg:hidden" id="registration-form-mobile">
              <RegistrationCard
                priceLabel="Join The Workshop (Rs.99 Only)"
                onSubmit={(data) => console.log("Registration:", data)}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center lg:text-left">
              <div>
                <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
                  120
                </div>
                <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
                  Minutes
                </div>
              </div>

              <div>
                <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
                  12+
                </div>
                <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
                  Techniques
                </div>
              </div>

              <div>
                <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
                  3
                </div>
                <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
                  Life Dimensions
                </div>
              </div>

              <div>
                <div className="text-xl md:text-4xl font-bold text-[#2f3e4e]">
                  ₹99
                </div>
                <div className="text-black/80 text-sm uppercase tracking-wide mt-1">
                  Only
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#2f3e4e]/70" />
              <div className="flex items-center gap-2 text-[#2f3e4e] text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-nowrap">
                <span>Scroll Down</span>
                <span className="animate-bounce">↓</span>
              </div>
              <div className="h-px flex-1 bg-[#2f3e4e]/70" />
            </div>
          </div>

          {/* RIGHT DESKTOP FORM */}
          <div className="hidden lg:flex justify-end" id="registration-form-desktop">
            <div className="w-full max-w-md">
              <RegistrationCard
                priceLabel="Join The Workshop (Rs.99 Only)"
                onSubmit={(data) => console.log("Registration:", data)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
