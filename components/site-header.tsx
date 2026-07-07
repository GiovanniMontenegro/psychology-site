import { siteContent } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Torna all'inizio">
        <span className="brand-mark" aria-hidden="true">
          {siteContent.professional.initials}
        </span>
        <span>
          <strong>{siteContent.professional.name}</strong>
          <small>{siteContent.professional.role}</small>
        </span>
      </a>
      <nav aria-label="Navigazione principale">
        {siteContent.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contatti">
        Contatta
      </a>
    </header>
  );
}
