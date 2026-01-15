gsap.registerPlugin(ScrollTrigger);

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

window.addEventListener("load", () => {
  const loader = $(".loader");
  if (!loader) return;

  const killer = setTimeout(() => loader?.remove(), 2000);

  gsap.to(loader, {
    opacity: 0,
    duration: 0.6,
    delay: 0.25,
    onComplete: () => {
      clearTimeout(killer);
      loader?.remove();
    }
  });
});

gsap.from(".header", { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" });
gsap.from(".hero-content", { opacity: 0, y: 40, duration: 1, ease: "power2.out" });

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: { trigger: section, start: "top 85%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });
});

const modal = $("#projectModal");
const modalTitle = $(".modal-title", modal);
const modalSubtitle = $(".modal-subtitle", modal);
const modalDescription = $(".modal-description", modal);
const modalTech = $(".modal-tech", modal);
const modalDemo = $(".modal-demo", modal);
const modalCode = $(".modal-code", modal);
const closeModalBtn = $(".modal-close", modal);

const projectsData = {
  landing: {
    title: "Landing Page de Conversão",
    subtitle: "UX | Performance | Design",
    description:
      "Projeto moderno com foco em conversão. Estrutura visual clara, CTAs estratégicos e animações sutis com GSAP.",
    tech: "HTML5 · CSS3 · JavaScript · GSAP",
    demo: "https://lukaszwx.github.io/landing-page/",
    code: "https://github.com/lukaszwx/landing-page"
  },
  dashboard: {
    title: "Aplicação JavaScript",
    subtitle: "Interatividade | Lógica | Animações",
    description:
      "Sistema interativo com manipulação avançada do DOM, microinterações e animações suaves.",
    tech: "HTML5 · CSS3 · JavaScript · GSAP",
    demo: "https://lukaszwx.github.io/projeto-dashboard/",
    code: "https://github.com/lukaszwx/projeto-dashboard"
  },
  institucional: {
    title: "Site Institucional",
    subtitle: "Corporativo | Elegante | Funcional",
    description:
      "Site corporativo com animações refinadas, cards de serviços e equipe, depoimentos e formulário de contato.",
    tech: "HTML5 · CSS3 · JavaScript · GSAP",
    demo: "https://lukaszwx.github.io/projeto-institucional/",
    code: "https://github.com/lukaszwx/projeto-institucional"
  }
};

function setModalTech(techStr) {
  modalTech.innerHTML = "";
  techStr.split(" · ").forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t.trim();
    modalTech.appendChild(span);
  });
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.subtitle;
  modalDescription.textContent = project.description;
  setModalTech(project.tech);
  modalDemo.href = project.demo;
  modalCode.href = project.code;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  gsap.fromTo(
    ".modal",
    { scale: 0.92, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
  );

  closeModalBtn?.focus();
}

function closeModal() {
  gsap.to(".modal", {
    scale: 0.92,
    opacity: 0,
    duration: 0.22,
    ease: "power3.in",
    onComplete: () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

$$(".btn-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    const project = projectsData[key];
    if (!project) return;
    openModal(project);
  });
});

closeModalBtn?.addEventListener("click", closeModal);

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal?.classList.contains("active")) closeModal();
});

$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const target = $(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

$$(".btn, .contact-links a, .header nav a").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, { y: -2, duration: 0.18, ease: "power2.out" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(el, { y: 0, duration: 0.18, ease: "power2.out" });
  });
});
