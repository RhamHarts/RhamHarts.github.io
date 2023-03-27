function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "kertas";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "batu";
}

function getHasil(comp, player) {
  if (player == comp) return "DRAW";
  if (player == "kertas") return comp == "gunting" ? "YOU LOSE!" : "YOU WIN!";
  if (player == "gunting") return comp == "kertas" ? "YOU WIN!" : "YOU LOSE!";
  if (player == "batu") return comp == "gunting" ? "YOU WIN!" : "YOU LOSE!";
}

const pilihan = document.querySelectorAll("Li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector(".img-komputer");
    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
function putar() {
  const imgComputer = document.querySelector(" .img-komputer");
  const gambar = ["kertas", "batu", "gunting"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(" .img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
