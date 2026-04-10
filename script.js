// Fonte única de dados para preencher a home e as páginas internas.
const hubData = {
  entretenimento: {
    items: [
      { name: "ROMS Games", description: "Biblioteca com jogos offline e clássicos para baixar e revisitar.", url: "https://www.romsgames.net", image: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80')" },
      { name: "My Abandonware", description: "Catálogo de jogos retrô e abandonware para quem curte nostalgia.", url: "https://www.myabandonware.com", image: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Famelack", description: "Acesso rápido a opções de TV ao vivo em uma navegação simples.", url: "https://famelack.com", image: "url('https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80')" },
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
      { name: "Electude Simulator", description: "Simulador técnico para praticar conceitos de forma interativa.", url: "https://simulator.electude.com", image: "url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  utilidades: {
    items: [
      { name: "Neamx", description: "Crie thumbnails com mais impacto para vídeos e redes sociais.", url: "https://neamx.com", image: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Wayin AI", description: "Ferramenta para gerar cortes de vídeo de forma rápida e prática.", url: "https://wayin.ai", image: "url('https://images.unsplash.com/photo-1574717024453-3540568b541d?auto=format&fit=crop&w=800&q=80')" },
      { name: "Photext", description: "Edite textos dentro de imagens sem complicação e com agilidade.", url: "https://photext.shop", image: "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80')" },
      { name: "Image Upscaling", description: "Melhore a qualidade de imagens com poucos cliques e bom resultado.", url: "https://image-upscaling.net", image: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80')" },
      { name: "Space Type Generator", description: "Crie animações de texto com estética moderna e visual marcante.", url: "https://spacetypegenerator.com", image: "url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80')" },
      { name: "Workout Cool", description: "Personal trainer digital com rotinas e sugestões para treinar melhor.", url: "https://workout.cool/pt", image: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80')" }
    ]
  },
  tecnologia: {
    items: [
      { name: "Ninite", description: "Instale vários programas essenciais de uma vez com praticidade.", url: "https://ninite.com", image: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80')" },
      { name: "Geelark", description: "Solução de celular virtual para testes, operação e produtividade.", url: "https://www.geelark.com", image: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80')" },
      { name: "CarCareKiosk", description: "Guias automotivos úteis para manutenção e cuidados com veículos.", url: "https://www.carcarekiosk.com", image: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80')" },
      { name: "iFixit", description: "Tutoriais de reparo para dispositivos, peças e manutenção técnica.", url: "https://pt.ifixit.com", image: "url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80')" },
      { name: "3DTuning", description: "Customize carros com visual interativo e muitas possibilidades.", url: "https://www.3dtuning.com", image: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80')" },
      { name: "ONLYOFFICE", description: "Suíte office online para editar documentos com rapidez e colaboração.", url: "https://www.onlyoffice.com", image: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80')" }
    ]
  }
};

function createCard(item, buttonLabel = "Acessar") {
  const article = document.createElement("article");
  article.className = "content-card";

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
    category.items.forEach((item) => container.appendChild(createCard(item, selector === "[data-category]" ? "Abrir link" : "Acessar")));
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
