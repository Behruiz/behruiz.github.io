document.getElementById("acceptBtn").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";

    let words = ["Aceita", "namorar", "comigo?"];
    let index = 0;
    let questionText = document.getElementById("questionText");

    function revealWords() {
        if (index < words.length) {
            questionText.innerHTML += words[index] + " ";
            index++;
            setTimeout(revealWords, 1000); // 1 segundo entre cada palavra
        } else {
            document.getElementById("buttonContainer").classList.remove("hidden"); // Exibe os botões
        }
    }

    revealWords();
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "🥳 Que alegria! Mal posso esperar por essa jornada juntos! 💖";
});

// Ajuste para celular: o botão "Não sei..." se move quando tocado
document.getElementById("noBtn").addEventListener("touchstart", function() {
    let maxX = window.innerWidth - this.clientWidth;
    let maxY = window.innerHeight - this.clientHeight;

    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);

    this.style.left = newX + "px";
    this.style.top = newY + "px";
});
