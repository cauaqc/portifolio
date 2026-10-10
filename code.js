
const raiz = document.documentElement;


const botaoTema = document.querySelector(".botao-tema");


const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) raiz.dataset.tema = temaSalvo;

botaoTema.addEventListener("click", () => {
  const novo = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
  raiz.dataset.tema = novo;
  localStorage.setItem("tema", novo);
});


function atualizarProgresso() {
  const total = raiz.scrollHeight - window.innerHeight;
  const porcentagem = (window.scrollY / total) * 100;
  raiz.style.setProperty("--progresso", porcentagem);
}
window.addEventListener("scroll", atualizarProgresso);
atualizarProgresso();


const cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


function animarCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animarCursor);
}
animarCursor();


document.addEventListener("mouseover", (e) => {
  const clicavel = e.target.closest("a, button");
  cursor.classList.toggle("cursor--ativo", Boolean(clicavel));
});

const botaoMenu = document.querySelector(".botao-menu");
botaoMenu.addEventListener("click", () => document.body.classList.toggle("menu-aberto"));

document.querySelectorAll(".menu-tela a").forEach((link) => {
  link.addEventListener("click", () => document.body.classList.remove("menu-aberto"));
});

