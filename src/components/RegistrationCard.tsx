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
  | "Homemaker"
  | "Coach / Trainer"
  | "Other";

const professions: Profession[] = [
  "Student",
  "Working Professional",
  "Business Owner",
  "Freelancer",
  "Homemaker",
  "Coach / Trainer",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  profession: Profession | "";
};

type TouchedState = Record<keyof FormState, boolean>;
type ErrorsState = Partial<Record<keyof FormState, string>>;

type RegistrationCardProps = {
  onSubmit?: (data: FormState) => void;
  priceLabel?: string;
  initialSeconds?: number;
};

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      profession: true,
    });

    if (!isValid) return;

    onSubmit?.(form);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-white shadow-xl border border-black/5 overflow-hidden">
      {/* Header (center aligned) */}
      <div className="px-5 sm:px-6 pt-7 pb-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Join The Workshop
        </h2>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF0BA]/60 px-4 py-2 text-sm font-medium text-slate-900">
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

      {/* Form (force left alignment on mobile) */}
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
            Phone Number
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

          <p className="mt-1 text-xs text-slate-500">
            (We’ll pass a Razorpay-safe value for checkout.)
          </p>

          {touched.profession && errors.profession && (
            <p className="mt-1 text-xs text-red-600">{errors.profession}</p>
          )}
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={!isValid}
          className="
            mt-2 w-full rounded-xl py-4 font-semibold text-white
            bg-black shadow-lg shadow-black/20
            hover:opacity-95 active:scale-[0.99] transition
            disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
          "
        >
          {priceLabel}
        </button>

        {/* Footer (center, but form stays left) */}
        <div className="pt-3 text-center text-xs text-slate-500 flex justify-center items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Your information is safe &amp; never shared</span>
        </div>
      </form>
    </div>
  );
}