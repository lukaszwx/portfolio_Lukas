// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

// ================== LOADER ==================
window.addEventListener("load", () => {
    gsap.to(".loader", {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        onComplete: () => document.querySelector(".loader").remove()
    });
});

// ================== ANIMAÇÕES DE HEADER E HERO ==================
gsap.from(".header", { opacity: 0, y: -20, duration: 0.8 });
gsap.from(".hero-content", { opacity: 0, y: 40, duration: 1 });

// ================== ANIMAÇÃO DE SECTIONS ==================
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: { trigger: section, start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.8
    });
});

// ================== CONFIGURAÇÃO DO MODAL ==================
const modal = document.getElementById("projectModal");
const modalTitle = modal.querySelector(".modal-title");
const modalSubtitle = modal.querySelector(".modal-subtitle");
const modalDescription = modal.querySelector(".modal-description");
const modalTech = modal.querySelector(".modal-tech");
const modalDemo = modal.querySelector(".modal-demo");
const modalCode = modal.querySelector(".modal-code");
const closeModalBtn = modal.querySelector(".modal-close");

// ================== DADOS DOS PROJETOS ==================
const projectsData = {
    landing: {
        title: "Landing Page de Conversão",
        subtitle: "UX | Performance | Design",
        description: `Projeto moderno com foco em conversão. Estrutura visual clara, CTAs estratégicos e animações sutis com GSAP.`,
        tech: "HTML5 · CSS3 · JavaScript · GSAP",
        demo: "https://lukaszwx.github.io/landing-page/",
        code: "https://github.com/lukaszwx/landing-page"
    },
    dashboard: {
        title: "Aplicação JavaScript",
        subtitle: "Interatividade | Lógica | Animações",
        description: `Sistema interativo com manipulação avançada do DOM, microinterações e animações suaves.`,
        tech: "HTML5 · CSS3 · JavaScript · GSAP",
        demo: "https://lukaszwx.github.io/projeto-dashboard/",
        code: "https://github.com/lukaszwx/projeto-dashboard"
    },
    institucional: {
        title: "Site Institucional",
        subtitle: "Corporativo | Elegante | Funcional",
        description: `Site corporativo com animações refinadas, cards de serviços e equipe, depoimentos e formulário de contato.`,
        tech: "HTML5 · CSS3 · JavaScript · GSAP",
        demo: "https://lukaszwx.github.io/projeto-institucional/",
        code: "https://github.com/lukaszwx/projeto-institucional"
    }
};

// ================== ABRIR MODAL ==================
document.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const projectKey = button.dataset.project;
        const project = projectsData[projectKey];

        if (!project) return; // Se não existir, não faz nada

        // Preencher modal com os dados do projeto
        modalTitle.textContent = project.title;
        modalSubtitle.textContent = project.subtitle;
        modalDescription.textContent = project.description;
        modalTech.textContent = project.tech;
        modalDemo.href = project.demo;
        modalCode.href = project.code;

        // Mostrar modal
        modal.classList.add("active");
        gsap.fromTo(".modal",
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
        );
    });
});

// ================== FECHAR MODAL ==================
function closeModal() {
    gsap.to(".modal", {
        scale: 0.9,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => {
            modal.classList.remove("active");
        }
    });
}

// Fechar ao clicar no "X"
closeModalBtn.addEventListener("click", closeModal);

// Fechar ao clicar fora do modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
