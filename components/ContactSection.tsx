import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./ContactSection.module.css";
import { Fox } from "./Fox";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Loader } from "./Loader";
import { Alert } from "./Alert";
import { Mail, User2, MessageSquare, Loader2 } from "lucide-react";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [alert, setAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const validateField = (key: keyof typeof form, value: string): string | undefined => {
    if (key === "name") {
      if (!value.trim()) return "Please enter your name.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }
    if (key === "email") {
      if (!value.trim()) return "Please enter your email.";
      // simple email pattern
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      if (!emailOk) return "Please enter a valid email address.";
    }
    if (key === "message") {
      if (!value.trim()) return "Please enter your message.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    (Object.keys(form) as (keyof typeof form)[]).forEach((k) => {
      const e = validateField(k, form[k]);
      if (e) nextErrors[k] = e;
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      // live-clear error when user fixes
      const msg = validateField(name as keyof typeof form, value);
      setErrors((prev) => ({ ...prev, [name]: msg }));
    }
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentAnimation("idle");
    const { name, value } = e.target;
    const msg = validateField(name as keyof typeof form, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setCurrentAnimation("hit");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate success/error
      const success = Math.random() > 0.3;
      if (success) {
        setCurrentAnimation("idle");
        setAlert({ type: "success", text: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        formRef.current?.reset();
      } else {
        setCurrentAnimation("idle");
        setAlert({ type: "error", text: "I didn't receive your message. Please try again." });
      }
      setTimeout(() => setAlert(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.subheading}>Have a project in mind or just want to say hi? Drop me a message.</p>

      {alert && (
        <div aria-live="polite">
          <Alert type={alert.type}>{alert.text}</Alert>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <div className={styles.inputIconWrap}>
                  <User2 className={styles.inputIcon} aria-hidden="true" />
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <span id="name-error" className={styles.errorText} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <div className={styles.inputIconWrap}>
                  <Mail className={styles.inputIcon} aria-hidden="true" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="john.doe@example.com"
                  />
                </div>
                {errors.email && (
                  <span id="email-error" className={styles.errorText} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <div className={styles.inputIconWrap}>
                <MessageSquare className={styles.inputIcon} aria-hidden="true" />
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me a bit about your idea and timeline..."
                />
              </div>
              {errors.message && (
                <span id="message-error" className={styles.errorText} role="alert">
                  {errors.message}
                </span>
              )}
              <p className={styles.helperText}>I’ll get back within 1-2 business days.</p>
            </div>

            <div className={styles.submitRow}>
              <Button type="submit" disabled={isLoading} className={styles.submitButton}>
                {isLoading ? (
                  <span className={styles.submitInner}>
                    <Loader2 className={styles.loadingIcon} aria-hidden="true" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};