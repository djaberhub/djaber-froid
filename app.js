(function () {
  "use strict";

  const cfg = window.DJABER_CONFIG || {};

  const UI_TEXT = {
    ar: {
      cardLabel: "بطاقة التواصل الرسمية",
      shareShort: "مشاركة",
      shareAria: "مشاركة رابط الموقع",
      badgesAria: "التخصصات",
      phoneLabel: "رقم الهاتف المباشر",
      copyPhone: "نسخ الرقم",
      contactHeading: "تواصل معنا مباشرة",
      contactSubtitle: "اختر الوسيلة المناسبة للاستفسار عن توفر قطع الغيار",
      locationHeading: "موقع المحل والاتجاهات",
      directionsBtn: "فتح الاتجاهات على خرائط Google",
      hoursHeading: "أوقات العمل",
      shareCardTitle: "شارك بطاقة المحل",
      shareCardDesc: "أرسل رابط DJABER FROID بسهولة عبر واتساب أو فيسبوك",
      shareBtn: "مشاركة الرابط",
      footerRights: "جميع الحقوق محفوظة",
      mapTitle: "خريطة موقع DJABER FROID",
      copiedPhoneToast: "تم نسخ رقم الهاتف بنجاح!",
      copiedLinkToast: "تم نسخ رابط الموقع للمشاركة!",
      copyFailedToast: "تعذر النسخ، يرجى النسخ يدوياً",
      channels: {
        phone: { title: "اتصال هاتفي مباشر", hint: "اتصل الآن للاستفسار الفوري" },
        whatsapp: { title: "WhatsApp", hint: "راسلنا مباشرة عبر واتساب" },
        facebook: { title: "Facebook", hint: "صفحتنا الرسمية على فيسبوك" },
        viber: { title: "Viber", hint: "اتصال أو رسالة عبر فايبر" },
        messenger: { title: "Messenger", hint: "تحدث معنا عبر ماسنجر" }
      }
    },
    fr: {
      cardLabel: "DJABER FROID",
      shareShort: "Partager",
      shareAria: "Partager le lien du site",
      badgesAria: "Spécialités",
      phoneLabel: "Téléphone direct",
      copyPhone: "Copier",
      contactHeading: "Contactez-nous directement",
      contactSubtitle: "Choisissez votre moyen préféré pour vérifier la disponibilité des pièces",
      locationHeading: "Localisation et itinéraire",
      directionsBtn: "Ouvrir l'itinéraire sur Google Maps",
      hoursHeading: "Horaires d'ouverture",
      shareCardTitle: "Partager la carte du magasin",
      shareCardDesc: "Envoyez facilement le lien DJABER FROID sur WhatsApp ou Facebook",
      shareBtn: "Partager le lien",
      footerRights: "Tous droits réservés",
      mapTitle: "Carte de localisation DJABER FROID",
      copiedPhoneToast: "Numéro de téléphone copié !",
      copiedLinkToast: "Lien du site copié pour le partage !",
      copyFailedToast: "Copie impossible, veuillez copier manuellement",
      channels: {
        phone: { title: "Appel téléphonique direct", hint: "Appelez maintenant" },
        whatsapp: { title: "WhatsApp", hint: "Écrivez-nous sur WhatsApp" },
        facebook: { title: "Facebook", hint: "Visitez notre page Facebook" },
        viber: { title: "Viber", hint: "Appel ou message sur Viber" },
        messenger: { title: "Messenger", hint: "Discutez sur Messenger" }
      }
    }
  };

  // Authentic official brand SVG icons
  const CHANNEL_ICONS = {
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>' +
      "</svg>",
    whatsapp:
      '<svg viewBox="0 0 32 32" aria-hidden="true">' +
      '<path fill="#25D366" d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.51L3 29l6.68-1.75A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"/>' +
      '<path fill="#FFFFFF" d="M23.51 20.47c-.32.9-1.85 1.73-2.55 1.83-.65.1-1.48.14-2.38-.15-.55-.18-1.26-.41-2.16-.8-3.8-1.64-6.28-5.47-6.47-5.72-.19-.25-1.55-2.06-1.55-3.93 0-1.87.98-2.79 1.33-3.17.35-.38.76-.48 1.01-.48h.73c.24 0 .56-.09.88.67.32.77 1.1 2.67 1.2 2.86.1.19.16.41.03.67-.13.25-.19.41-.38.63-.19.22-.4.5-.57.67-.19.19-.39.4-.17.78.22.38.98 1.62 2.11 2.62 1.45 1.29 2.67 1.69 3.05 1.88.38.19.6.16.82-.1.22-.25.95-1.11 1.2-1.49.25-.38.51-.32.85-.19.35.13 2.22 1.05 2.6 1.24.38.19.63.29.73.45.09.16.09.92-.23 1.82z"/>' +
      "</svg>",
    facebook:
      '<svg viewBox="0 0 32 32" aria-hidden="true">' +
      '<circle cx="16" cy="16" r="14" fill="#1877F2"/>' +
      '<path fill="#FFFFFF" d="M17.85 26V16.88h3.06l.46-3.56h-3.52v-2.27c0-1.03.29-1.73 1.76-1.73h1.88V6.14c-.33-.04-1.44-.14-2.74-.14-2.71 0-4.57 1.65-4.57 4.69v2.63H11.1v3.56h3.08V26h3.67z"/>' +
      "</svg>",
    viber:
      '<svg viewBox="0 0 32 32" aria-hidden="true">' +
      '<path fill="#7360F2" d="M16 3C8.5 3 4 7.36 4 14.37c0 4.02 1.68 7.06 4.46 9.03v4.48l4.18-2.3c1.06.29 2.19.44 3.36.44 7.5 0 12-4.36 12-11.65C28 7.36 23.5 3 16 3z"/>' +
      '<path fill="#FFFFFF" d="M21.84 19.62c-.43.86-1.56 1.79-2.46 1.62-.66-.13-2.66-.93-4.9-2.76-1.88-1.53-3.17-3.44-3.71-4.88-.32-.86.38-1.87 1.21-2.37.45-.27.95-.18 1.24.18l1.25 1.54c.3.37.28.88-.05 1.23l-.45.49c-.17.18-.2.45-.08.67.55.97 1.65 2.09 2.66 2.66.22.12.49.09.67-.08l.49-.45c.35-.33.86-.35 1.23-.05l1.54 1.25c.37.3.46.81.21 1.25z"/>' +
      '<path fill="none" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" d="M16.4 8.6a5.4 5.4 0 0 1 5.4 5.4M16.4 11.1a2.9 2.9 0 0 1 2.9 2.9"/>' +
      "</svg>",
    messenger:
      '<svg viewBox="0 0 32 32" aria-hidden="true">' +
      '<defs><linearGradient id="msgGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00B2FF"/><stop offset="100%" stop-color="#006AFF"/></linearGradient></defs>' +
      '<path fill="url(#msgGrad)" d="M16 3C8.82 3 3 8.39 3 15.04c0 3.79 1.89 7.17 4.84 9.38V29l4.42-2.43c1.18.33 2.43.51 3.74.51 7.18 0 13-5.39 13-12.04C29 8.39 23.18 3 16 3z"/>' +
      '<path fill="#FFFFFF" d="M17.28 18.29l-3.31-3.53-6.45 3.53 7.1-7.53 3.39 3.53 6.37-3.53-7.1 7.53z"/>' +
      "</svg>"
  };

  const CHEVRON_SVG =
    '<svg class="chevron-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="15 18 9 12 15 6"></polyline>' +
    "</svg>";

  let currentLang = getInitialLang();
  let toastTimer = null;

  function isNonEmpty(val) {
    return typeof val === "string" ? val.trim().length > 0 : val !== null && val !== undefined;
  }

  function pickLang(value, lang) {
    if (typeof value === "string") return value;
    if (value && typeof value === "object") {
      return value[lang] || value.ar || value.fr || "";
    }
    return "";
  }

  function getInitialLang() {
    try {
      const saved = localStorage.getItem("djaber_froid_lang");
      if (saved === "ar" || saved === "fr") return saved;
    } catch (_) {
      // Ignore storage restrictions
    }
    return cfg.defaultLang === "fr" ? "fr" : "ar";
  }

  function setLanguage(lang) {
    currentLang = lang === "fr" ? "fr" : "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    try {
      localStorage.setItem("djaber_froid_lang", currentLang);
    } catch (_) {
      // Ignore storage restrictions
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderAll();
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast || !message) return;

    toast.textContent = message;
    toast.hidden = false;

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2800);
  }

  async function copyText(text, successMsg) {
    const dict = UI_TEXT[currentLang];
    if (!isNonEmpty(text)) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showToast(successMsg);
        return;
      }
    } catch (_) {
      // Fallback below
    }

    try {
      const temp = document.createElement("textarea");
      temp.value = text;
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(temp);
      showToast(copied ? successMsg : dict.copyFailedToast);
    } catch (_) {
      showToast(dict.copyFailedToast);
    }
  }

  function buildTelHref(rawPhone) {
    if (!isNonEmpty(rawPhone)) return "";
    const cleaned = rawPhone.trim().replace(/[^\d+]/g, "");
    return cleaned ? "tel:" + cleaned : "";
  }

  function buildWhatsAppHref(raw, lang) {
    if (!isNonEmpty(raw)) return "";
    const trimmed = raw.trim();
    const message = pickLang((cfg.contact || {}).whatsappMessage, lang);
    const encodedMsg = isNonEmpty(message) ? encodeURIComponent(message.trim()) : "";

    if (/^https?:\/\//i.test(trimmed)) {
      if (!encodedMsg || trimmed.includes("text=")) return trimmed;
      return trimmed + (trimmed.includes("?") ? "&" : "?") + "text=" + encodedMsg;
    }

    const digits = trimmed.replace(/\D/g, "");
    if (!digits) return "";
    return "https://wa.me/" + digits + (encodedMsg ? "?text=" + encodedMsg : "");
  }

  function buildViberHref(raw) {
    if (!isNonEmpty(raw)) return "";
    const trimmed = raw.trim();
    if (/^(viber:\/\/|https?:\/\/)/i.test(trimmed)) return trimmed;
    const cleaned = trimmed.replace(/[^\d+]/g, "");
    if (!cleaned) return "";
    return "viber://chat?number=" + encodeURIComponent(cleaned);
  }

  function buildSocialUrlHref(raw, basePrefix) {
    if (!isNonEmpty(raw)) return "";
    const trimmed = raw.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return basePrefix + trimmed.replace(/^\/+/, "");
  }

  function renderStaticLabels() {
    const dict = UI_TEXT[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    const shareTopBtn = document.getElementById("share-top-btn");
    if (shareTopBtn) shareTopBtn.setAttribute("aria-label", dict.shareAria);
    const badgesEl = document.getElementById("brand-badges");
    if (badgesEl) badgesEl.setAttribute("aria-label", dict.badgesAria);
  }

  function renderBrandAndHero() {
    const brand = cfg.brand || {};
    const name = isNonEmpty(brand.name) ? brand.name.trim() : "DJABER FROID";
    const tagline = pickLang(brand.tagline, currentLang);

    const nameEl = document.getElementById("brand-name");
    const taglineEl = document.getElementById("brand-tagline");
    const footerBrand = document.getElementById("footer-brand");

    if (nameEl) nameEl.textContent = name;
    if (footerBrand) footerBrand.textContent = name;
    if (taglineEl) {
      taglineEl.textContent = tagline;
      taglineEl.hidden = !isNonEmpty(tagline);
    }

    // Update page title dynamically
    document.title = isNonEmpty(tagline) ? name + " | " + tagline : name;

    // Optional custom logo image
    const logoBox = document.getElementById("logo-box");
    if (logoBox && isNonEmpty(brand.logoUrl)) {
      const existingImg = logoBox.querySelector("img");
      if (!existingImg) {
        const img = document.createElement("img");
        img.src = brand.logoUrl.trim();
        img.alt = name;
        logoBox.replaceChildren(img);
      }
    }

    // Hero image
    const heroWrap = document.getElementById("hero-media-wrap");
    const heroImg = document.getElementById("hero-image");
    if (heroWrap && heroImg) {
      if (isNonEmpty(brand.heroImage)) {
        heroWrap.hidden = false;
        heroImg.src = brand.heroImage.trim();
        heroImg.alt = pickLang(brand.heroImageAlt, currentLang) || name;
      } else {
        heroWrap.hidden = true;
      }
    }

    // Specialty badges
    const badgesEl = document.getElementById("brand-badges");
    if (badgesEl) {
      const items = (brand.badges && brand.badges[currentLang]) || [];
      badgesEl.replaceChildren();
      items.filter(isNonEmpty).forEach((text) => {
        const li = document.createElement("li");
        li.className = "badge-item";
        li.textContent = text;
        badgesEl.appendChild(li);
      });
      badgesEl.hidden = badgesEl.childElementCount === 0;
    }
  }

  function renderQuickPhone() {
    const contact = cfg.contact || {};
    const bar = document.getElementById("quick-phone-bar");
    const link = document.getElementById("phone-display-link");
    const copyBtn = document.getElementById("copy-phone-btn");
    if (!bar || !link || !copyBtn) return;

    const display = isNonEmpty(contact.phoneDisplay)
      ? contact.phoneDisplay.trim()
      : isNonEmpty(contact.phoneTel)
      ? contact.phoneTel.trim()
      : "";

    if (!display) {
      bar.hidden = true;
      return;
    }

    bar.hidden = false;
    link.textContent = display;

    const telHref = buildTelHref(contact.phoneTel || display);
    if (telHref) {
      link.href = telHref;
    } else {
      link.removeAttribute("href");
    }
  }

  function createContactButton(channel) {
    const a = document.createElement("a");
    a.className = "contact-btn" + (channel.primary ? " contact-btn--primary" : "");
    a.href = channel.href;
    if (channel.external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    if (channel.accentColor) {
      a.style.setProperty("--channel-color", channel.accentColor);
    }
    if (channel.iconBg) {
      a.style.setProperty("--channel-bg", channel.iconBg);
    }

    const left = document.createElement("span");
    left.className = "contact-btn-left";

    const iconWrap = document.createElement("span");
    iconWrap.className = "channel-icon";
    iconWrap.innerHTML = CHANNEL_ICONS[channel.key] || "";

    const textWrap = document.createElement("span");
    textWrap.className = "channel-text";

    const titleSpan = document.createElement("span");
    titleSpan.className = "channel-title";
    titleSpan.textContent = channel.title;

    const metaSpan = document.createElement("span");
    metaSpan.className = "channel-meta";
    metaSpan.textContent = channel.hint;
    if (channel.ltrHint) {
      metaSpan.dir = "ltr";
      metaSpan.style.unicodeBidi = "isolate";
      metaSpan.style.textAlign = currentLang === "ar" ? "right" : "left";
    }

    textWrap.append(titleSpan, metaSpan);
    left.append(iconWrap, textWrap);

    a.appendChild(left);
    a.insertAdjacentHTML("beforeend", CHEVRON_SVG);
    return a;
  }

  function renderContactChannels() {
    const section = document.getElementById("contact-section");
    const container = document.getElementById("contact-buttons");
    if (!section || !container) return;

    const c = cfg.contact || {};
    const dict = UI_TEXT[currentLang].channels;

    const channels = [
      {
        key: "phone",
        href: buildTelHref(c.phoneTel),
        title: dict.phone.title,
        hint: isNonEmpty(c.phoneDisplay) ? c.phoneDisplay.trim() : dict.phone.hint,
        ltrHint: isNonEmpty(c.phoneDisplay),
        primary: true,
        external: false
      },
      {
        key: "whatsapp",
        href: buildWhatsAppHref(c.whatsapp, currentLang),
        title: dict.whatsapp.title,
        hint: dict.whatsapp.hint,
        accentColor: "#25D366",
        iconBg: "#EAFBF0",
        external: true
      },
      {
        key: "facebook",
        href: buildSocialUrlHref(c.facebook, "https://www.facebook.com/"),
        title: dict.facebook.title,
        hint: dict.facebook.hint,
        accentColor: "#1877F2",
        iconBg: "#EAF3FF",
        external: true
      },
      {
        key: "viber",
        href: buildViberHref(c.viber),
        title: dict.viber.title,
        hint: dict.viber.hint,
        accentColor: "#7360F2",
        iconBg: "#F1EEFE",
        external: false
      },
      {
        key: "messenger",
        href: buildSocialUrlHref(c.messenger, "https://m.me/"),
        title: dict.messenger.title,
        hint: dict.messenger.hint,
        accentColor: "#0084FF",
        iconBg: "#E8F4FF",
        external: true
      }
    ];

    container.replaceChildren();
    channels.forEach((ch) => {
      if (isNonEmpty(ch.href)) {
        container.appendChild(createContactButton(ch));
      }
    });

    section.hidden = container.childElementCount === 0;
  }

  function renderLocation() {
    const loc = cfg.location || {};
    const section = document.getElementById("location-section");
    const addressEl = document.getElementById("store-address");
    const mapWrap = document.getElementById("map-container");
    const iframe = document.getElementById("google-map-iframe");
    const dirBtn = document.getElementById("directions-btn");
    if (!section) return;

    const address = pickLang(loc.address, currentLang);
    if (addressEl) {
      addressEl.textContent = address;
      addressEl.hidden = !isNonEmpty(address);
    }

    const coords = loc.coordinates || {};
    const hasCoords =
      typeof coords.lat === "number" &&
      typeof coords.lng === "number" &&
      !Number.isNaN(coords.lat) &&
      !Number.isNaN(coords.lng);

    let embedSrc = isNonEmpty(loc.embedUrl) ? loc.embedUrl.trim() : "";
    if (!embedSrc && hasCoords) {
      const zoom = Number(coords.zoom) || 15;
      embedSrc =
        "https://www.google.com/maps?q=" +
        coords.lat +
        "," +
        coords.lng +
        "&hl=" +
        currentLang +
        "&z=" +
        zoom +
        "&output=embed";
    }

    if (mapWrap && iframe) {
      if (embedSrc) {
        mapWrap.hidden = false;
        iframe.title = UI_TEXT[currentLang].mapTitle;
        if (iframe.getAttribute("src") !== embedSrc) {
          iframe.src = embedSrc;
        }
      } else {
        mapWrap.hidden = true;
      }
    }

    let dirHref = isNonEmpty(loc.directionsUrl) ? loc.directionsUrl.trim() : "";
    if (!dirHref && hasCoords) {
      dirHref =
        "https://www.google.com/maps/dir/?api=1&destination=" +
        coords.lat +
        "," +
        coords.lng;
    }

    if (dirBtn) {
      if (dirHref) {
        dirBtn.hidden = false;
        dirBtn.href = dirHref;
      } else {
        dirBtn.hidden = true;
      }
    }

    const hasAnything = isNonEmpty(address) || Boolean(embedSrc) || Boolean(dirHref);
    section.hidden = !hasAnything;
  }

  function renderHours() {
    const hours = cfg.hours || {};
    const summaryEl = document.getElementById("hours-summary");
    const listEl = document.getElementById("hours-list");
    if (!listEl) return;

    const summary = pickLang(hours.summary, currentLang);
    if (summaryEl) {
      summaryEl.textContent = summary;
      summaryEl.hidden = !isNonEmpty(summary);
    }

    listEl.replaceChildren();
    const schedule = Array.isArray(hours.schedule) ? hours.schedule : [];
    schedule.forEach((row) => {
      const dayText = pickLang(row.days, currentLang);
      const timeText = pickLang(row.time, currentLang);
      if (!isNonEmpty(dayText) && !isNonEmpty(timeText)) return;

      const li = document.createElement("li");
      li.className = "hours-row";

      const daySpan = document.createElement("span");
      daySpan.className = "hours-day";
      daySpan.textContent = dayText;

      const timeSpan = document.createElement("span");
      timeSpan.className = "hours-time" + (row.closed ? " hours-time--closed" : "");
      timeSpan.textContent = timeText;
      if (!row.closed) timeSpan.dir = "ltr";

      li.append(daySpan, timeSpan);
      listEl.appendChild(li);
    });
  }

  async function handleShare() {
    const dict = UI_TEXT[currentLang];
    const shareCfg = cfg.share || {};
    const url = isNonEmpty(shareCfg.url) ? shareCfg.url.trim() : window.location.href;
    const title = pickLang(shareCfg.title, currentLang) || document.title;
    const text = pickLang(shareCfg.text, currentLang) || title;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }

    await copyText(url, dict.copiedLinkToast);
  }

  function renderAll() {
    renderStaticLabels();
    renderBrandAndHero();
    renderQuickPhone();
    renderContactChannels();
    renderLocation();
    renderHours();
  }

  function bindEvents() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
      });
    });

    const copyPhoneBtn = document.getElementById("copy-phone-btn");
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener("click", () => {
        const contact = cfg.contact || {};
        const phoneToCopy = isNonEmpty(contact.phoneDisplay)
          ? contact.phoneDisplay.trim()
          : (contact.phoneTel || "").trim();
        copyText(phoneToCopy, UI_TEXT[currentLang].copiedPhoneToast);
      });
    }

    const shareTopBtn = document.getElementById("share-top-btn");
    const shareMainBtn = document.getElementById("share-main-btn");
    if (shareTopBtn) shareTopBtn.addEventListener("click", handleShare);
    if (shareMainBtn) shareMainBtn.addEventListener("click", handleShare);
  }

  function init() {
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    bindEvents();
    setLanguage(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
