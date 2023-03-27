const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama aku iambot :3. siapa nama kamu?",
    `Halo ${data?.satu}, berapa usia kamu?`,
    `Ohhh ${data?.dua}, hobi kamu apa ya?`,
    `Ohh ${data?.tiga}, btw gimana kabar kamu hari ini?`,
    `Ohhh ${data?.empat}, ada yang mau diceritain ga keluh kesah hari ini?`,
    `Ohh begitu yang sabar ya`,
    `Aku yakin kamu bisa melewati semuanya walau sulit`,
    `Tetap tegar itu sulit walaupun sakit`,
    `Kamu boleh curhat sama aku kapan aja kamu mau kok hehe 😉`,
    "Yaudah udahan dulu ya see you 😉",
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu");
  init++;
  if (init === 1) {
    botDelay({ satu: jawaban.value });
  } else if (init === 2) {
    botDelay({ dua: jawaban.value });
  } else if (init === 3) {
    botDelay({ tiga: jawaban.value });
  } else if (init === 4) {
    botDelay({ empat: jawaban.value });
  } else if (init === 5) {
    botDelay({ lima: jawaban.value });
  } else if (init === 6) {
    botDelay({ enam: jawaban.value });
  } else if (init === 7) {
    botDelay({ tujuh: jawaban.value });
  } else if (init === 8) {
    botDelay({ delapan: jawaban.value });
  } else if (init === 9) {
    botDelay({ sembilan: jawaban.value });
  } else if (init === 10) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah curhat ke iambot 😉, kali-kali kita main ${usersData[2]} bareng ya!`;
  jawaban.value = "siap thanks juga!";
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
  );
  window.location.reload();
}
