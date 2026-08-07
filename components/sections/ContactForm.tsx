"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
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

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
      "w-full rounded-xl border bg-surface-muted px-4 py-3 text-sm outline-none transition-all duration-200 focus:bg-surface focus:ring-4",
      hasError
        ? "border-red-300 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-500/10"
        : "border-border-subtle focus:border-gold-400 focus:ring-gold-100 dark:focus:ring-gold-400/10"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            className={inputClasses(!!errors.name)}
            placeholder="Votre nom"
            {...register("name", { required: "Votre nom est requis" })}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email professionnel
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses(!!errors.email)}
            placeholder="vous@entreprise.com"
            {...register("email", {
              required: "Votre email est requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            className={inputClasses()}
            placeholder="Nom de votre entreprise"
            {...register("company")}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
            Service concerné
          </label>
          <select
            id="service"
            className={inputClasses(!!errors.service)}
            defaultValue=""
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
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-500">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Décrivez votre projet
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClasses(!!errors.message), "resize-none")}
          placeholder="Parlez-nous de vos objectifs, délais et contexte..."
          {...register("message", { required: "Un message est requis" })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-60 sm:w-auto">
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Envoyer le message
      </Button>

      {status === "success" && (
        <div className="flex items-start gap-2.5 rounded-xl bg-teal-50 px-4 py-3 text-sm text-teal-800 dark:bg-teal-900/20 dark:text-teal-300">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Merci ! Votre message a bien été envoyé, nous revenons vers vous
          sous 24h ouvrées.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Une erreur est survenue. Merci de réessayer ou de nous écrire
          directement à {siteConfig.email}.
        </div>
      )}
    </form>
  );
}
