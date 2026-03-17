import { motion } from "motion/react";
import { Globe, ShieldCheck, Users, Target } from "lucide-react";

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

export default function About() {
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
            Hakkımızda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light"
          >
            2009'dan bu yana, dış ticareti karmaşık bir süreç olmaktan çıkarıp, güvenilir ve yönetilebilir bir iş ortaklığına dönüştürüyoruz.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif leading-tight">
                Global ticarette <br/>
                <span className="italic text-accent-primary">güvenilir</span> köprünüz.
              </motion.h2>
              
              <motion.div variants={fadeUp} className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  ZEG Dış Ticaret olarak, uluslararası ticaretin getirdiği zorlukları, bürokrasiyi ve riskleri müşterilerimiz adına üstleniyoruz. Amacımız, sadece ürün tedarik etmek değil, firmanızın global pazarlardaki en güçlü ve güvenilir temsilcisi olmaktır.
                </p>
                <p>
                  Yılların getirdiği tecrübe ile üretici bulma, kalite kontrol, gümrükleme ve lojistik süreçlerini tek bir merkezden, uçtan uca yönetiyoruz. Müşterilerimiz kendi ana işlerine odaklanırken, biz arka planda tüm tedarik zincirinin kusursuz işlemesini sağlıyoruz.
                </p>
                <p>
                  Asya'dan Avrupa'ya uzanan geniş tedarikçi ağımız ve alanında uzman operasyon ekibimizle, her ölçekten işletmenin ithalat ve ihracat hedeflerine güvenle ulaşmasına rehberlik ediyoruz.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                alt="Global Ticaret ve Lojistik" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-primary/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Yaklaşımımız</h2>
            <p className="text-text-secondary text-lg">
              İşimizi yaparken benimsediğimiz temel değerler, müşterilerimizle kurduğumuz uzun soluklu güven ilişkisinin temelini oluşturur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tek Merkezden Yönetim", desc: "Tedarikten teslimata tüm süreci tek muhatap ile, karmaşadan uzak şekilde yönetiriz.", icon: Target },
              { title: "Şeffaflık ve Güven", desc: "Maliyetler, süreçler ve olası riskler konusunda her zaman açık ve dürüst bir iletişim kurarız.", icon: ShieldCheck },
              { title: "Global Bakış Açısı", desc: "Dünya pazarlarındaki trendleri, mevzuatları ve fırsatları yakından takip ederiz.", icon: Globe },
              { title: "Güçlü Tedarik Ağı", desc: "Yıllar içinde oluşturduğumuz, denetlenmiş ve güvenilir üretici ekosistemini sunarız.", icon: Users },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }
                }}
                className="bg-white p-8 rounded-2xl border border-border-light flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
