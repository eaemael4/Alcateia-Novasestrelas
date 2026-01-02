/* Mensagem whatsapp */
function enviarwhatsapp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5511995041562";

  const texto = `Olá, Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url);

  window.open(url, "_blank");
}

/* Carrossel principal */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }, 4000);
});

/* Funcionalidade do carrossel */
document.addEventListener("DOMContentLoaded", function () {
  const caixas = document.querySelectorAll(".Projetos-Conteudo-Caixa");
  const container = document.querySelector(".Projetos-Conteudo");
  const indicadoresContainer = document.querySelector(".indicadores");
  let index = 0;

  // Criar os indicadores (bolinhas)
  caixas.forEach((_, i) => {
    const span = document.createElement("span");
    if (i === 0) span.classList.add("ativo");
    indicadoresContainer.appendChild(span);
  });

  const indicadores = document.querySelectorAll(".indicadores span");

  function ativarCaixa(i) {
    caixas.forEach((caixa, idx) => {
      caixa.classList.toggle("ativo", idx === i);
    });

    indicadores.forEach((bolinha, idx) => {
      bolinha.classList.toggle("ativo", idx === i);
    });

    const targetScroll = caixas[i].offsetLeft;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }

  function iniciarCarrossel() {
    setInterval(() => {
      index = (index + 1) % caixas.length;
      ativarCaixa(index);
    }, 4000);
  }

  // Só ativa o carrossel no mobile
  if (window.innerWidth <= 1020) {
    ativarCaixa(index);
    iniciarCarrossel();
  }
});
