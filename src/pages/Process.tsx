import { motion } from "motion/react";
import { MessageSquare, Search, FileSignature, Ship, FileCheck, PackageCheck } from "lucide-react";

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

const steps = [
  {
    num: "01",
    title: "Talep Alınır",
    desc: "İhtiyaçlarınızı, ürün spesifikasyonlarını, hedef bütçenizi ve zaman çizelgenizi detaylı olarak dinliyor ve analiz ediyoruz.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "Üretici/Tedarikçi Araştırılır",
    desc: "Global ağımız üzerinden kriterlerinize en uygun, güvenilir ve kapasitesi yeterli üreticileri tespit edip ön değerlendirmelerini yapıyoruz.",
    icon: Search
  },
  {
    num: "03",
    title: "Uygun Operasyon Planı Hazırlanır",
    desc: "Numune onayı, üretim takvimi, kalite kontrol aşamaları ve maliyet analizlerini içeren detaylı bir operasyon planı sunuyoruz.",
    icon: FileSignature
  },
  {
    num: "04",
    title: "Nakliye ve Evrak Süreçleri Yönetilir",
    desc: "Üretimi tamamlanan ürünlerin en uygun taşıma moduyla (deniz, hava, kara) yola çıkmasını sağlıyor, gerekli tüm ihracat evraklarını hazırlıyoruz.",
    icon: Ship
  },
  {
    num: "05",
    title: "Gümrük İşlemleri Tamamlanır",
    desc: "Varış ülkesindeki gümrük mevzuatlarına uygun olarak ithalat beyannamelerini açıyor, vergileri hesaplıyor ve ürünlerin gümrükten sorunsuz çekilmesini sağlıyoruz.",
    icon: FileCheck
  },
  {
    num: "06",
    title: "Teslimat Yapılır",
    desc: "Gümrükten çekilen ürünleri, deponuza veya doğrudan son müşterinize güvenle ve zamanında teslim ederek süreci tamamlıyoruz.",
    icon: PackageCheck
  }
];

export default function Process() {
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
            İş Sürecimiz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light"
          >
            Karmaşık dış ticaret operasyonlarını, sizin için şeffaf, öngörülebilir ve zahmetsiz 6 temel adıma dönüştürüyoruz.
          </motion.p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-medium -translate-x-1/2 z-0"></div>

            <div className="flex flex-col gap-16 md:gap-24">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.num}
                  variants={fadeUp}
                  className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 flex flex-col gap-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <span className="font-serif text-5xl text-border-medium/40 font-light select-none">{step.num}</span>
                      <h3 className="text-2xl font-serif text-text-primary">{step.title}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-bg-primary border border-border-medium items-center justify-center shadow-sm z-20">
                    <step.icon className="w-6 h-6 text-accent-primary" strokeWidth={1.5} />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
