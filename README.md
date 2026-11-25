# DJABER FROID — بطاقة التعريف الإلكترونية (One Page Website)

موقع إلكتروني احترافي من صفحة واحدة فقط لمحل **DJABER FROID** لقطع غيار الأجهزة الكهرومنزلية والتبريد والتدفئة، مصمم بألوان الأزرق والأبيض وفق مبدأ **Mobile First** مع دعم كامل للغتين **العربية (RTL)** و**الفرنسية (LTR)**.

---

## 📁 مكونات المشروع

```text
├── index.html                  # الصفحة الرئيسية + وسوم SEO و Open Graph
├── config.js                   # ملف الإعدادات الوحيد لتعديل جميع البيانات والروابط
├── styles.css                  # التصميم المتجاوب (أزرق وأبيض)
├── app.js                      # منطق تبديل اللغة، إخفاء الروابط الفارغة، النسخ والمشاركة
├── assets/
│   └── hero-djaber-froid.jpg   # الصورة الاحترافية في أعلى الصفحة
└── README.md                   # دليل التشغيل والتعديل والنشر
```

---

## ⚙️ كيفية تعديل المعلومات والروابط (من ملف واحد فقط)

افتح ملف **`config.js`** بأي محرر نصوص (مثل Notepad أو VS Code) وعدّل القيم التالية:

1. **اللغة الافتراضية (`defaultLang`)**: `"ar"` للعربية أو `"fr"` للفرنسية.
2. **معلومات المحل (`brand`)**:
   - الاسم، الوصف، التخصصات.
   - الشعار (`logoUrl`): اتركه `""` لاستخدام شعار **DJABER FROID** المدمج، أو ضع مسار شعارك مثل `"assets/logo.png"`.
   - الصورة الرئيسية (`heroImage`): يمكنك تغييرها بوضع صورتك داخل مجلد `assets/` وكتابة مسارها.
3. **وسائل التواصل (`contact`)**:
   - `phoneDisplay`: رقم الهاتف كما يظهر للزوار.
   - `phoneTel`: رقم الاتصال المباشر بصيغة دولية مثل `"+213550123456"`.
   - `whatsapp`: رقم الواتساب بصيغة دولية بدون `+` (مثل `"213550123456"`) أو الرابط الكامل.
   - `facebook`: رابط صفحة فيسبوك الكامل.
   - `viber`: رقم فايبر بصيغة دولية مثل `"+213550123456"` أو رابط فايبر.
   - `messenger`: رابط ماسنجر مثل `"https://m.me/yourpage"`.
   - **ملاحظة مهمة**: أي وسيلة تواصل تتركها فارغة `""` **لن تظهر نهائياً** في الموقع.
4. **الموقع والخريطة (`location`)**:
   - عدّل العنوان بالعربية والفرنسية.
   - ضع رابط الاتجاهات الحقيقي في `directionsUrl`.
   - ضع إحداثيات المحل (`lat`, `lng`) من خرائط Google (بالضغط بالزر الأيمن على موقع المحل في Google Maps ونسخ الإحداثيات)، أو الصق رابط التضمين في `embedUrl`.
5. **أوقات العمل (`hours`)**:
   - عدّل الأيام والساعات بالعربية والفرنسية، واجعل `closed: true` لأيام العطلة.

---

## 🌐 ملاحظة مهمة لمشاركة الموقع على Facebook و WhatsApp (Open Graph)

تقوم منصات مثل **Facebook** و **WhatsApp** بقراءة وسوم المعاينة مباشرة من ملف `index.html`.
بعد رفع الموقع على الاستضافة والحصول على رابطك النهائي (مثلاً `https://djaber-froid.netlify.app`)، يُنصح بفتح `index.html` وتحديث رابط الصورة في:
- `<meta property="og:image" content="https://YOUR-DOMAIN/assets/hero-djaber-froid.jpg">`
- `<meta name="twitter:image" content="https://YOUR-DOMAIN/assets/hero-djaber-froid.jpg">`

وإضافة وسم `<meta property="og:url" content="https://YOUR-DOMAIN/">` ثم اختبار الرابط عبر أداة [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).

---

## 🚀 التشغيل محلياً والنشر على استضافة مجانية

### 1. التشغيل المحلي (على الحاسوب)
يمكنك فتح ملف `index.html` مباشرة بالضغط المزدوج عليه في المتصفح، أو تشغيل خادم محلي بسيط عبر:
```bash
python -m http.server 8080
```
ثم زيارة `http://localhost:8080`.

### 2. النشر المجاني (أسرع 3 طرق)
- **Netlify Drop (الأسهل — بدون برمجة)**:
  1. ادخل إلى [app.netlify.com/drop](https://app.netlify.com/drop).
  2. اسحب مجلد المشروع بالكامل وأفلته في الصفحة.
  3. ستحصل فوراً على رابط HTTPS مجاني جاهز للمشاركة.
- **GitHub Pages**:
  1. ارفع الملفات إلى مستودع GitHub.
  2. من **Settings → Pages** اختر الفرع `main` والمجلد `/ (root)`.
- **Cloudflare Pages / Vercel**:
  1. ارفع المجلد أو اربط مستودع GitHub.
  2. لا يتطلب أي أمر بناء (Build Command فارغ، Output Directory هو `.`).

---

## Guide rapide (Français)

- Modifiez uniquement **`config.js`** pour changer le numéro de téléphone, WhatsApp, Facebook, Viber, Messenger, l'adresse, les coordonnées Google Maps et les horaires.
- Tout champ laissé vide `""` est automatiquement masqué sur la page.
- Déployez le dossier complet tel quel sur **Netlify Drop**, **GitHub Pages**, **Vercel** ou **Cloudflare Pages** (site 100 % statique, ultra rapide, sans base de données).
