"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { footer } from "@/data/site";
import { fl } from "@/lib/fluid";
import { CtaButton } from "@/components/ui/Cta";

const copy = footer.newsletter;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = { treatment?: string; email?: string };
type Status = { kind: "idle" } | { kind: "error"; message: string } | { kind: "success"; message: string };

const field =
  "w-full rounded-[6px] border border-white bg-transparent px-4 text-body text-white transition-[border-color,box-shadow] outline-none placeholder:text-white/70 hover:border-white focus-visible:ring-3 focus-visible:ring-white/60 aria-[invalid=true]:border-navy aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-navy/70";

export function NewsletterForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const email = String(data.get("email") ?? "").trim();
    if (!data.get("treatment")) next.treatment = copy.errors.treatment;
    if (!email) next.email = copy.errors.emailMissing;
    else if (!EMAIL.test(email)) next.email = copy.errors.emailInvalid;
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(new FormData(form));
    setErrors(next);
    if (next.treatment || next.email) {
      setStatus({ kind: "error", message: "Please fix the highlighted fields." });
      // Focus the first invalid field (by name: aria-invalid isn't rendered yet).
      (form.elements.namedItem(next.treatment ? "treatment" : "email") as HTMLElement | null)?.focus();
      return;
    }
    // TODO: send the subscription to the CRM / newsletter endpoint before confirming.
    setStatus({ kind: "success", message: copy.success });
    form.reset();
  }

  const clear = (key: keyof Errors) => {
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status.kind !== "idle") setStatus({ kind: "idle" });
  };

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={`${id}-note`} className="flex flex-col">
      <label htmlFor={`${id}-treatment`} className="text-body font-medium text-white capitalize" style={{ marginTop: fl(35, 20) }}>
        {copy.treatmentLabel}
      </label>
      <div className="relative" style={{ marginTop: fl(13, 8) }}>
        <select
          id={`${id}-treatment`}
          name="treatment"
          required
          defaultValue=""
          aria-invalid={errors.treatment ? true : undefined}
          aria-describedby={errors.treatment ? `${id}-treatment-error` : undefined}
          onChange={() => clear("treatment")}
          className={`${field} cursor-pointer appearance-none pr-10 invalid:text-white/75`}
          style={{ height: fl(46, 44) }}
        >
          <option value="" disabled>
            {copy.treatmentPlaceholder}
          </option>
          {copy.treatments.map((t) => (
            <option key={t} value={t} className="text-ink">
              {t}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-white" />
      </div>
      {errors.treatment && (
        <p id={`${id}-treatment-error`} className="mt-2 text-note font-medium text-white">
          {errors.treatment}
        </p>
      )}

      <label htmlFor={`${id}-email`} className="text-body font-medium text-white capitalize" style={{ marginTop: fl(29, 18) }}>
        {copy.emailLabel}
        <span aria-hidden>*</span>
      </label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        required
        aria-invalid={errors.email ? true : undefined}
        aria-describedby={errors.email ? `${id}-email-error` : undefined}
        onChange={() => clear("email")}
        className={field}
        style={{ height: fl(46, 44), marginTop: fl(13, 8) }}
      />
      {errors.email && (
        <p id={`${id}-email-error`} className="mt-2 text-note font-medium text-white">
          {errors.email}
        </p>
      )}

      <p id={`${id}-note`} className="text-note text-white capitalize" style={{ marginTop: fl(18, 14) }}>
        {copy.note}
      </p>

      <div className="flex items-center justify-between gap-4" style={{ marginTop: fl(18, 16) }}>
        <p role="status" aria-live="polite" className="text-note font-medium text-white">
          {status.kind !== "idle" && status.message}
        </p>
        <CtaButton type="submit" label={copy.submit} size="sm" tone="light" pillWidth={113} />
      </div>
    </form>
  );
}
