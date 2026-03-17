import { motion } from "motion/react";
import { Search, ShieldCheck, Box, Ship, FileText, Activity, MapPin } from "lucide-react";

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

const services = [
  {
    id: "uretici-bulma",
    title: "Üretici Bulma",
    desc: "İhtiyaç duyduğunuz ürünler için global pazarlarda en uygun, güvenilir ve kapasitesi yeterli üreticileri tespit ediyoruz.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "tedarikci-dogrulama",
    title: "Tedarikçi Doğrulama",
    desc: "Potansiyel üreticilerin yasal durumlarını, üretim kapasitelerini, kalite standartlarını ve geçmiş performanslarını yerinde denetliyoruz.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: "urun-tedarigi",
    title: "Ürün Tedariği",
    desc: "Numune aşamasından seri üretime kadar tüm süreci yönetiyor, kalite kontrol süreçlerini titizlikle uygulayarak ürünlerinizi güvence altına alıyoruz.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "nakliye-organizasyonu",
    title: "Nakliye Organizasyonu",
    desc: "Ürünlerinizin hacmine, aciliyetine ve bütçenize göre deniz, hava, kara veya demiryolu taşımacılığında en optimum rotayı planlıyoruz.",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gumruk-surecleri",
    title: "Gümrük Süreç Yönetimi",
    desc: "İthalat ve ihracat mevzuatlarına tam uyum sağlayarak, gümrük beyannameleri ve gerekli tüm evrak süreçlerini sizin adınıza eksiksiz yürütüyoruz.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "operasyon-takibi",
    title: "Operasyon Takibi",
    desc: "Siparişin verilmesinden ürünlerin teslimine kadar geçen tüm süreci anlık olarak takip ediyor ve sizi düzenli olarak bilgilendiriyoruz.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "kapiya-teslim",
    title: "Kapıya Teslim",
    desc: "Gümrükten çekilen ürünlerinizin, depolarınıza veya doğrudan müşterilerinize güvenli ve zamanında ulaşmasını sağlıyoruz.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
  }
];

export default function Services() {
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
            Hizmetlerimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light"
          >
            Dış ticaretin her aşamasında, riskleri minimize eden ve verimliliği artıran profesyonel, uçtan uca çözümler sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-16 md:gap-24"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                variants={fadeUp}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-full bg-bg-secondary border border-border-light flex items-center justify-center mb-2">
                    <service.icon className="w-8 h-8 text-accent-primary" strokeWidth={1} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-text-primary">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="pt-4">
                    <div className="w-12 h-[1px] bg-accent-primary/50"></div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border-light">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-text-primary/5 mix-blend-multiply"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
