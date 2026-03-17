import { motion } from "motion/react";
import { ArrowRight, Globe, ShieldCheck, PackageSearch, Ship, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-primary overflow-hidden">
        {/* Decorative Map Pattern Background */}
        <div className="absolute inset-0 map-pattern opacity-40 pointer-events-none"></div>
        
        {/* Abstract World Map SVG / Decorative Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-border-light opacity-20 pointer-events-none"></div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-border-medium opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-accent-primary text-sm font-medium tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-accent-primary"></span>
              Global Tedarik Çözümleri
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-text-primary">
              Ticareti karmaşık değil, <span className="italic text-accent-primary">yönetilebilir</span> hale getiriyoruz.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Dış ticarette sade, kontrollü ve güvenilir operasyon yönetimi. Üreticiden teslimata kadar tüm süreci tek merkezden yönetin.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/iletisim" className="bg-text-primary text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-accent-primary transition-all duration-300 flex items-center gap-2 group">
                Teklif Alın <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/hizmetler" className="bg-transparent text-text-primary border border-border-medium px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:border-text-primary transition-all duration-300">
                Hizmetlerimizi İnceleyin
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Editorial Image Placeholder */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Lojistik Konteyner" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-text-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-xl max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Global Ağ</p>
                  <p className="text-xs text-text-secondary">40+ Ülkeye Teslimat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { title: "2009'dan Beri", desc: "Sektörel Deneyim", icon: ShieldCheck },
              { title: "Uçtan Uca", desc: "Süreç Yönetimi", icon: ArrowRight },
              { title: "Global", desc: "Tedarik Ağı", icon: Globe },
              { title: "Üreticiden", desc: "Teslimata Çözüm", icon: PackageSearch },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-3"
              >
                <item.icon className="w-8 h-8 text-accent-secondary mb-2" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary uppercase tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Uzmanlık Alanlarımız</h2>
              <p className="text-text-secondary text-lg">
                Dış ticaretin her aşamasında, riskleri minimize eden ve verimliliği artıran profesyonel çözümler sunuyoruz.
              </p>
            </div>
            <Link to="/hizmetler" className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-text-primary transition-colors pb-1 border-b border-accent-primary/30 hover:border-text-primary">
              Tüm Hizmetler <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Tedarikçi Doğrulama", desc: "Güvenilir üreticileri buluyor, fabrika denetimlerini ve yeterlilik analizlerini gerçekleştiriyoruz.", icon: PackageSearch },
              { title: "Gümrük Yönetimi", desc: "Karmaşık gümrük mevzuatlarını sizin adınıza yönetiyor, evrak süreçlerini eksiksiz tamamlıyoruz.", icon: FileText },
              { title: "Nakliye Organizasyonu", desc: "Deniz, hava ve kara yolu taşımacılığında en uygun rotayı ve maliyeti planlıyoruz.", icon: Ship },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }
                }}
                className="bg-white p-10 rounded-2xl border border-border-light hover:border-accent-primary/30 transition-colors group"
              >
                <service.icon className="w-10 h-10 text-accent-secondary mb-6 group-hover:text-accent-primary transition-colors" strokeWidth={1} />
                <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section: Ancient to Modern */}
      <section className="py-24 md:py-32 bg-text-primary text-bg-primary relative overflow-hidden">
        {/* Subtle Map Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/old-map.png")' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-t-full overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Deniz Feneri ve Gemi" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2 flex flex-col gap-8"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-white">
                Yüzyıllık ticaret kültürünü, <br/>
                <span className="italic text-accent-secondary">modern lojistikle</span> buluşturuyoruz.
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed max-w-lg">
                İpek Yolu'ndan günümüzün devasa konteyner limanlarına... Ticaretin özü güven ve doğru rotadır. Biz, geçmişin ticaret ahlakını günümüzün hızı ve teknolojisiyle harmanlayarak yükünüzü taşıyoruz.
              </motion.p>
              
              <motion.div variants={fadeUp} className="pt-6">
                <Link to="/hakkimizda" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent-secondary transition-colors pb-1 border-b border-white/30 hover:border-accent-secondary">
                  Hikayemizi Okuyun <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Summary */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nasıl Çalışıyoruz?</h2>
            <p className="text-text-secondary text-lg">
              Süreci sizin için şeffaf, öngörülebilir ve zahmetsiz hale getiren 4 temel adım.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border-medium -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Talep & Analiz", desc: "İhtiyaçlarınızı dinliyor, en uygun tedarik stratejisini belirliyoruz." },
              { step: "02", title: "Tedarik & Üretim", desc: "Doğru üreticiyi buluyor, numune ve üretim süreçlerini denetliyoruz." },
              { step: "03", title: "Gümrük & Evrak", desc: "Tüm yasal mevzuatları ve gümrük belgelerini eksiksiz hazırlıyoruz." },
              { step: "04", title: "Teslimat", desc: "Ürünlerinizi kapınıza kadar güvenle ve zamanında ulaştırıyoruz." },
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }
                }}
                className="relative z-10 flex flex-col items-center text-center bg-bg-secondary pt-8 md:pt-0"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-border-medium flex items-center justify-center font-serif text-xl text-accent-primary mb-6 shadow-sm">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[200px]">{process.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/surec" className="inline-flex items-center gap-2 text-text-primary font-medium hover:text-accent-primary transition-colors pb-1 border-b border-text-primary/30 hover:border-accent-primary">
              Sürecin Detayları <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Tedarik zincirinizi güvence altına alın.</h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            İthalat ve ihracat süreçlerinizde profesyonel destek almak, maliyetlerinizi optimize etmek ve riskleri sıfırlamak için bizimle iletişime geçin.
          </p>
          <Link to="/iletisim" className="inline-flex items-center justify-center bg-text-primary text-white px-10 py-5 rounded-full text-sm font-medium tracking-wide hover:bg-accent-primary transition-all duration-300">
            Hemen Teklif Alın
          </Link>
        </div>
      </section>
    </div>
  );
}
