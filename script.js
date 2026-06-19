const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const dialog = document.querySelector("[data-dialog]");
const closeButton = document.querySelector("[data-close]");
const languageToggle = document.querySelector("[data-language-toggle]");

const translations = {
  zh: {
    "nav.windows": "Windows",
    "nav.manifesto": "Manifesto",
    "nav.connect": "Connect",
    "hero.eyebrow": "A personal site as a set of windows",
    "hero.title": "每个人都拿着自己的取景框，看见世界的一部分。",
    "hero.body":
      "这里会逐步打开我的个人简介、AI 产品实验、学习笔记与 AI coding 作品。窗不是高处的宣告，而是一种姿态：保持好奇，承认局限，邀请别人从不同角度靠近。",
    "windows.eyebrow": "Open a window",
    "windows.title": "从不同的窗口进入我正在成为的人。",
    "windows.body": "第一版首页先建立交互骨架。每个窗口后续都会变成一个独立页面：简介、项目、学习、方法、连接。",
    "cards.about.label": "01 / About",
    "cards.about.title": "个人简介",
    "cards.about.body": "项目管理、运营、设计经验，正在转向 AI 产品。",
    "cards.products.label": "02 / Products",
    "cards.products.title": "AI coding 产品",
    "cards.products.body": "把想法做成可试用、可解释、可迭代的作品。",
    "cards.learning.label": "03 / Learning",
    "cards.learning.title": "学习轨迹",
    "cards.learning.body": "RAG、LLM、MCP，以及正在建立的 AI PM 判断力。",
    "cards.method.label": "04 / Method",
    "cards.method.title": "工作方法",
    "cards.method.body": "先定义问题，再设计系统，最后用证据改进。",
    "manifesto.eyebrow": "Manifesto",
    "manifesto.title": "窗不是答案，是入口。",
    "manifesto.bodyOne":
      "我希望这个网站不只是陈列成就，而是记录一个人如何把复杂世界一点点看清楚：先承认自己的视角有限，再通过产品、研究、设计和对话，扩展那扇窗。",
    "manifesto.bodyTwo":
      "道也好，真理也罢，我们每个人只是在拿着自己的取景框看它。我的目标不是显得全知，而是持续提出更好的问题，做出更诚实的作品。",
    "connect.eyebrow": "Connect",
    "connect.title": "如果你也在探索 AI、产品和人的关系，欢迎敲窗。",
    "footer.text": "Hannah. Built through windows, refined through evidence.",
    "footer.back": "Back to top",
  },
  en: {
    "nav.windows": "Windows",
    "nav.manifesto": "Manifesto",
    "nav.connect": "Connect",
    "hero.eyebrow": "A bilingual portfolio for AI product work",
    "hero.title": "Each of us sees the world through our own frame.",
    "hero.body":
      "This site opens windows into my profile, AI product experiments, learning notes, and AI coding work. A window is not a claim of certainty. It is a posture: stay curious, admit limits, and invite other perspectives in.",
    "windows.eyebrow": "Open a window",
    "windows.title": "Enter through different windows of who I am becoming.",
    "windows.body":
      "This first version sets up the interaction structure. Each window will later become a deeper page for my profile, products, learning, methods, and connections.",
    "cards.about.label": "01 / About",
    "cards.about.title": "About",
    "cards.about.body": "Project management, operations, and design experience, now moving toward AI product work.",
    "cards.products.label": "02 / Products",
    "cards.products.title": "AI Coding Products",
    "cards.products.body": "Turning ideas into usable, explainable, and iterative product artifacts.",
    "cards.learning.label": "03 / Learning",
    "cards.learning.title": "Learning Trail",
    "cards.learning.body": "RAG, LLMs, MCP, and the AI product judgment I am building in public.",
    "cards.method.label": "04 / Method",
    "cards.method.title": "Method",
    "cards.method.body": "Define the problem, design the system, then improve with evidence.",
    "manifesto.eyebrow": "Manifesto",
    "manifesto.title": "A window is not the answer. It is an entry point.",
    "manifesto.bodyOne":
      "I want this site to be more than a display of achievements. It should record how a person learns to see complexity more clearly: first by admitting the limits of one perspective, then by expanding that view through products, research, design, and conversation.",
    "manifesto.bodyTwo":
      "Whether we call it truth or the way, each of us only sees it through our own frame. My goal is not to appear all-knowing, but to keep asking better questions and building more honest work.",
    "connect.eyebrow": "Connect",
    "connect.title": "If you are exploring AI, products, and human work, feel free to knock on the window.",
    "footer.text": "Hannah. Built through windows, refined through evidence.",
    "footer.back": "Back to top",
  },
};

const windowContent = {
  zh: {
    about: {
      kicker: "01 / About",
      title: "个人简介",
      body: "这里会放你的经历主线：项目管理、运营、设计如何形成你的产品判断，以及你为什么转向 AI 产品。第一版先讲清楚动机，不急着堆履历。",
      link: "#manifesto",
      linkText: "Read the manifesto",
    },
    products: {
      kicker: "02 / Products",
      title: "AI coding 产品",
      body: "这里会展示你用 AI coding 做出来的产品。每个作品都要写清楚用户问题、解决方案、AI 工作流、评估方式和下一步迭代。",
      link: "#connect",
      linkText: "Discuss a product idea",
    },
    learning: {
      kicker: "03 / Learning",
      title: "学习轨迹",
      body: "这里会整理你已经学过的 RAG、LLM、MCP，以及接下来如何把知识转成作品、判断力和产品文档。",
      link: "#connect",
      linkText: "Compare learning notes",
    },
    method: {
      kicker: "04 / Method",
      title: "工作方法",
      body: "这里会沉淀你的 AI PM 方法论：定义问题、拆解需求、设计交互、建立评估指标、用证据复盘。方法必须来自实践，不来自口号。",
      link: "#connect",
      linkText: "Talk about methods",
    },
  },
  en: {
    about: {
      kicker: "01 / About",
      title: "About",
      body: "This window will tell the throughline of your experience: how project management, operations, and design shaped your product judgment, and why you are moving toward AI product work.",
      link: "#manifesto",
      linkText: "Read the manifesto",
    },
    products: {
      kicker: "02 / Products",
      title: "AI Coding Products",
      body: "This window will show the products you build with AI coding. Each project should explain the user problem, solution, AI workflow, evaluation method, and next iteration.",
      link: "#connect",
      linkText: "Discuss a product idea",
    },
    learning: {
      kicker: "03 / Learning",
      title: "Learning Trail",
      body: "This window will organize what you have learned about RAG, LLMs, and MCP, and how that knowledge becomes product artifacts, judgment, and product documents.",
      link: "#connect",
      linkText: "Compare learning notes",
    },
    method: {
      kicker: "04 / Method",
      title: "Method",
      body: "This window will capture your AI PM method: define problems, break down requirements, design interactions, set evaluation metrics, and review with evidence.",
      link: "#connect",
      linkText: "Talk about methods",
    },
  },
};

let currentLanguage = localStorage.getItem("hannah-language") || "zh";

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const applyLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = language;
  localStorage.setItem("hannah-language", language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || translations.zh[key] || "";
  });

  if (languageToggle) {
    languageToggle.textContent = language === "zh" ? "EN" : "中文";
    languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }
};

const openWindow = (key) => {
  if (!dialog || !windowContent[currentLanguage][key]) return;
  const content = windowContent[currentLanguage][key];
  dialog.querySelector("[data-dialog-kicker]").textContent = content.kicker;
  dialog.querySelector("[data-dialog-title]").textContent = content.title;
  dialog.querySelector("[data-dialog-body]").textContent = content.body;
  const link = dialog.querySelector("[data-dialog-link]");
  link.href = content.link;
  link.textContent = content.linkText;
  dialog.showModal();
};

document.querySelectorAll("[data-window]").forEach((button) => {
  button.addEventListener("click", () => openWindow(button.dataset.window));
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

if (closeButton) {
  closeButton.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

applyLanguage(currentLanguage);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
