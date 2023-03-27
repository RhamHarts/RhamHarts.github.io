var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
  var user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 100) {
    alert("Masukkan Angka Dari 1 - 100.");
  } else {
    guessed_nums.push(user_guess);
    no_of_guesses += 1;

    if (user_guess < answer) {
      msg1.textContent = "Tebakanmu terlalu rendah.";
      msg2.textContent = "Jumlah Tebakan: " + no_of_guesses;
      msg3.textContent = "Tebakan Sebelumnya: " + guessed_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Tebakanmu terlalu tinggi.";
      msg2.textContent = "Jumlah Tebakan: " + no_of_guesses;
      msg3.textContent = "Tebakan Sebelumnya: " + guessed_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "Anda Benar!!";
      msg2.textContent = "Jawabannya Adalah: " + answer;
      msg3.textContent = "Anda Menebaknya dalam " + no_of_guesses + "x tebakan";
      document.getElementById("my_btn").disabled = true;
    }
  }
}
