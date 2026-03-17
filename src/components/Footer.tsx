import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, Phone, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-text-primary text-bg-primary py-16 md:py-24 border-t border-border-medium/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-accent-secondary" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-white">ZEG</span>
              <span className="text-xs tracking-widest uppercase text-accent-secondary">Dış Ticaret</span>
            </div>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-md">
            Global tedarik ve lojistik süreçlerinde deneyimli çözüm ortağınız. 2009'dan beri üreticiden teslimata kadar tüm süreci tek merkezden, güvenle yönetiyoruz.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.instagram.com/zegdisticaret/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/zegdisticaret" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-colors" aria-label="X (Twitter)">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-white mb-2">Kurumsal</h4>
          <Link to="/hakkimizda" className="text-text-muted hover:text-white transition-colors text-sm">Hakkımızda</Link>
          <Link to="/hizmetler" className="text-text-muted hover:text-white transition-colors text-sm">Hizmetlerimiz</Link>
          <Link to="/surec" className="text-text-muted hover:text-white transition-colors text-sm">İş Sürecimiz</Link>
          <Link to="/iletisim" className="text-text-muted hover:text-white transition-colors text-sm">İletişim</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-white mb-2">İletişim</h4>
          <div className="flex items-start gap-3 text-text-muted text-sm">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-secondary" strokeWidth={1.5} />
            <span>Alaaddinbey mh. 622. Sok. Sera Plaza<br/>B Blok No.8H Nilüfer / Bursa</span>
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <Phone className="w-4 h-4 shrink-0 text-accent-secondary" strokeWidth={1.5} />
            <span>+90 546 206 3001</span>
          </div>
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <Mail className="w-4 h-4 shrink-0 text-accent-secondary" strokeWidth={1.5} />
            <span>info@zegdisticaret.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-xs tracking-wide">
          &copy; {new Date().getFullYear()} ZEG Dış Ticaret. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <Link to="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          <Link to="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
        </div>
      </div>
    </footer>
  );
}
