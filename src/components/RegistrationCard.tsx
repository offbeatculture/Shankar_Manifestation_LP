import React, { useEffect, useMemo, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  Lock,
  ChevronDown,
} from "lucide-react";

type Profession =
  | "Student"
  | "Working Professional"
  | "Business Owner"
  | "Freelancer"
  | "Other";

const professions: Profession[] = [
  "Student",
  "Working Professional",
  "Business Owner",
  "Freelancer",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string; // whatsapp number
  profession: Profession | "";
};

type TouchedState = Record<keyof FormState, boolean>;
type ErrorsState = Partial<Record<keyof FormState, string>>;

type RegistrationCardProps = {
  onSubmit?: (data: FormState) => void;
  priceLabel?: string;
  initialSeconds?: number;
};

/** ✅ Use the new URLs (from your top snippet) */
const RAZORPAY_PAGE_URL =
  "https://pages.razorpay.com/am-fb1";
const WEBHOOK_URL = "https://offbeatn8n.coachswastik.com/webhook/leads-abundance";

/** ✅ UTMs: match the “above logic” */
type UtmState = {
  utm_source: string;
  utm_campaign: string;
  utm_medium: string;
  utm_content: string;
  fbclid: string;
};

const UTM_KEY = "lead_utms_goal_hacking";

/** ✅ Grab UTMs (and persist) */
function getUTMs(): UtmState {
  const empty: UtmState = {
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_content: "",
    fbclid: "",
  };

  if (typeof window === "undefined") return empty;

  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmState = {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_content: params.get("utm_content") || "",
    fbclid: params.get("fbclid") || "",
  };

  const saved = localStorage.getItem(UTM_KEY);
  const hasAny = Object.values(fromUrl).some(Boolean);

  if (!saved && hasAny) {
    localStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
  }

  try {
    const stored = saved ? JSON.parse(saved) : {};
    // URL wins
    return { ...empty, ...stored, ...fromUrl };
  } catch {
    return { ...empty, ...fromUrl };
  }
}

/**
 * Razorpay Payment Pages often prefill dropdown/custom fields ONLY when the value
 * matches EXACTLY. Keep mapping only if your Razorpay option does NOT include "/".
 */
function toRazorpayProfession(value: string) {
  const v = (value || "").trim();
  if (v === "Business Owner / Entrepreneur") return "Business Owner Entrepreneur";
  return v;
}

const formatTime = (seconds: number) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
};

export default function RegistrationCard({
  onSubmit,
  priceLabel = "Join The Workshop (Rs.99 Only)",
  initialSeconds = 10 * 60,
}: RegistrationCardProps) {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    email: false,
    phone: false,
    profession: false,
  });

  /** ✅ Capture UTMs once (so refresh/navigation keeps them) */
  useEffect(() => {
    getUTMs();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = window.setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => window.clearInterval(t);
  }, [timeLeft]);

  const errors: ErrorsState = useMemo(() => {
    const e: ErrorsState = {};

    if (!form.name.trim()) e.name = "Please enter your full name.";

    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";

    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!/^\d{10}$/.test(form.phone))
      e.phone = "Enter exactly 10 digits (no country code).";

    if (!form.profession) e.profession = "Please select your profession.";

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let val = e.target.value;

      if (key === "phone") {
        val = val.replace(/\D/g, "").slice(0, 10);
      }

      setForm((p) => ({ ...p, [key]: val } as FormState));
    };

  const handleBlur = (key: keyof FormState) => () => {
    setTouched((p) => ({ ...p, [key]: true }));
  };

  /** ✅ Build Razorpay redirect URL + UTMs (same as your top snippet) */
  const buildRazorpayRedirectUrl = (data: FormState, utms: UtmState) => {
    const professionForPay = toRazorpayProfession(data.profession || "");

    const payUrl =
      `${RAZORPAY_PAGE_URL}` +
      `?name=${encodeURIComponent(data.name)}` +
      `&email=${encodeURIComponent(data.email)}` +
      `&whatsapp_number=${encodeURIComponent(data.phone)}` +
      `&profession=${encodeURIComponent(professionForPay)}` +
      `&utm_source=${encodeURIComponent(utms.utm_source)}` +
      `&utm_campaign=${encodeURIComponent(utms.utm_campaign)}` +
      `&utm_medium=${encodeURIComponent(utms.utm_medium)}` +
      `&utm_content=${encodeURIComponent(utms.utm_content)}` +
      `&fbclid=${encodeURIComponent(utms.fbclid)}`;

    return payUrl;
  };

  /** ✅ Webhook payload (same fields as your top snippet) */
  const postToWebhook = async (data: FormState, utms: UtmState) => {
    const professionForPay = toRazorpayProfession(data.profession || "");

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        whatsapp_number: data.phone,
        profession: data.profession, // original label
        profession_for_pay: professionForPay, // what we pass to Razorpay
        ...utms, // utm_source, utm_campaign, utm_medium, utm_content, fbclid
        page_url: typeof window !== "undefined" ? window.location.href : "",
        ts: new Date().toISOString(),
      }),
      keepalive: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      profession: true,
    });

    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      onSubmit?.(form);

      const utms = getUTMs();

      // 1) Trigger webhook (best effort)
      try {
        await postToWebhook(form, utms);
      } catch {
        // silent fail
      }

      // 2) Redirect to Razorpay page with query params + UTMs
      window.location.href = buildRazorpayRedirectUrl(form, utms);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-white shadow-xl border border-black/5 overflow-hidden">
      <div className="px-5 sm:px-6 pt-7 pb-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Join The Workshop
        </h2>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#8A6A4A] px-4 py-2 text-sm font-medium text-white">
          <Clock className="w-4 h-4" />
          <span className="opacity-80">Offer expires in</span>
          <span className="font-semibold tabular-nums">
            {formatTime(Math.max(timeLeft, 0))}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Fill in your details to secure your spot
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-5 sm:px-6 pb-6 space-y-4 text-left"
      >
        {/* Name */}
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Full Name
          </label>
          <div className="relative w-full">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-slate-900 outline-none focus:border-slate-400"
            />
          </div>
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Email
          </label>
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-slate-900 outline-none focus:border-slate-400"
            />
          </div>
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-800 mb-2">
            WhatsApp Number
          </label>
          <div className="relative w-full">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              inputMode="numeric"
              value={form.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              placeholder="Enter 10-digit number"
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-slate-900 outline-none focus:border-slate-400"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Enter exactly 10 digits (no country code).
          </p>
          {touched.phone && errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Profession */}
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Profession
          </label>

          <div className="relative w-full">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={form.profession}
              onChange={handleChange("profession")}
              onBlur={handleBlur("profession")}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-3 text-slate-900 outline-none focus:border-slate-400"
            >
              <option value="" disabled>
                Select profession
              </option>
              {professions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {touched.profession && errors.profession && (
            <p className="mt-1 text-xs text-red-600">{errors.profession}</p>
          )}
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="
            mt-2 w-full rounded-xl py-4 font-semibold text-white
            bg-black shadow-lg shadow-black/20
            hover:opacity-95 active:scale-[0.99] transition
            disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
          "
        >
          {isSubmitting ? "Redirecting..." : priceLabel}
        </button>

        <div className="pt-3 text-center text-xs text-slate-500 flex justify-center items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Your information is safe &amp; never shared</span>
        </div>
      </form>
    </div>
  );
}