"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { siteConfig } from "@/data/site";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={t.nav.contact}
            subtitle={t.sections.inquirySub}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Direct details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="border border-border p-6 md:p-8">
                <div className="mb-4 text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.artworkInquiry}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.artworkInquiryDesc}
                </p>
                <p className="text-xs font-semibold text-foreground mt-4">
                  {siteConfig.email}
                </p>
              </div>

              <div className="border border-border p-6 md:p-8">
                <div className="mb-4 text-foreground">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.commissionRequest}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.commissionRequestDesc}
                </p>
              </div>

              <div className="border border-border p-6 md:p-8">
                <div className="mb-4 text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.studioContact}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.studioContactDesc}
                </p>
                <p className="text-xs font-semibold text-foreground mt-4">
                  {siteConfig.phone}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.18em]">
                  {lang === "tr" ? siteConfig.address.tr : siteConfig.address.en}
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 border border-border p-6 md:p-10 bg-white">
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.04em] text-foreground mb-6">
                {lang === "tr" ? "İletişim Formu" : "Inquiry Form"}
              </h2>

              {submitted ? (
                <div className="border border-green-200 bg-green-50/50 p-6 text-center">
                  <h3 className="text-green-800 font-semibold mb-2">
                    {lang === "tr" ? "Mesajınız Gönderildi" : "Message Sent"}
                  </h3>
                  <p className="text-sm text-green-700">
                    {lang === "tr"
                      ? "Bize ulaştığınız için teşekkürler. En kısa sürede yanıt vereceğiz."
                      : "Thank you for contacting us. We will get back to you shortly."}
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    {lang === "tr"
                      ? "*Bu form bir demo gösterimidir. Mesajınız herhangi bir sunucuya iletilmemiştir."
                      : "*This form is a demo mockup. Your message has not been sent to a server."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider underline text-green-800 hover:text-green-950"
                  >
                    {lang === "tr" ? "Yeni Mesaj Gönder" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
                        {lang === "tr" ? "Adınız Soyadınız" : "Full Name"}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-border text-foreground text-sm focus:outline-none focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
                        {lang === "tr" ? "E-posta Adresiniz" : "Email Address"}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-border text-foreground text-sm focus:outline-none focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
                      {lang === "tr" ? "İlginiz" : "Inquiry Type"}
                    </label>
                    <select className="w-full px-4 py-3 border border-border text-foreground text-sm focus:outline-none focus:border-foreground bg-transparent">
                      <option value="artwork">
                        {lang === "tr" ? "Eser Satın Alma / Bilgi" : "Artwork Purchase / Info"}
                      </option>
                      <option value="commission">
                        {lang === "tr" ? "Özel Sipariş Talebi" : "Commission Request"}
                      </option>
                      <option value="general">
                        {lang === "tr" ? "Genel Ziyaret / Basın" : "General Visit / Press"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
                      {lang === "tr" ? "Mesajınız" : "Message"}
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-border text-foreground text-sm focus:outline-none focus:border-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-block px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] bg-foreground text-background hover:bg-foreground/90 transition-colors cursor-pointer w-full md:w-auto"
                  >
                    {lang === "tr" ? "GÖNDER" : "SUBMIT INQUIRY"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
