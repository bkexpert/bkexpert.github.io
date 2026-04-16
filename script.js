// Fonte única de dados para preencher a home e as páginas internas.
const hubData = {
  entretenimento: {
    items: [
      { name: "MangaDex", description: "Leia mangás e explore coleções em uma comunidade ampla e ativa.", url: "https://mangadex.org", image: "url('https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80')" },
      { name: "Jitter", description: "Crie animações com IA e motion design de forma visual e intuitiva.", url: "https://jitter.video", image: "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  educacao: {
    items: [
      { name: "Santander Open Academy", description: "Cursos gratuitos e trilhas de desenvolvimento pessoal e profissional.", url: "https://www.santanderopenacademy.com", image: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80')" },
      { name: "Kultivi", description: "Cursos online gratuitos em áreas populares com acesso simples.", url: "https://kultivi.com", image: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80')" },
      { name: "PUCRS Online", description: "Conteúdo acadêmico e cursos abertos para ampliar seus estudos.", url: "https://www.pucrsonline.com.br", image: "url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=800&q=80')" },
      { name: "Aprenda Mais MEC", description: "Portal com cursos gratuitos e conteúdos voltados para capacitação.", url: "https://aprendamais.mec.gov.br", image: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80')" },
      { name: "Loecsen", description: "Aprenda idiomas com frases práticas, áudio e navegação direta.", url: "https://www.loecsen.com/pt", image: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80')" },
      { name: "Cymath", description: "Resolva expressões matemáticas com apoio visual e passo a passo.", url: "https://www.cymath.com", image: "url('https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80')" },
      { name: "Muted", description: "Ferramenta excelente para teoria musical e experimentos sonoros.", url: "https://muted.io", image: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80')" },
      { name: "Electude Simulator", description: "Simulador técnico para praticar conceitos de forma interativa.", url: "https://simulator.electude.com", image: "url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80')" },
      { name: "Class Central", description: "Encontre cursos gratuitos e trilhas de aprendizado de várias instituições.", url: "https://www.classcentral.com", image: "url('https://images.unsplash.com/photo-1516321310766-d5be7c8f0b3f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Lingua", description: "Pratique leitura, vocabulário e compreensão em vários idiomas.", url: "https://lingua.com", image: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80')" },
      { name: "Musicca", description: "Aprenda teoria musical com exercícios e lições interativas.", url: "https://www.musicca.com", image: "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80')" },
      { name: "WikiHow", description: "Guias práticos para aprender tarefas do dia a dia em português.", url: "https://pt.wikihow.com", image: "url('https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  utilidades: {
    items: [
      { name: "Neamx", description: "Crie thumbnails com mais impacto para vídeos e redes sociais.", url: "https://neamx.com", image: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Wayin AI", description: "Ferramenta para gerar cortes de vídeo de forma rápida e prática.", url: "https://wayin.ai", image: "url('https://images.unsplash.com/photo-1574717024453-3540568b541d?auto=format&fit=crop&w=800&q=80')" },
      { name: "Photext", description: "Edite textos dentro de imagens sem complicação e com agilidade.", url: "https://photext.shop", image: "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80')" },
      { name: "Image Upscaling", description: "Melhore a qualidade de imagens com poucos cliques e bom resultado.", url: "https://image-upscaling.net", image: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Space Type Generator", description: "Crie animações de texto com estética moderna e visual marcante.", url: "https://spacetypegenerator.com", image: "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80')" },
      { name: "Workout Cool", description: "Personal trainer digital com rotinas e sugestões para treinar melhor.", url: "https://workout.cool/pt", image: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80')" },
      { name: "LightPDF", description: "Editor de PDF online com conversão, assinatura e ajustes rápidos.", url: "https://lightpdf.com", image: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80')" },
      { name: "MyFridgeFood", description: "Descubra receitas com os ingredientes que você já tem em casa.", url: "https://www.myfridgefood.com", image: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80')" },
      { name: "PNGIMG", description: "Biblioteca com imagens PNG gratuitas para projetos e apresentações.", url: "https://pngimg.com", image: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')" },
      { name: "TGStat", description: "Busque e analise canais, posts e tendências públicas do Telegram.", url: "https://tgstat.com", image: "url('https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  tecnologia: {
    items: [
      { name: "Ninite", description: "Instale vários programas essenciais de uma vez com praticidade.", url: "https://ninite.com", image: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80')" },
      { name: "Geelark", description: "Solução de celular virtual para testes, operação e produtividade.", url: "https://www.geelark.com", image: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80')" },
      { name: "CarCareKiosk", description: "Guias automotivos úteis para manutenção e cuidados com veículos.", url: "https://www.carcarekiosk.com", image: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80')" },
      { name: "iFixit", description: "Tutoriais de reparo para dispositivos, peças e manutenção técnica.", url: "https://pt.ifixit.com", image: "url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80')" },
      { name: "3DTuning", description: "Customize carros com visual interativo e muitas possibilidades.", url: "https://www.3dtuning.com", image: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80')" },
      { name: "ONLYOFFICE", description: "Suíte office online para editar documentos com rapidez e colaboração.", url: "https://www.onlyoffice.com", image: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80')" },
      { name: "Geek Uninstaller", description: "Remova programas de forma rápida e leve sem depender de suites pesadas.", url: "https://geekuninstaller.com/download", image: "url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80')" },
      { name: "Emergent", description: "Crie aplicativos e protótipos com ajuda de IA diretamente no navegador.", url: "https://app.emergent.sh", image: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80')" },
      { name: "Playnite", description: "Gerenciador de jogos para organizar bibliotecas em uma interface única.", url: "https://playnite.link", image: "url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80')" },
      { name: "NotebookLM", description: "IA do Google para resumir, organizar e explorar documentos e notas.", url: "https://notebooklm.google", image: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')" },
      { name: "Arena IA", description: "Compare diferentes IAs e veja resultados lado a lado com rapidez.", url: "https://arena.ia", image: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  criatividade: {
    items: [
      { name: "Creative Conor", description: "Coleção de aplicativos úteis e criativos para projetos digitais.", url: "https://creativeconor.com", image: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Swishy AI", description: "Crie animações grátis com fluxo rápido e interface acessível.", url: "https://www.swishy.ai", image: "url('https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80')" }
    ]
  }
};

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

function populateCards(selector, attribute) {
  document.querySelectorAll(selector).forEach((container) => {
    const key = container.dataset[attribute];
    const category = hubData[key];
    if (!category) return;

    const uniqueItems = category.items.filter((item, index, list) => (
      list.findIndex((entry) => entry.url === item.url) === index
    ));

    uniqueItems.forEach((item, index) => {
      container.appendChild(createCard({ ...item, delay: index * 70 }, selector === "[data-category]" ? "Abrir link" : "Acessar"));
    });
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
  populateCards("[data-category]", "category");
  populateCards("[data-grid]", "grid");
  setupNavbar();
  setupCarousels();
});
