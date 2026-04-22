const MODO_SITE = "publico";
// opcoes: "pessoal" ou "publico"
const SENHA_PRIVADA_LOCAL = "altere-esta-senha";
const CHAVE_PRIVADA_LOCAL = "hub-privado-liberado";

const hubData = {
  educacao: {
    title: "Educação",
    description: "Plataformas para estudo formal, prática técnica e aprendizado contínuo.",
    page: "educacao.html",
    heroTitle: "Recursos para estudar com direção e consistência",
    heroText: "Selecionamos plataformas que ajudam em formação, programação, certificação e aprendizagem prática. O objetivo aqui não é só listar links, mas facilitar a decisão de qual recurso usar em cada etapa.",
    highlights: [
      { title: "Use para formação", text: "Ótima categoria para construir rotina de estudo, encontrar cursos gratuitos e explorar trilhas profissionalizantes." },
      { title: "Comece com clareza", text: "Se você ainda está decidindo por onde começar, prefira plataformas com trilhas guiadas, certificados ou comunidades ativas." },
      { title: "Misture teoria e prática", text: "Combinar cursos, leitura e ambientes para programar tende a gerar resultados melhores do que consumir conteúdo isolado." }
    ],
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
  jogos: {
    title: "Jogos",
    description: "Ferramentas para organizar biblioteca e acompanhar sua rotina gamer.",
    page: "jogos.html",
    heroTitle: "Organização e gestão da sua biblioteca de jogos",
    heroText: "A proposta desta categoria é apoiar quem já joga e quer uma experiência mais organizada. Em vez de buscar volume, focamos em ferramentas que simplificam catalogação, launchers e rotina.",
    highlights: [
      { title: "Biblioteca unificada", text: "Centralizar bibliotecas costuma reduzir atrito entre launchers e ajuda a retomar jogos antigos com mais facilidade." },
      { title: "Rotina mais leve", text: "Ter uma camada de organização evita que sua coleção fique espalhada entre várias plataformas." },
      { title: "Menos ruído", text: "Poucos links, mas escolhidos para uma função clara: organizar e acompanhar sua experiência." }
    ],
    items: [
      { name: "Playnite", description: "Gerenciador de jogos", url: "https://playnite.link", image: "url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  ferramentas: {
    title: "Ferramentas",
    description: "Utilitários práticos para produtividade, estudo, documentos e comparação de soluções.",
    page: "ferramentas.html",
    heroTitle: "Ferramentas úteis para trabalho digital e rotina de produtividade",
    heroText: "Esta seleção reúne utilitários com aplicações claras: instalar programas, editar documentos, estudar melhor e comparar soluções. É uma categoria pensada para eficiência, não para volume.",
    highlights: [
      { title: "Foco em utilidade real", text: "Cada item foi incluído por resolver uma tarefa comum com mais rapidez ou menos fricção." },
      { title: "Bom ponto de partida", text: "Se você está montando sua caixa de ferramentas digital, aqui estão opções úteis para documentos, IA e suporte técnico." },
      { title: "Curadoria simples", text: "Preferimos poucos links bem categorizados a uma lista extensa sem contexto." }
    ],
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
    description: "Ferramentas para criação visual, thumbnails, edição de imagens e ativos gráficos.",
    page: "design.html",
    heroTitle: "Recursos de design para produzir mais rápido e com mais clareza",
    heroText: "Aqui estão ferramentas voltadas para design aplicado: criação de posts, cortes de vídeo, thumbnails, imagens e tratamento visual. A seleção prioriza praticidade, principalmente para rotina de produção.",
    highlights: [
      { title: "Produção ágil", text: "Os links desta categoria ajudam a reduzir tempo de execução em tarefas visuais recorrentes." },
      { title: "Boa para creators", text: "Se você trabalha com conteúdo, apresentações ou redes sociais, essa é uma das áreas mais úteis do hub." },
      { title: "Complemento e não dependência", text: "A ideia é apoiar seu fluxo criativo, não substituir fundamentos de composição, texto e identidade visual." }
    ],
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
    description: "Recursos para teoria musical, prática, escuta analítica e apoio ao estudo.",
    page: "musica.html",
    heroTitle: "Ferramentas musicais para estudar, ouvir melhor e experimentar",
    heroText: "A categoria de música foi pensada para quem quer aprender mais sobre harmonia, treinamento auditivo e composição. Em vez de prometer atalhos, ela favorece prática, repetição e entendimento.",
    highlights: [
      { title: "Aprendizado incremental", text: "Ferramentas musicais funcionam melhor quando usadas em ciclos curtos e frequentes de estudo." },
      { title: "Teoria com aplicação", text: "Vale combinar teoria musical com prática no instrumento ou em DAWs para consolidar conceitos." },
      { title: "Boa base para curiosos", text: "Mesmo quem está começando consegue explorar escalas, intervalos e percepção com recursos acessíveis." }
    ],
    items: [
      { name: "Moises", description: "Separar música", url: "https://www.splitmysong.com", image: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80')" },
      { name: "HookTheory", description: "Teoria musical", url: "https://www.hooktheory.com", image: "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80')" },
      { name: "Muted", description: "Aprender música", url: "https://muted.io", image: "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80')" },
      { name: "Musicca", description: "Ferramentas musicais", url: "https://www.musicca.com", image: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  idiomas: {
    title: "Idiomas",
    description: "Recursos para leitura, memorização, exposição e prática básica de idiomas.",
    page: "idiomas.html",
    heroTitle: "Ferramentas para praticar idiomas de forma simples e recorrente",
    heroText: "Nem sempre aprender idiomas exige um curso longo logo no início. Às vezes, o melhor começo é montar rotina de exposição, leitura e revisão. Esta categoria segue exatamente essa lógica.",
    highlights: [
      { title: "Consistência vence intensidade", text: "Sessões curtas de prática costumam funcionar melhor do que maratonas ocasionais." },
      { title: "Boa para manutenção", text: "Também é uma categoria útil para quem já conhece o idioma e quer manter contato frequente." },
      { title: "Use em conjunto", text: "Combinar leitura, escuta e vocabulário tende a gerar avanço mais equilibrado." }
    ],
    items: [
      { name: "Loecsen", description: "Idiomas", url: "https://www.loecsen.com", image: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80')" },
      { name: "Lingua", description: "Exercícios", url: "https://lingua.com", image: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80')" }
    ]
  },
  automotivo: {
    title: "Automotivo",
    description: "Guias, simuladores e referências para manutenção, pesquisa e personalização.",
    page: "automotivo.html",
    heroTitle: "Conteúdo automotivo para consulta, prática e manutenção",
    heroText: "A categoria automotiva reúne recursos com diferentes usos: pesquisa, manutenção, simuladores e visualização de customização. Ela serve tanto para curiosidade técnica quanto para consulta recorrente.",
    highlights: [
      { title: "Consulta antes da compra", text: "Recursos de informação automotiva podem ajudar em pesquisa de modelo, manutenção e confiabilidade." },
      { title: "Apoio prático", text: "Guias e simuladores funcionam bem como apoio visual antes de executar procedimentos." },
      { title: "Customização com contexto", text: "Ferramentas visuais são mais úteis quando combinadas com pesquisa de peças, custos e compatibilidade." }
    ],
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
    description: "Recursos complementares que não se encaixam perfeitamente nas demais trilhas.",
    page: "outros.html",
    heroTitle: "Ferramentas complementares para necessidades específicas",
    heroText: "Alguns links úteis não se encaixam em uma categoria temática forte, mas ainda merecem estar acessíveis. Este espaço concentra esses recursos para que o hub continue organizado sem perder cobertura.",
    highlights: [
      { title: "Use quando necessário", text: "É uma categoria de apoio, ideal para demandas pontuais e exploração complementar." },
      { title: "Menos central, ainda útil", text: "Nem tudo precisa ser uma trilha principal para ter valor no dia a dia." },
      { title: "Organização acima de tudo", text: "Manter recursos periféricos aqui evita poluir categorias mais específicas." }
    ],
    items: [
      { name: "Neapay", description: "Cartões virtuais", url: "https://neapay.com", image: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80')" },
      { name: "Wand", description: "Mods", url: "https://wand.com", image: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80')" },
      { name: "Spacetype Generator", description: "Texto animado", url: "https://spacetypegenerator.com", image: "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80')" }
    ]
  }
};

function getVisibleItems(category) {
  if (!category || !Array.isArray(category.items)) {
    return [];
  }

  return category.items;
}

function getVisibleCategories() {
  return Object.entries(hubData).filter(([, category]) => getVisibleItems(category).length > 0);
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
      container.appendChild(createCard({ ...item, delay: index * 70 }, "Abrir recurso"));
    });
  });
}

function populateCategoryPage() {
  const pageKey = document.body.dataset.page;
  const pageGrid = document.querySelector("[data-grid]");
  const pageTitle = document.querySelector("[data-page-title]");
  const pageDescription = document.querySelector("[data-page-description]");
  const pageBadge = document.querySelector("[data-page-badge]");
  const highlightGrid = document.querySelector("[data-highlight-grid]");
  const categorySection = document.querySelector(".category-section");

  const category = hubData[pageKey];
  const visibleItems = getVisibleItems(category);
  if (!pageGrid || !category) return;

  if (pageTitle) pageTitle.textContent = category.heroTitle || category.title;
  if (pageDescription) pageDescription.textContent = category.heroText || category.description;
  if (pageBadge) pageBadge.textContent = category.title;

  if (highlightGrid && Array.isArray(category.highlights)) {
    category.highlights.forEach((highlight) => {
      const block = document.createElement("article");
      block.className = "insight-card";
      block.innerHTML = `<h3>${highlight.title}</h3><p>${highlight.text}</p>`;
      highlightGrid.appendChild(block);
    });
  }

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

function populateHomeFeatures() {
  const featureGrid = document.querySelector("[data-feature-grid]");
  if (!featureGrid) return;

  const featured = [
    {
      title: "Curadoria por contexto",
      text: "As categorias foram organizadas para reduzir ruído e facilitar a escolha do recurso certo para cada tipo de necessidade."
    },
    {
      title: "Experiência editorial",
      text: "Em vez de ser apenas uma lista de saídas, o site agora contextualiza o uso dos links e oferece recomendações de navegação."
    },
    {
      title: "Área pública separada",
      text: "A parte principal foi pensada para ser limpa, institucional e mais adequada a ambientes de monetização e aprovação."
    }
  ];

  featured.forEach((item) => {
    const block = document.createElement("article");
    block.className = "insight-card";
    block.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
    featureGrid.appendChild(block);
  });
}

function setupSafetyBanner() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const banner = document.createElement("div");
  banner.className = "site-banner";
  banner.textContent = "Curadoria independente de recursos externos. Sempre revise políticas, preços e termos diretamente na plataforma de destino.";
  navbar.insertAdjacentElement("afterend", banner);
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
  populateHomeFeatures();
  populateCategoryRows();
  populateCategoryPage();
  populatePrivatePage();
  setupNavbar();
  setupCarousels();
});
