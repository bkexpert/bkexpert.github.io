const MODO_SITE = "pessoal";
// opcoes: "pessoal" ou "publico"
const SENHA_PRIVADA_LOCAL = "altere-esta-senha";
const CHAVE_PRIVADA_LOCAL = "hub-privado-liberado";

// Dados organizados por categoria para montar a home e as páginas internas.
const hubData = {
  educacao: {
    title: "Educação",
    description: "Cursos, programação e apps úteis para aprender com mais profundidade.",
    page: "educacao.html",
    items: [
      { name: "Cursos ENAP", description: "Cursos gratuitos do governo", url: "https://www.enap.gov.br", image: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80')" },
      { name: "Santander Open Academy", description: "Cursos com certificado", url: "https://www.santanderopenacademy.com", image: "url('https://images.unsplash.com/photo-1516321310766-d5be7c8f0b3f?auto=format&fit=crop&w=900&q=80')" },
      { name: "Kultivi", description: "Cursos online gratuitos", url: "https://kultivi.com", image: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80')" },
      { name: "PUCRS Online", description: "Cursos universitários", url: "https://online.pucrs.br", image: "url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80')" },
      { name: "MEC Aprenda Mais", description: "Cursos públicos", url: "https://www.gov.br/mec", image: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80')" },
      { name: "Class Central", description: "Agregador de cursos", url: "https://www.classcentral.com", image: "url('https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=900&q=80')" },
      { name: "WikiHow", description: "Tutoriais diversos", url: "https://pt.wikihow.com", image: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80')" },
      { name: "Coddy", description: "Aprender programação", url: "https://coddy.tech", image: "url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80')" },
      { name: "Replit", description: "Programar online", url: "https://replit.com", image: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80')" },
      { name: "Emergent", description: "Criar aplicativos", url: "https://app.emergent.sh", image: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  entretenimento: {
    title: "Entretenimento",
    description: "Categoria reservada para filmes, séries e streaming.",
    page: "entretenimento.html",
    items: []
  },
  jogos: {
    title: "Jogos",
    description: "Jogos, bibliotecas e organização da sua coleção.",
    page: "jogos.html",
    items: [
      { name: "Playnite", description: "Gerenciador de jogos", url: "https://playnite.link", image: "url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  ferramentas: {
    title: "Ferramentas",
    description: "Utilitários online e apps práticos para produtividade técnica.",
    page: "ferramentas.html",
    items: [
      { name: "Ninite", description: "Instalar programas", url: "https://ninite.com", image: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80')" },
      { name: "Geek Uninstaller", description: "Remover programas", url: "https://geekuninstaller.com", image: "url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80')" },
      { name: "OnlyOffice", description: "Office gratuito", url: "https://www.onlyoffice.com", image: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80')" },
      { name: "LightPDF", description: "Editor PDF", url: "https://lightpdf.com", image: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80')" },
      { name: "Cymath", description: "Resolver matemática", url: "https://www.cymath.com", image: "url('https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80')" },
      { name: "NotebookLM", description: "IA de estudos", url: "https://notebooklm.google", image: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80')" },
      { name: "TGStat", description: "Conteúdo Telegram", url: "https://tgstat.com", image: "url('https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=900&q=80')" },
      { name: "Arena IA", description: "Comparar IA", url: "https://arena.ia", image: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  design: {
    title: "Design",
    description: "Criação visual, imagens, cortes e materiais gráficos.",
    page: "design.html",
    items: [
      { name: "Recraft AI", description: "Criar posts", url: "https://www.recraft.ai", image: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80')" },
      { name: "Wayin AI", description: "Cortes de vídeo", url: "https://wayin.ai", image: "url('https://images.unsplash.com/photo-1574717024453-3540568b541d?auto=format&fit=crop&w=900&q=80')" },
      { name: "Neamx", description: "Thumbs", url: "https://neamx.com", image: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80')" },
      { name: "Photext", description: "Editar imagens", url: "https://photext.shop", image: "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80')" },
      { name: "Image Upscaling", description: "Melhorar imagens", url: "https://image-upscaling.net", image: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80')" },
      { name: "PNGIMG", description: "PNG sem fundo", url: "https://pngimg.com", image: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  musica: {
    title: "Música",
    description: "Teoria, prática e ferramentas para estudar ou criar música.",
    page: "musica.html",
    items: [
      { name: "Moises", description: "Separar música", url: "https://www.splitmysong.com", image: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80')" },
      { name: "HookTheory", description: "Teoria musical", url: "https://www.hooktheory.com", image: "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80')" },
      { name: "Muted", description: "Aprender música", url: "https://muted.io", image: "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80')" },
      { name: "Musicca", description: "Ferramentas musicais", url: "https://www.musicca.com", image: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  idiomas: {
    title: "Idiomas",
    description: "Prática de idiomas com leitura, frases e exercícios.",
    page: "idiomas.html",
    items: [
      { name: "Loecsen", description: "Idiomas", url: "https://www.loecsen.com", image: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80')" },
      { name: "Lingua", description: "Exercícios", url: "https://lingua.com", image: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  automotivo: {
    title: "Automotivo",
    description: "Conteúdo técnico, reparos, simuladores e customização.",
    page: "automotivo.html",
    items: [
      { name: "Opinautos", description: "Info automotiva", url: "https://www.opinautos.com.br", image: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80')" },
      { name: "CarCareKiosk", description: "Tutoriais", url: "https://www.carcarekiosk.com", image: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80')" },
      { name: "Electude", description: "Simulador", url: "https://simulator.electude.com", image: "url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80')" },
      { name: "iFixit", description: "Reparos", url: "https://pt.ifixit.com", image: "url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=900&q=80')" },
      { name: "3DTuning", description: "Customização", url: "https://www.3dtuning.com", image: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  outros: {
    title: "Outros",
    description: "Links complementares para cartões, mods e animação de texto.",
    page: "outros.html",
    items: [
      { name: "Neapay", description: "Cartões virtuais", url: "https://neapay.com", image: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80')" },
      { name: "Wand", description: "Mods", url: "https://wand.com", image: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80')" },
      { name: "Spacetype Generator", description: "Texto animado", url: "https://spacetypegenerator.com", image: "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80')" }
    ]
  }
};

function shouldDisplayItem(item) {
  if (MODO_SITE === "publico" && item.sensivel) {
    return false;
  }

  return true;
}

function getVisibleItems(category) {
  if (!category || !Array.isArray(category.items)) {
    return [];
  }

  return category.items.filter(shouldDisplayItem);
}

function getPrivateLinks() {
  const source = window.privateLinksData;
  if (!Array.isArray(source)) {
    return [];
  }

  return source.filter((item) => item && item.name && item.description && item.url);
}

function createCard(item, buttonLabel = "Acessar") {
  const article = document.createElement("article");
  article.className = "content-card";
  article.style.setProperty("--card-delay", `${item.delay || 0}ms`);

  const art = document.createElement("div");
  art.className = "card-art";
  art.style.setProperty("--card-image", item.image);

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.name;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = item.description;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const link = document.createElement("button");
  link.className = "card-link";
  link.type = "button";
  link.textContent = buttonLabel;
  link.addEventListener("click", () => window.open(item.url, "_blank", "noopener,noreferrer"));

  const url = document.createElement("span");
  url.className = "card-url";
  url.textContent = new URL(item.url).hostname.replace("www.", "");

  actions.append(link, url);
  content.append(title, description, actions);
  article.append(art, content);
  return article;
}

function populatePrivatePage() {
  if (document.body.dataset.page !== "privado") {
    return;
  }

  const unlockForm = document.querySelector("[data-private-form]");
  const passwordInput = document.querySelector("[data-private-password]");
  const feedback = document.querySelector("[data-private-feedback]");
  const lockedState = document.querySelector("[data-private-locked]");
  const unlockedState = document.querySelector("[data-private-unlocked]");
  const privateGrid = document.querySelector("[data-private-grid]");
  const privateCount = document.querySelector("[data-private-count]");
  const privateLinks = getPrivateLinks();

  const renderPrivateLinks = () => {
    if (!privateGrid) return;
    privateGrid.innerHTML = "";

    privateLinks.forEach((item, index) => {
      privateGrid.appendChild(createCard({ ...item, delay: index * 70 }));
    });

    if (privateCount) {
      privateCount.textContent = `${privateLinks.length} link${privateLinks.length === 1 ? "" : "s"} disponivel${privateLinks.length === 1 ? "" : "is"}`;
    }
  };

  const setUnlockedState = (isUnlocked) => {
    lockedState?.classList.toggle("hidden", isUnlocked);
    unlockedState?.classList.toggle("hidden", !isUnlocked);
  };

  const isUnlocked = localStorage.getItem(CHAVE_PRIVADA_LOCAL) === "true";
  setUnlockedState(isUnlocked);
  if (isUnlocked) {
    renderPrivateLinks();
  }

  unlockForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!passwordInput) return;

    if (passwordInput.value === SENHA_PRIVADA_LOCAL) {
      localStorage.setItem(CHAVE_PRIVADA_LOCAL, "true");
      setUnlockedState(true);
      renderPrivateLinks();
      if (feedback) {
        feedback.textContent = "Area privada liberada neste navegador.";
      }
      passwordInput.value = "";
      return;
    }

    if (feedback) {
      feedback.textContent = "Senha incorreta. Atualize a constante local para a sua senha.";
    }
  });

  document.querySelector("[data-private-lock]")?.addEventListener("click", () => {
    localStorage.removeItem(CHAVE_PRIVADA_LOCAL);
    setUnlockedState(false);
    if (privateGrid) {
      privateGrid.innerHTML = "";
    }
    if (feedback) {
      feedback.textContent = "Area privada bloqueada novamente.";
    }
  });
}

function getVisibleCategories() {
  return Object.entries(hubData).filter(([, category]) => getVisibleItems(category).length > 0);
}

function populateCategoryRows() {
  document.querySelectorAll("[data-category]").forEach((container) => {
    const key = (container.dataset.category || "").trim();
    const category = hubData[key];
    const section = container.closest(".carousel-section");
    const visibleItems = getVisibleItems(category);

    if (!category || visibleItems.length === 0) {
      section?.remove();
      return;
    }

    visibleItems.forEach((item, index) => {
      container.appendChild(createCard({ ...item, delay: index * 70 }, "Abrir link"));
    });
  });
}

function populateCategoryPage() {
  const pageKey = document.body.dataset.page;
  const pageGrid = document.querySelector("[data-grid]");
  const pageTitle = document.querySelector("[data-page-title]");
  const pageDescription = document.querySelector("[data-page-description]");
  const pageBadge = document.querySelector("[data-page-badge]");
  const categorySection = document.querySelector(".category-section");

  const category = hubData[pageKey];
  const visibleItems = getVisibleItems(category);
  if (!pageGrid || !category) return;

  if (pageTitle) pageTitle.textContent = category.title;
  if (pageDescription) pageDescription.textContent = category.description;
  if (pageBadge) pageBadge.textContent = category.title;

  if (visibleItems.length === 0) {
    categorySection?.remove();
    return;
  }

  visibleItems.forEach((item, index) => {
    pageGrid.appendChild(createCard({ ...item, delay: index * 70 }));
  });
}

function populateQuickAccess() {
  const quickGrid = document.querySelector("[data-quick-grid]");
  if (!quickGrid) return;

  getVisibleCategories().forEach(([key, category]) => {
    const card = document.createElement("a");
    card.className = `quick-card ${key}`;
    card.href = category.page;
    card.innerHTML = `<span class="quick-label">${category.title}</span><strong>${category.description}</strong>`;
    quickGrid.appendChild(card);
  });
}

function setupSafetyBanner() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const banner = document.createElement("div");
  banner.className = "site-banner";
  banner.textContent = "Alguns links podem direcionar para conteúdos externos. O uso é de responsabilidade do usuário.";
  navbar.insertAdjacentElement("afterend", banner);
}

function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  const syncNavbar = () => navbar.classList.toggle("scrolled", window.scrollY > 24);
  syncNavbar();
  window.addEventListener("scroll", syncNavbar, { passive: true });

  menuToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupCarousels() {
  document.querySelectorAll(".carousel-shell").forEach((shell) => {
    const row = shell.querySelector(".card-row");
    const prev = shell.querySelector(".carousel-btn.prev");
    const next = shell.querySelector(".carousel-btn.next");
    if (!row || !prev || !next) return;

    const offset = () => Math.min(row.clientWidth * 0.9, 900);
    prev.addEventListener("click", () => row.scrollBy({ left: -offset(), behavior: "smooth" }));
    next.addEventListener("click", () => row.scrollBy({ left: offset(), behavior: "smooth" }));

    // Converte a rolagem vertical do mouse em navegação lateral no catálogo.
    row.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        row.scrollLeft += event.deltaY;
      }
    }, { passive: false });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSafetyBanner();
  populateQuickAccess();
  populateCategoryRows();
  populateCategoryPage();
  populatePrivatePage();
  setupNavbar();
  setupCarousels();
});
