// Garante que o DOM existe
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("carousel");
  if (!scrollContainer) {
    console.error("Elemento #carousel não encontrado.");
    return;
  }

  // Duplicar de forma segura (sem innerHTML += ...)
  const originals = Array.from(scrollContainer.children);
  originals.forEach(node => {
    scrollContainer.appendChild(node.cloneNode(true));
  });

  let speed = 0.8; // px por frame (ajuste a gosto)

  // Restaurar posição salva (se houver)
  const savedScroll = localStorage.getItem("carouselScroll");
  if (savedScroll) {
    scrollContainer.scrollLeft = parseFloat(savedScroll);
  }

  function autoScroll() {
    scrollContainer.scrollLeft += speed;

    // Quando passar do fim da primeira metade, volta ao início
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }

    // Salvar posição atual no localStorage
    localStorage.setItem("carouselScroll", scrollContainer.scrollLeft);

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});

AOS.init();
