import { Calendar, HeartHandshake, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-shell">
        <div className="hero-copy">
          <h1>{siteContent.hero.title}</h1>
          <p>{siteContent.hero.text}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contatti">
              <Calendar size={18} aria-hidden="true" />
              {siteContent.hero.primaryCta}
            </a>
            <a className="button secondary" href="#metodo">
              {siteContent.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Studio psicologico accogliente">
          <div className="portrait-card">
            <div className="portrait-shape" aria-hidden="true" />
            <div>
              <strong>{siteContent.professional.name}</strong>
              <span>{siteContent.professional.online}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-sono" className="intro-band">
        <div className="section-shell intro-grid">
          <SectionHeading
            label="Chi sono"
            title={siteContent.intro.title}
            text={siteContent.intro.text}
          />
          <div className="intro-note">
            <HeartHandshake size={28} aria-hidden="true" />
            <p>
              Lavoro in modo riservato e attento alla persona, con cura per il contesto di vita e per
              la qualità della relazione terapeutica.
            </p>
            <span>{siteContent.professional.registration}</span>
          </div>
        </div>
      </section>

      <section id="percorsi" className="section-shell content-section">
        <SectionHeading
          label={siteContent.sections.help.label}
          title={siteContent.sections.help.title}
          text={siteContent.sections.help.text}
        />
        <div className="help-grid">
          {siteContent.helpAreas.map((area) => (
            <article key={area.title} className="help-card">
              <div className="card-line" aria-hidden="true" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="method-section">
        <div className="section-shell method-grid">
          <SectionHeading
            label={siteContent.sections.method.label}
            title={siteContent.sections.method.title}
            text={siteContent.sections.method.text}
          />
          <div className="steps">
            {siteContent.method.map((item) => (
              <article key={item.step} className="step-row">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dove" className="section-shell location-section">
        <div className="location-copy">
          <SectionHeading
            label={siteContent.sections.location.label}
            title={`${siteContent.sections.location.title} a ${siteContent.professional.city}`}
            text={siteContent.sections.location.text}
          />
          <div className="location-list">
            <p>
              <MapPin size={18} aria-hidden="true" />
              {siteContent.professional.location}
            </p>
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              Riservatezza, puntualità e setting dedicato.
            </p>
          </div>
        </div>
        <div className="map-panel" aria-label="Mappa indicativa dello studio">
          <div className="map-street one" />
          <div className="map-street two" />
          <div className="map-street three" />
          <div className="map-pin">
            <MapPin size={22} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-shell">
          <SectionHeading
            label={siteContent.sections.faq.label}
            title={siteContent.sections.faq.title}
          />
          <div className="faq-grid">
            {siteContent.faq.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="contact-section">
        <div className="section-shell contact-grid">
          <div>
            <SectionHeading
              label={siteContent.sections.contact.label}
              title={siteContent.sections.contact.title}
              text={siteContent.sections.contact.text}
            />
          </div>
          <div className="contact-card">
            <a href={`tel:${siteContent.professional.phone.replace(/\s/g, "")}`}>
              <Phone size={20} aria-hidden="true" />
              {siteContent.professional.phone}
            </a>
            <a href={`mailto:${siteContent.professional.email}`}>
              <Mail size={20} aria-hidden="true" />
              {siteContent.professional.email}
            </a>
            <a href="#top">
              <MessageCircle size={20} aria-hidden="true" />
              Rileggi le informazioni
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <p>
            {siteContent.professional.name} - {siteContent.professional.role}
          </p>
          <p>{siteContent.professional.registration}</p>
        </div>
      </footer>
    </main>
  );
}
