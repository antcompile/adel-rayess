import type { Lang } from "../i18n/languages";

export interface Service {
  id: string;
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const services: Service[] = [
  {
    id: "spinal-treatment",
    icon: "Activity",
    title: {
      en: "Non-Surgical Spinal Treatment",
      ar: "علاج العمود الفقري بدون جراحة",
      fr: "Traitement Spinal Non-Chirurgical",
    },
    description: {
      en: "Advanced osteopathic techniques targeting spinal dysfunction using The Primary Lesion methodology for lasting relief.",
      ar: "تقنيات تقويم العظام المتقدمة التي تستهدف اختلال وظائف العمود الفقري باستخدام منهجية الآفة الأولية لتخفيف دائم.",
      fr: "Techniques ostéopathiques avancées ciblant les dysfonctions spinales avec la méthodologie de la Lésion Primaire.",
    },
  },
  {
    id: "chronic-pain",
    icon: "Heart",
    title: {
      en: "Chronic Pain Management",
      ar: "إدارة الألم المزمن",
      fr: "Gestion de la Douleur Chronique",
    },
    description: {
      en: "Comprehensive pain management addressing musculoskeletal conditions through targeted manual therapy and advanced equipment.",
      ar: "إدارة شاملة للألم تعالج حالات الجهاز العضلي الهيكلي من خلال العلاج اليدوي المستهدف والمعدات المتقدمة.",
      fr: "Gestion complète de la douleur ciblant les conditions musculo-squelettiques par thérapie manuelle et équipements avancés.",
    },
  },
  {
    id: "neurological",
    icon: "Brain",
    title: {
      en: "Neurological Conditions",
      ar: "الحالات العصبية",
      fr: "Conditions Neurologiques",
    },
    description: {
      en: "Specialized treatment for neurological conditions including sciatica, nerve compression, and neuropathic pain syndromes.",
      ar: "علاج متخصص للحالات العصبية بما في ذلك عرق النسا وضغط الأعصاب ومتلازمات الألم العصبي.",
      fr: "Traitement spécialisé des conditions neurologiques incluant sciatique, compression nerveuse et douleurs neuropathiques.",
    },
  },
  {
    id: "posture-correction",
    icon: "User",
    title: {
      en: "Posture Correction",
      ar: "تصحيح الوضعية",
      fr: "Correction Posturale",
    },
    description: {
      en: "Expert posture analysis and correction programs trusted by celebrities and models for optimal spinal alignment.",
      ar: "برامج تحليل وتصحيح الوضعية الموثوقة من قبل المشاهير والعارضات لمحاذاة مثالية للعمود الفقري.",
      fr: "Programmes d'analyse et de correction posturale de confiance des célébrités pour un alignement spinal optimal.",
    },
  },
  {
    id: "sports-rehabilitation",
    icon: "Dumbbell",
    title: {
      en: "Sports Rehabilitation",
      ar: "إعادة التأهيل الرياضي",
      fr: "Réhabilitation Sportive",
    },
    description: {
      en: "Performance-focused rehabilitation using Huber Motion Lab, laser therapy, and electrotherapy for athletes.",
      ar: "إعادة تأهيل تركز على الأداء باستخدام مختبر حركة هوبر والعلاج بالليزر والعلاج الكهربائي للرياضيين.",
      fr: "Réhabilitation orientée performance utilisant Huber Motion Lab, laser thérapie et électrothérapie pour athlètes.",
    },
  },
  {
    id: "spinal-decompression",
    icon: "ArrowDownUp",
    title: {
      en: "Spinal Decompression",
      ar: "تخفيف ضغط العمود الفقري",
      fr: "Décompression Spinale",
    },
    description: {
      en: "Lordex Spinal Decompression and Theraflex technology for disc herniation, stenosis, and degenerative conditions.",
      ar: "تقنية لوردكس لتخفيف ضغط العمود الفقري وثيرافلكس لحالات الانزلاق الغضروفي والتضيق والحالات التنكسية.",
      fr: "Technologie Lordex et Theraflex pour hernies discales, sténose et conditions dégénératives.",
    },
  },
];
