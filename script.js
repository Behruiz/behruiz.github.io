document.getElementById("acceptBtn").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";

    let words = ["Jujubinha","aceita", "namorar", "comigo?"];
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
    document.getElementById("responseMessage").innerHTML = "🥳 Desde o instante mágico em que nossas palavras se cruzaram, você transformou minha vida de uma maneira sublime. Quero ser para você algo único e especial, assim como você tem sido para mim, leve como a brisa, natural como o amanhecer, e belo como um jardim em flor. A partir de hoje, seguiremos juntos, construindo nossa história com cada pequeno gesto de amor, tijolinho por tijolinho, até que nosso castelo de sonhos e doces esteja completo, onde habitaremos nossa eternidade! 💖";
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
