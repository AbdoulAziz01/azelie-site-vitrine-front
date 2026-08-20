"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Mail,
  Building2,
  Layers,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { services, siteConfig } from "@/lib/site-config";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const MESSAGE_MAX = 800;

function Field({
  id,
  label,
  icon: Icon,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center justify-between text-sm font-medium text-ink-700 dark:text-ink-200"
      >
        <span className="inline-flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
          {label}
        </span>
        {optional && (
          <span className="text-xs font-normal text-ink-400">Optionnel</span>
        )}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500"
          >
            <AlertCircle className="h-3 w-3 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm({
  defaultService,
}: {
  /** Titre exact d'un service (site-config.ts > services) à présélectionner. */
  defaultService?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { service: defaultService ?? "" },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formId = useId();
  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      await axios.post("/api/contact", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (hasError?: boolean) =>
    cn(
      "w-full rounded-xl border bg-surface-muted px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-ink-400",
      "focus:bg-surface focus:ring-4",
      "disabled:cursor-not-allowed disabled:opacity-60",
      hasError
        ? "border-red-300 focus:border-red-400 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/10"
        : "border-border-subtle focus:border-gold-400 focus:ring-gold-100 dark:focus:ring-gold-400/10"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight">
          Démarrons votre projet
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          Décrivez votre besoin en quelques lignes, notre équipe revient vers
          vous sous 24h ouvrées.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Nom complet"
          icon={User}
          error={errors.name?.message}
        >
          <input
            id={`${formId}-name`}
            type="text"
            disabled={isSubmitting}
            className={inputClasses(!!errors.name)}
            placeholder="Votre nom"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Votre nom est requis" })}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Email professionnel"
          icon={Mail}
          error={errors.email?.message}
        >
          <input
            id={`${formId}-email`}
            type="email"
            disabled={isSubmitting}
            className={inputClasses(!!errors.email)}
            placeholder="vous@entreprise.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Votre email est requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide",
              },
            })}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-company`}
          label="Entreprise"
          icon={Building2}
          optional
        >
          <input
            id={`${formId}-company`}
            type="text"
            disabled={isSubmitting}
            className={inputClasses()}
            placeholder="Nom de votre entreprise"
            autoComplete="organization"
            {...register("company")}
          />
        </Field>

        <Field
          id={`${formId}-service`}
          label="Service concerné"
          icon={Layers}
          error={errors.service?.message}
        >
          <select
            id={`${formId}-service`}
            disabled={isSubmitting}
            className={cn(inputClasses(!!errors.service), "appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20stroke%3D%22%235c6a86%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat pr-10")}
            aria-invalid={!!errors.service}
            {...register("service", { required: "Sélectionnez un service" })}
          >
            <option value="" disabled>
              Choisir un service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={`${formId}-message`}
        label="Décrivez votre projet"
        icon={MessageSquare}
        error={errors.message?.message}
      >
        <textarea
          id={`${formId}-message`}
          rows={5}
          disabled={isSubmitting}
          maxLength={MESSAGE_MAX}
          className={cn(inputClasses(!!errors.message), "resize-none")}
          placeholder="Parlez-nous de vos objectifs, délais et contexte..."
          aria-invalid={!!errors.message}
          {...register("message", {
            required: "Un message est requis",
            maxLength: {
              value: MESSAGE_MAX,
              message: `Le message ne peut pas dépasser ${MESSAGE_MAX} caractères`,
            },
          })}
        />
        <div className="mt-1.5 text-right text-xs text-ink-400">
          {messageLength}/{MESSAGE_MAX}
        </div>
      </Field>

      <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-ink-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
          Vos informations restent confidentielles et ne sont jamais
          partagées.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-60 sm:w-auto sm:shrink-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            aria-live="polite"
            className="flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3.5 text-sm text-teal-800 dark:border-teal-800/40 dark:bg-teal-900/20 dark:text-teal-300"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Merci ! Votre message a bien été envoyé, nous revenons vers
              vous sous 24h ouvrées.
            </span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="alert"
            aria-live="assertive"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700 dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Une erreur est survenue. Merci de réessayer ou de nous écrire
              directement à{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium underline underline-offset-2">
                {siteConfig.email}
              </a>
              .
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
