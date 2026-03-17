import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, Instagram, Twitter } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Contact() {
  return (
    <div className="w-full overflow-hidden">
      {/* Page Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-bg-primary border-b border-border-light relative overflow-hidden">
        <div className="absolute inset-0 map-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-text-primary"
          >
            İletişim
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light"
          >
            Tedarik zincirinizi güvence altına almak ve profesyonel destek almak için bizimle iletişime geçin.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-8">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif text-text-primary">
                  Bize Ulaşın
                </motion.h2>
                <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
                  Sorularınız, talepleriniz veya hızlı bir teklif almak için aşağıdaki iletişim bilgilerinden bize ulaşabilir veya formu doldurabilirsiniz.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col gap-6 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Merkez Ofis</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Alaaddinbey mh. 622. Sok. Sera Plaza<br/>B Blok No.8H Nilüfer / Bursa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Telefon</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        +90 546 206 3001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">E-Posta</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        info@zegdisticaret.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <a href="https://www.instagram.com/zegdisticaret/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a href="https://x.com/zegdisticaret" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-colors" aria-label="X (Twitter)">
                      <Twitter className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <motion.div variants={fadeUp} className="w-full h-64 bg-bg-secondary rounded-2xl border border-border-light flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 map-pattern opacity-20"></div>
                <div className="text-center z-10">
                  <MapPin className="w-8 h-8 text-accent-secondary mx-auto mb-2 opacity-50" strokeWidth={1.5} />
                  <span className="text-text-muted text-sm tracking-widest uppercase">Harita Görünümü</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-primary p-8 md:p-12 rounded-3xl border border-border-light shadow-sm"
            >
              <h3 className="text-2xl font-serif text-text-primary mb-8">Hızlı Teklif Alın</h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-primary">Ad Soyad</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-text-primary">Firma Adı</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="Firmanızın Adı"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-primary">E-Posta</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="ornek@firma.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-text-primary">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="+90 (5XX) XXX XX XX"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-text-primary">İlgilendiğiniz Hizmet</label>
                  <select 
                    id="service" 
                    className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors text-text-secondary"
                  >
                    <option value="">Lütfen seçiniz</option>
                    <option value="uretici">Üretici Bulma</option>
                    <option value="tedarik">Ürün Tedariği</option>
                    <option value="nakliye">Nakliye Organizasyonu</option>
                    <option value="gumruk">Gümrük Süreçleri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">Mesajınız / Talebiniz</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-white border border-border-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                    placeholder="Talebinizi detaylı olarak açıklayabilirsiniz..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full bg-text-primary text-white py-4 rounded-lg text-sm font-medium tracking-wide hover:bg-accent-primary transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Gönder <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
