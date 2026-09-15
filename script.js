/* =========================
   SCROLL-ƏSASLI AKTİV NAVİQASİYA
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   MOBİL NAVİQASİYA (HAMBURGER)
========================= */

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {

    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    siteNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

}


/* =========================
   TƏRCÜMƏLƏR (AZ / EN)
========================= */

const translations = {
    "logo-name": { az: "Orxan Xəlilzadə", en: "Orkhan Khalilzade" },

    "nav-home": { az: "Əsas səhifə", en: "Home" },
    "nav-about": { az: "Haqqımda", en: "About" },
    "nav-skills": { az: "Bacarıqlar", en: "Skills" },
    "nav-projects": { az: "Layihələr", en: "Projects" },
    "nav-contact": { az: "Əlaqə", en: "Contact" },

    "hero-hello": { az: "Salam, mən", en: "Hi, I'm" },
    "hero-h1": { az: "Orxan<br><span>Xəlilzadə</span>", en: "Orkhan<br><span>Khalilzade</span>" },
    "btn-projects": { az: "Layihələrə bax", en: "View projects" },
    "btn-contact": { az: "Əlaqə saxla", en: "Get in touch" },

    "stat1-label": { az: "Tamamlanmış layihə", en: "Completed projects" },
    "stat2-label": { az: "Alət & texnologiya", en: "Tools & technologies" },
    "stat3-label": { az: "Dil dəstəyi", en: "Language support" },

    "about-label": { az: "Haqqımda", en: "About" },
    "about-title": { az: "Haqqımda", en: "About Me" },
    "about-p1": { az: "Mən hazırda <strong>Agro Food Investment MMC</strong>-də <strong>Məlumat Analitiki</strong> kimi çalışıram, burada məlumatların təhlili, hesabatlılıq və data əsaslı proseslərlə məşğulam.", en: "I currently work as a <strong>Data Analyst</strong> at <strong>Agro Food Investment LLC</strong>, focusing on data analysis, reporting, and data-driven processes." },
    "about-p2": { az: "Məlumatlara olan marağım ənənəvi hesabatlardan daha dərinə gedir. Həmişə qanunauyğunluqları başa düşmək, proqnozlaşdırıcı modellər qurmaq və maşın öyrənməsi ilə problemləri həll etmək məni cəlb etmişdir.", en: "My interest in data goes beyond traditional reporting. I've always been drawn to understanding patterns, building predictive models, and solving problems with machine learning." },
    "about-p3": { az: "Məqsədim Məlumat Analizindən <strong>Maşın Öyrənməsi və Süni İntellekt Mühəndisliyinə</strong> doğru irəliləməkdir.", en: "My goal is to grow from Data Analysis toward <strong>Machine Learning and AI Engineering</strong>." },

    "skills-label": { az: "Bacarıqlar", en: "Skills" },
    "skills-title": { az: "Bacarıqlar", en: "Skills" },
    "skills-methods-label": { az: "Metod və konsepsiyalar", en: "Methods & concepts" },

    "projects-label": { az: "Layihələr", en: "Projects" },
    "projects-title": { az: "Layihələr", en: "Projects" },

    "proj1-category": { az: "Maşın Öyrənməsi", en: "Machine Learning" },
    "proj1-title": { az: "Kredit Kartı Borc Ödəməmə Proqnozu", en: "Credit Card Default Prediction" },
    "proj1-desc": { az: "Kredit kartı üzrə borcun ödənilməməsi riskini proqnozlaşdırmağa və modelin qərarlarına təsir edən amilləri anlamağa yönəlmiş maşın öyrənməsi layihəsi.", en: "A machine learning project that predicts credit card payment default risk and explains the factors driving the model's decisions." },

    "proj2-category": { az: "Kompüter Görməsi", en: "Computer Vision" },
    "proj2-title": { az: "Bitki Xəstəliklərinin Təsnifatı", en: "Plant Disease Classification" },
    "proj2-desc": { az: "Şəkillər əsasında bitki xəstəliklərini təsnif etmək üçün dərin öyrənmə və transfer learning üsullarından istifadə edən kompüter görmə layihəsi.", en: "A computer vision project that classifies plant diseases from images using deep learning and transfer learning." },

    "proj3-category": { az: "Data Analitikası", en: "Data Analytics" },
    "proj3-title": { az: "Kənd Təsərrüfatı Məlumat İntellekti", en: "Agricultural Data Intelligence" },
    "proj3-desc": { az: "Əməliyyat xarakterli kənd təsərrüfatı məlumatlarını faydalı içgörülərə çevirməyə yönəlmiş məlumat analizi və avtomatlaşdırma konsepsiyaları.", en: "Data analysis and automation concepts that turn operational agricultural data into actionable insights." },

    "link-live": { az: "Canlı tətbiq ➔", en: "Live app ➔" },
    "link-github": { az: "GitHub kodu ➔", en: "GitHub code ➔" },
    "link-view": { az: "Layihəyə bax →", en: "View project →" },

    "contact-label": { az: "Əlaqə", en: "Contact" },
    "contact-title": { az: "Əlaqə Saxlayaq", en: "Let's Connect" },
    "contact-desc": { az: "Data layihələri, öyrənmə prosesim və ya maşın öyrənməsi ilə bağlı fikir mübadiləsi aparmaq istəyirsinizsə — yazmaqdan çəkinməyin!", en: "Whether it's a data project, my learning journey, or just talking machine learning — feel free to reach out!" },
    "contact-address-label": { az: "Yer", en: "Location" },
    "contact-address-value": { az: "Bakı, Azərbaycan", en: "Baku, Azerbaijan" },
    "contact-email-label": { az: "Email", en: "Email" },
    "contact-linkedin-value": { az: "Profilə bax", en: "View profile" },
    "contact-github-value": { az: "Layihələrə bax", en: "View projects" }
};

const rolesByLang = {
    az: ["Məlumat Analitiki", "Məlumat Elmçisi", "Maşın Öyrənməsi Həvəskarı", "Süni İntellektə Maraqlı"],
    en: ["Data Analyst", "Data Scientist", "Machine Learning Enthusiast", "AI Enthusiast"]
};

let currentLang = "en";

function setLanguage(lang) {

    currentLang = lang;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.innerHTML = translations[key][lang];
        }
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll(".cv-link").forEach(link => {
        const cvHref = link.getAttribute(lang === "en" ? "data-cv-en" : "data-cv-az");
        if (cvHref) {
            link.setAttribute("href", cvHref);
        }
    });

    restartTyping();
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});


/* =========================
   YAZI (TYPING) EFFEKTİ
========================= */

const typedEl = document.getElementById("typed-text");
let typingTimeout;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {

    const roles = rolesByLang[currentLang];
    const currentRole = roles[roleIndex % roles.length];

    if (!isDeleting) {

        charIndex++;
        typedEl.textContent = currentRole.substring(0, charIndex);

        if (charIndex === currentRole.length) {
            isDeleting = true;
            typingTimeout = setTimeout(typeLoop, 1600);
            return;
        }

        typingTimeout = setTimeout(typeLoop, 80);

    } else {

        charIndex--;
        typedEl.textContent = currentRole.substring(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;
        }

        typingTimeout = setTimeout(typeLoop, 40);

    }

}

function restartTyping() {
    clearTimeout(typingTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typedEl) {
        typedEl.textContent = "";
        typeLoop();
    }
}

setLanguage("en");
