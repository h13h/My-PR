const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.querySelector(".message");
const music = document.getElementById("music");

// Typewriter effect
const text = "Will you be my Valentine? 💌";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

// Runaway NO button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button
yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
});

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

// Play music on first click
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });
