"use client";

import { useState } from "react";
import { type Locale } from "@/i18n/config";
import { useParams } from "next/navigation";

const contactContent = {
  he: {
    title: "צרו קשר",
    subtitle: "נשמח לשמוע מכם ולעזור לכם למצוא את המסלול המתאים",
    name: "שם מלא",
    email: "אימייל",
    phone: "טלפון",
    message: "הודעה",
    send: "שלח הודעה",
    success: "ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.",
    email_label: "דוא\"ל",
    social_title: "עקבו אחרינו",
    or: "או",
  },
  en: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you and help you find the right path",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send Message",
    success: "Message sent successfully! We'll get back to you soon.",
    email_label: "Email",
    social_title: "Follow Us",
    or: "or",
  },
};

export default function ContactPage() {
  const params = useParams();
  const locale = (params.locale as Locale) || "he";
  const content = contactContent[locale];

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            {content.title}
          </h1>
          <p className="text-white/80">{content.subtitle}</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-success/10 border border-success/30 rounded-lg p-6 text-center">
                  <p className="text-success font-bold">✔ {content.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">{content.name}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">{content.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
                      dir="ltr"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">{content.phone}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">{content.message}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-hover text-navy font-bold py-3.5 rounded-lg transition-colors"
                  >
                    {content.send}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">{content.email_label}</h3>
                <a href="mailto:center@pdn.co.il" className="text-gold hover:underline">
                  center@pdn.co.il
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-3">{content.social_title}</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.youtube.com/@PDNCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors"
                  >
                    <span className="text-gold">&#9670;</span> YouTube
                  </a>
                  <a
                    href="https://www.facebook.com/PDNCODE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors"
                  >
                    <span className="text-gold">&#9670;</span> Facebook
                  </a>
                  <a
                    href="https://katzr.net/550025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors"
                  >
                    <span className="text-gold">&#9670;</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
