/**
 * Mohamed Elmwafy - Artificial Intelligence Student & Machine Learning Engineer
 * Premium Classic Minimalist Architecture
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Mohamed Elmwafy",
    role: "Artificial Intelligence Student & Machine Learning Enthusiast",
    eyebrow: "AI / ML · DATA SCIENCE · PYTHON",
    bio: "I build practical machine learning projects, explore data, and turn ideas into measurable results. Currently studying Computer Science with a major in Artificial Intelligence at Mansoura University.",
    avatar: "assets/profile.jpg",
    location: "Mansoura · Egypt",
    email: "mohamedelmwafy605@gmail.com",
    phone: "+201557528782",
    linkedin: "https://www.linkedin.com/in/mohamed-elmwafy-7aa742331",
    github: "https://github.com/mwafyy",
    stats: [
      { number: "98.94%", label: "Best test accuracy" },
      { number: "120h", label: "NTI ML training" },
      { number: "2028", label: "Expected graduation" }
    ]
  },

  about: {
    bigCopy: "I enjoy the full ML workflow — understanding the problem, cleaning and exploring data, engineering features, training models, and evaluating what they actually achieve.",
    narrative: "My current path combines university study, technical training, internships, engineering-team work, and hands-on projects. My main interests are Machine Learning, Data Science, NLP, Computer Vision, and practical AI applications.",
    facts: [
      { label: "Education", value: "Computer Science — Artificial Intelligence" },
      { label: "University", value: "Mansoura University" },
      { label: "Status", value: "Student (Faculty of Computers & Artificial Intelligence)" },
      { label: "Expected Graduation", value: "2028" },
      { label: "Primary Focus", value: "Machine Learning & Applied Deep Learning" }
    ]
  },

  skills: [
    {
      num: "01",
      title: "Python & Data",
      desc: "Python · NumPy · Pandas · Matplotlib · Seaborn · Data Cleaning & Statistical Analysis"
    },
    {
      num: "02",
      title: "Machine Learning",
      desc: "EDA · Preprocessing · Feature Engineering · Model Selection · Cross-Validation · Hyperparameter Tuning"
    },
    {
      num: "03",
      title: "AI Foundations",
      desc: "Deep Learning fundamentals · Neural Networks · NLP fundamentals · Audio Classification · Computer Vision"
    },
    {
      num: "04",
      title: "Workflow & Tools",
      desc: "Jupyter Notebook · Google Colab · VS Code · Git · GitHub · Linux Environment"
    }
  ],

  stackPills: [
    { name: "PYTHON", icon: "devicon-python-plain" },
    { name: "NUMPY", icon: "devicon-numpy-original" },
    { name: "PANDAS", icon: "devicon-pandas-original" },
    { name: "SCIKIT-LEARN", icon: "devicon-scikitlearn-plain" },
    { name: "MATPLOTLIB", icon: "fa-solid fa-chart-line" },
    { name: "SEABORN", icon: "fa-solid fa-chart-pie" },
    { name: "TENSORFLOW", icon: "devicon-tensorflow-original" },
    { name: "GITHUB", icon: "devicon-github-original" }
  ],

  experience: [
    {
      year: "2026",
      title: "DEPI — Data Science Track",
      desc: "Specialized Data Science training with Python, comprehensive IBM Data Science curriculum, data analysis pipelines, soft skills, and professional development under the Ministry of Communications and Information Technology.",
      tags: ["DATA SCIENCE", "PYTHON", "MCIT EGYPT", "DATA ANALYSIS"]
    },
    {
      year: "2026",
      title: "NTI — Machine Learning Training (Grade: 91% Outstanding)",
      desc: "120-hour intensive summer program covering end-to-end Machine Learning, Exploratory Data Analysis (EDA), feature preprocessing, model selection, hyperparameter tuning, and introductions to Deep Learning & NLP.",
      tags: ["120 HOURS", "MACHINE LEARNING", "NTI ITIDA", "GRADE 91%"]
    },
    {
      year: "2026",
      title: "Codveda Technologies — Machine Learning Internship",
      desc: "Applied ML internship developing real-world prediction models, audio pattern classification, credit scoring with imbalanced classes, handwritten digit recognition, and performance evaluation pipelines.",
      tags: ["ML INTERNSHIP", "APPLIED AI", "SCIKIT-LEARN", "REMOTE"]
    },
    {
      year: "ONGOING",
      title: "Mansoura Robotics — AI Committee",
      desc: "Active member in the AI & Machine Learning committee of the prestigious Mansoura Robotics team, contributing algorithmic reasoning and intelligence modules for robotic challenges and competitions.",
      tags: ["ROBOTICS", "AI COMMITTEE", "TEAMWORK", "MANSOURA UNIVERSITY"]
    }
  ],

  projects: [
    {
      featured: true,
      category: "MACHINE LEARNING · 01",
      metricBadge: "98.94%",
      title: "Speech Emotion Recognition",
      desc: "Audio classification pipeline leveraging RAVDESS, CREMA-D, TESS, and SAVEE datasets. Extracts rich acoustic features including MFCCs, Chroma, Mel Spectrograms, Zero-Crossing Rate (ZCR), and RMS to classify human emotions with state-of-the-art precision.",
      metricValue: "98.94%",
      metricLabel: "TEST ACCURACY SCORE",
      tags: ["Python", "Audio ML", "Feature Extraction", "Neural Networks", "Scikit-Learn"],
      image: "assets/projects/speech-emotion.png",
      github: "https://github.com/mwafyy"
    },
    {
      featured: false,
      category: "CLASSIFICATION · 02",
      metricBadge: "F1 87%",
      title: "Credit Default Scoring",
      desc: "Credit risk default prediction system engineered to handle severe real-world class imbalance. Evaluates baseline classifiers against advanced SMOTE resampling, Random Forest ensembles, and cost-sensitive thresholds.",
      metricValue: "87%",
      metricLabel: "F1 SCORE AFTER SMOTE",
      tags: ["SMOTE", "Random Forest", "Imbalance Handling", "Risk Analytics"],
      image: "assets/projects/credit-scoring.png",
      github: "https://github.com/mwafyy"
    },
    {
      featured: false,
      category: "CLASSIFICATION · 03",
      metricBadge: "96%",
      title: "Titanic Survival Analysis",
      desc: "Comprehensive data science workflow covering missing-value imputations, family size feature engineering, one-hot encodings, and model benchmarking achieving consistent accuracy on survival classification.",
      metricValue: "96%",
      metricLabel: "SURVIVAL ACCURACY SCORE",
      tags: ["EDA", "Scikit-learn", "Feature Engineering", "Data Preprocessing"],
      image: "assets/projects/titanic-analysis.png",
      github: "https://github.com/mwafyy"
    }
  ],

  gallery: [
    {
      title: "Interactive ML Workshop Presentation",
      subtitle: "Explaining Machine Learning concepts and live code demos on projector",
      image: "assets/gallery/presentation-1.jpg"
    },
    {
      title: "Presentation & AI Cohort",
      subtitle: "With participants and students after delivering an AI/ML presentation session",
      image: "assets/gallery/presentation-team.jpg"
    },
    {
      title: "Mansoura Robotics Team",
      subtitle: "Official team photo at Faculty of Engineering — Mansoura Robotics AI Committee",
      image: "assets/gallery/robotics-team.jpg"
    },
    {
      title: "Hackathon Stage & Coding Arena",
      subtitle: "Live algorithmic problem solving and AI prototyping on stage at the Hackathon",
      image: "assets/gallery/hackathon-stage.jpg"
    }
  ],

  certificates: [
    {
      title: "NTI Machine Learning (120 Hours - Score 91%)",
      issuer: "National Telecommunication Institute (NTI) & ITIDA",
      image: "assets/certificates/nti-ml.png",
      date: "August 2025 · Summer Training",
      badge: "NTI / ITIDA Certified"
    },
    {
      title: "Getting Started with Deep Learning",
      issuer: "NVIDIA Deep Learning Institute (DLI)",
      image: "assets/certificates/nvidia-deep-learning.png",
      date: "August 2025 · Competency",
      badge: "NVIDIA DLI"
    },
    {
      title: "Machine Learning Internship Certificate",
      issuer: "Codveda Technologies",
      image: "assets/certificates/codveda-internship.png",
      date: "October 2025 · Internship",
      badge: "Verified Internship"
    },
    {
      title: "Python Programming Basics",
      issuer: "Information Technology Institute (ITI) - Mahara-Tech AI Academy",
      image: "assets/certificates/iti-python.png",
      date: "August 2025 · Ministry of Communications",
      badge: "ITI AI Academy"
    },
    {
      title: "Coursera Professional Verification",
      issuer: "Coursera Verified Specialization / Course",
      image: "assets/certificates/coursera.png",
      date: "Verified Record: LCD10I379436",
      badge: "Coursera Verified",
      externalUrl: "https://coursera.org/verify/LCD10I379436"
    }
  ]
};

function renderPortfolio() {
  const root = document.getElementById("root");
  if (!root) return;

  root.innerHTML = `
    <!-- Hero Section -->
    <section class="section hero" id="home">
      <div class="hero-text">
        <div class="eyebrow">
          <span class="status-pulse"></span>
          <span>${PORTFOLIO_DATA.profile.eyebrow}</span>
        </div>

        <h1 class="hero-headline">
          Mohamed<em>Elmwafy.</em>
        </h1>

        <h2 class="hero-subhead">
          ${PORTFOLIO_DATA.profile.role}
        </h2>

        <p class="hero-bio">
          ${PORTFOLIO_DATA.profile.bio}
        </p>

        <div class="actions">
          <a class="btn primary" href="#projects">
            <span>View My Work</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a class="btn secondary" href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
          <a class="btn secondary" href="${PORTFOLIO_DATA.profile.github}" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>

        <div class="stats-row">
          ${PORTFOLIO_DATA.profile.stats.map(s => `
            <div class="stat-box">
              <strong>${s.number}</strong>
              <small>${s.label}</small>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-card">
          <img 
            src="${PORTFOLIO_DATA.profile.avatar}" 
            alt="Mohamed Elmwafy - Artificial Intelligence Student"
            onerror="this.onerror=null;this.src='Screenshot 2026-09-09 202533.png';"
          />
          <div class="hero-card-label">
            <span>AI / ML RESEARCH</span>
            <span>${PORTFOLIO_DATA.profile.location}</span>
          </div>
        </div>
        <div class="floating-card top">
          <small>CURRENT FOCUS</small>
          <b>Machine Learning &amp; Applied Deep Learning</b>
        </div>
        <div class="floating-card bottom">
          <small>CORE PIPELINE</small>
          <b>Python &middot; NumPy &middot; Pandas &middot; Scikit-learn</b>
        </div>
      </div>
    </section>

    <!-- 01. About Me -->
    <section class="section" id="about">
      <div class="section-title">
        <span>01</span>
        <div>
          <small>ABOUT ME</small>
          <h2>Learning by building.</h2>
        </div>
      </div>

      <div class="about-grid">
        <p class="big-copy">
          ${PORTFOLIO_DATA.about.bigCopy}
        </p>
        <div class="about-copy">
          <p>
            ${PORTFOLIO_DATA.about.narrative}
          </p>
          <div class="facts">
            ${PORTFOLIO_DATA.about.facts.map(f => `
              <div class="facts-row">
                <span>${f.label}</span>
                <b>${f.value}</b>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- 02. Skills & Knowledge -->
    <section class="section" id="skills">
      <div class="section-title">
        <span>02</span>
        <div>
          <small>SKILLS &amp; CAPABILITIES</small>
          <h2>What I work with.</h2>
        </div>
      </div>

      <div class="skill-grid">
        ${PORTFOLIO_DATA.skills.map(s => `
          <article class="skill-card">
            <span class="skill-card-num">${s.num}</span>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </article>
        `).join('')}
      </div>

      <div class="stack-row">
        ${PORTFOLIO_DATA.stackPills.map(p => `
          <div class="stack-pill">
            <i class="${p.icon}"></i>
            <span>${p.name}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 03. Experience & Learning -->
    <section class="section" id="experience">
      <div class="section-title">
        <span>03</span>
        <div>
          <small>EXPERIENCE &amp; LEARNING</small>
          <h2>Where I put it into practice.</h2>
        </div>
      </div>

      <div class="timeline">
        ${PORTFOLIO_DATA.experience.map(item => `
          <article class="timeline-item">
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              <div class="tags">
                ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- 04. Selected Projects -->
    <section class="section" id="projects">
      <div class="section-title">
        <span>04</span>
        <div>
          <small>SELECTED WORK</small>
          <h2>Three projects.<br>Real results.</h2>
        </div>
      </div>

      <div class="project-grid">
        ${PORTFOLIO_DATA.projects.map(proj => `
          <article class="project-card ${proj.featured ? 'featured' : ''}">
            <div class="project-image zoomable-item" data-src="${proj.image}" data-title="${proj.title}" data-sub="${proj.category} &middot; Metric: ${proj.metricBadge}" style="cursor: pointer;">
              <img src="${proj.image}" alt="${proj.title}" />
              <div class="gallery-zoom-badge">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>

            <div class="project-meta">
              <span>${proj.category}</span>
              <span>${proj.metricBadge}</span>
            </div>

            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>

            <div class="result">
              <strong>${proj.metricValue}</strong>
              <small>${proj.metricLabel}</small>
            </div>

            <div class="tags" style="margin-top: 18px;">
              ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- 05. Gallery: Real Photos (Presentations & Team) -->
    <section class="section" id="gallery">
      <div class="section-title">
        <span>05</span>
        <div>
          <small>PROOF OF WORK</small>
          <h2>More than code.</h2>
        </div>
      </div>

      <p class="section-intro">
        A dedicated space for the real-world side of my journey: workshop presentations, Mansoura Robotics committee work, hackathon competitions, and team collaborations.
      </p>

      <div class="gallery-group">
        <div class="group-head">
          <h3>Presenting, Robotics &amp; Competitions</h3>
          <span>LIVE RECORD</span>
        </div>

        <div class="gallery-grid two">
          ${PORTFOLIO_DATA.gallery.map(item => `
            <div class="gallery-card zoomable-item" data-src="${item.image}" data-title="${item.title}" data-sub="${item.subtitle}">
              <div class="gallery-thumb-wrap">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <div class="gallery-zoom-badge">
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
              <div class="gallery-info">
                <b>${item.title}</b>
                <small>${item.subtitle}</small>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 06. Certificates & Credentials -->
    <section class="section" id="certificates">
      <div class="section-title">
        <span>06</span>
        <div>
          <small>CERTIFICATIONS</small>
          <h2>Credentials &amp; Honors.</h2>
        </div>
      </div>

      <p class="section-intro">
        Verified industry certificates from NTI, ITIDA, NVIDIA Deep Learning Institute, ITI Mahara-Tech, Codveda Technologies, and Coursera.
      </p>

      <div class="gallery-grid three">
        ${PORTFOLIO_DATA.certificates.map(cert => `
          <div class="gallery-card ${cert.externalUrl ? '' : 'zoomable-item'}" 
               data-src="${cert.image}" 
               data-title="${cert.title}" 
               data-sub="${cert.issuer} &middot; ${cert.date}">
            <div class="gallery-thumb-wrap zoomable-item" data-src="${cert.image}" data-title="${cert.title}" data-sub="${cert.issuer} &middot; ${cert.date}">
              <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
              <div class="gallery-zoom-badge">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
            <div class="gallery-info">
              <span class="tag" style="margin-bottom: 8px; color: var(--accent); border-color: rgba(201, 255, 61, 0.3);">${cert.badge}</span>
              <b>${cert.title}</b>
              <small>${cert.issuer}</small>
              <small style="color: var(--muted); opacity: 0.8;">${cert.date}</small>
              ${cert.externalUrl ? `
                <a href="${cert.externalUrl}" target="_blank" rel="noreferrer" class="btn secondary" style="margin-top: 12px; width: 100%; justify-content: center; padding: 8px 12px; font-size: 11px;">
                  <span>Verify Record Online</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- 07. Contact Section -->
    <section class="section contact" id="contact">
      <div class="contact-box">
        <small>07 &middot; CONTACT</small>
        <h2>Let's build something<br><em>useful with data.</em></h2>
        <p>Open to AI/ML internships, research collaboration, practical data science projects, and engineering team initiatives.</p>
        
        <div class="contact-links">
          <a class="contact-link-pill" href="mailto:${PORTFOLIO_DATA.profile.email}">
            <i class="fa-solid fa-envelope"></i>
            <span>${PORTFOLIO_DATA.profile.email}</span>
          </a>
          <a class="contact-link-pill" href="tel:${PORTFOLIO_DATA.profile.phone}">
            <i class="fa-solid fa-phone"></i>
            <span>${PORTFOLIO_DATA.profile.phone}</span>
          </a>
          <a class="contact-link-pill" href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin-in"></i>
            <span>LinkedIn Profile &nearr;</span>
          </a>
          <a class="contact-link-pill" href="${PORTFOLIO_DATA.profile.github}" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
            <span>GitHub Repositories &nearr;</span>
          </a>
        </div>
      </div>
    </section>
  `;

  initInteractions();
}

function initInteractions() {
  // Mobile Nav Toggle
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.onclick = () => {
      nav.classList.toggle("open");
      const icon = menuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    };

    nav.querySelectorAll("a").forEach(link => {
      link.onclick = () => {
        nav.classList.remove("open");
        const icon = menuBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      };
    });
  }

  // Scroll navbar highlight
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Lightbox Modal for Gallery & Certificates
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  function openModal(src, title, sub) {
    if (!modal) return;
    modalImg.src = src;
    modalTitle.textContent = title || "";
    modalSubtitle.textContent = sub || "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { modalImg.src = ""; }, 300);
  }

  document.querySelectorAll(".zoomable-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      const title = item.getAttribute("data-title");
      const sub = item.getAttribute("data-sub");
      if (src) openModal(src, title, sub);
    });
  });

  if (modalClose) modalClose.onclick = closeModal;
  if (modalBackdrop) modalBackdrop.onclick = closeModal;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

// Initial Run
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderPortfolio);
} else {
  renderPortfolio();
}
