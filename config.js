/**
 * ============================================================================
 * DJABER FROID — ملف الإعدادات الموحّد / Fichier de configuration unique
 * ============================================================================
 * عدّل المعلومات والروابط هنا فقط دون لمس ملفات التصميم (HTML / CSS / JS).
 * Modifiez toutes les informations et liens ici sans toucher au design.
 *
 * ملاحظة مهمة / Note importante :
 * أي رابط أو حقل تتركه فارغاً "" سيختفي تلقائياً من الموقع ولن يظهر للزوار.
 * Tout lien laissé vide "" sera automatiquement masqué sur le site.
 * ============================================================================
 */

window.DJABER_CONFIG = {
  // اللغة الافتراضية عند فتح الموقع: "ar" للعربية أو "fr" للفرنسية
  // Langue par défaut : "ar" (Arabe) ou "fr" (Français)
  defaultLang: "ar",

  // معلومات المحل الأساسية / Informations principales
  brand: {
    name: "DJABER FROID",
    tagline: {
      ar: "قطع غيار الأجهزة الكهرومنزلية والتبريد والتدفئة",
      fr: "Pièces de rechange pour électroménager, froid et chauffage"
    },
    badges: {
      ar: ["قطع غيار أصلية", "تبريد وتكييف", "تدفئة مركزية", "أجهزة كهرومنزلية"],
      fr: ["Pièces d'origine", "Froid & Climatisation", "Chauffage", "Électroménager"]
    },
    // اتركه فارغاً "" لاستخدام شعار DJABER FROID المدمج عالي الدقة، أو ضع مسار صورة مثل "assets/logo.png"
    // Laissez "" pour utiliser le logo SVG intégré, ou indiquez un chemin d'image
    logoUrl: "",
    // صورة النشاط الاحترافية في أعلى الصفحة (اتركه "" لإخفائها)
    // Image professionnelle d'en-tête (laissez "" pour masquer)
    heroImage: "assets/hero-djaber-froid.jpg",
    heroImageAlt: {
      ar: "محل DJABER FROID لقطع غيار الأجهزة الكهرومنزلية والتبريد والتدفئة",
      fr: "DJABER FROID - Pièces de rechange électroménager, froid et chauffage"
    }
  },

  // وسائل التواصل (اترك أي حقل فارغاً "" لإخفاء الزر الخاص به)
  // Moyens de contact (laissez "" pour masquer le bouton correspondant)
  contact: {
    // رقم الهاتف المعروض للزوار / Numéro affiché
    phoneDisplay: "0662 37 21 49",

    // رقم الاتصال الهاتفي المباشر (tel:) / Numéro pour appel direct
    phoneTel: "+213662372149",

    // رقم واتساب بالصيغة الدولية (مثل "213662372149") أو رابط كامل ("https://wa.me/...")
    // Numéro WhatsApp international ou lien complet
    whatsapp: "213662372149",
    whatsappMessage: {
      ar: "السلام عليكم، أستفسر عن توفر قطعة غيار لدى DJABER FROID.",
      fr: "Bonjour, je souhaite me renseigner sur une pièce de rechange chez DJABER FROID."
    },

    // رابط صفحة فيسبوك الكامل / Lien complet de la page Facebook
    facebook: "https://www.facebook.com/p/BLIDA-FROID-100048915283410/?locale=fr_FR",

    // رقم فايبر بالصيغة الدولية (مثل "+213662372149") أو رابط دعوة فايبر
    // Numéro Viber international ou lien d'invitation Viber
    viber: "+213662372149",

    // رابط ماسنجر الكامل (مثل "https://m.me/djaberfroid") أو اسم الصفحة فقط
    // Lien complet Messenger (ex: "https://m.me/djaberfroid") ou nom de la page
    messenger: "https://m.me/100048915283410"
  },

  // الموقع والخريطة / Localisation et carte Google Maps
  location: {
    address: {
      ar: "البليدة أولاديعيش",
      fr: "BLIDA - OULED YAICH "
    },
    // رابط الاتجاهات في خرائط Google (ضع رابط المشاركة الحقيقي لمحلك)
    // Lien d'itinéraire Google Maps (collez le lien réel de votre magasin)
    directionsUrl: "https://maps.app.goo.gl/zF9hdECJhFzRvndn7",

    // رابط الخريطة المدمجة (iframe src) أو الإحداثيات أدناه
    // URL d'intégration Google Maps (ou utilisez les coordonnées ci-dessous)
    embedUrl: "",

    // إذا كان embedUrl فارغاً، تُنشأ الخريطة تلقائياً من خط العرض والطول (اتركهما null لإخفاء الخريطة)
    // Si embedUrl est vide, la carte utilise ces coordonnées (mettez null pour masquer)
    coordinates: {
      lat: 36.7538,
      lng: 3.0588,
      zoom: 15
    }
  },

  // أوقات العمل / Horaires d'ouverture
  hours: {
    summary: {
      ar: "من السبت إلى الخميس • الجمعة مغلق",
      fr: "Du Samedi au Jeudi • Fermé le Vendredi"
    },
    schedule: [
      {
        days: { ar: "السبت — الخميس", fr: "Samedi — Jeudi" },
        time: { ar: "08:30 — 17:30", fr: "08:30 — 17:30" },
        closed: false
      },
      {
        days: { ar: "الجمعة", fr: "Vendredi" },
        time: { ar: "مغلق", fr: "Fermé" },
        closed: true
      }
    ]
  },

  // إعدادات المشاركة / Paramètres de partage
  share: {
    // اتركه فارغاً "" لمشاركة رابط الصفحة الحالي تلقائياً
    // Laissez "" pour partager automatiquement l'URL actuelle
    url: "",
    title: {
      ar: "DJABER FROID | قطع غيار الأجهزة الكهرومنزلية والتبريد والتدفئة",
      fr: "DJABER FROID | Pièces de rechange électroménager, froid et chauffage"
    },
    text: {
      ar: "تواصل مع محل DJABER FROID لقطع غيار الأجهزة الكهرومنزلية والتبريد والتدفئة.",
      fr: "Contactez DJABER FROID pour toutes vos pièces de rechange électroménager, froid et chauffage."
    }
  }
};
