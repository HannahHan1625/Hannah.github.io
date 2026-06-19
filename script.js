const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const dialog = document.querySelector("[data-dialog]");
const closeButton = document.querySelector("[data-close]");

const windowContent = {
  about: {
    kicker: "01 / About",
    title: "个人简介",
    body:
      "这里会放你的经历主线：项目管理、运营、设计如何形成你的产品判断，以及你为什么转向 AI 产品。第一版先讲清楚动机，不急着堆履历。",
    link: "#manifesto",
    linkText: "Read the manifesto",
  },
  products: {
    kicker: "02 / Products",
    title: "AI coding 产品",
    body:
      "这里会展示你用 AI coding 做出来的产品。每个作品都要写清楚用户问题、解决方案、AI 工作流、评估方式和下一步迭代。",
    link: "#connect",
    linkText: "Discuss a product idea",
  },
  learning: {
    kicker: "03 / Learning",
    title: "学习轨迹",
    body:
      "这里会整理你已经学过的 RAG、LLM、MCP，以及接下来如何把知识转成作品、判断力和产品文档。",
    link: "#connect",
    linkText: "Compare learning notes",
  },
  method: {
    kicker: "04 / Method",
    title: "工作方法",
    body:
      "这里会沉淀你的 AI PM 方法论：定义问题、拆解需求、设计交互、建立评估指标、用证据复盘。方法必须来自实践，不来自口号。",
    link: "#connect",
    linkText: "Talk about methods",
  },
};

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const openWindow = (key) => {
  if (!dialog || !windowContent[key]) return;
  const content = windowContent[key];
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

if (closeButton) {
  closeButton.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
