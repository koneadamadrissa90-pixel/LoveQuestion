const oui = document.getElementById("oui");
const non = document.getElementById("non");
const message = document.getElementById("message");

let tentatives = 0;

const messages = [
    "Tu es sûre ? 🥺",
    "Réfléchis encore... ❤️",
    "Vraiment NON ? 😭",
    "Allez... donne-moi une chance 🥹",
    "Tu ne peux pas me dire NON 😭❤️",
    "Encore une petite chance ? 😏",
    "Bon... cette fois choisis bien ❤️"
];

function accepter() {

    document.querySelector("h2").textContent =
        "🥰 Je savais que tu allais dire OUI ❤️";

    message.innerHTML =
        "Je t'aime énormément ❤️<br>" +
        "Alors prépare le film... 🍿🎬";

    oui.style.display = "none";
    non.style.display = "none";
}

function fuir(event) {

    if (tentatives >= 7) {
        accepter();
        return;
    }

    tentatives++;

    message.textContent = messages[tentatives - 1];

    if (tentatives >= 7) {
        non.textContent = "OUI ❤️";

        non.style.background = "#ff4f81";
        non.style.color = "white";

        non.style.transform = "none";

        message.textContent =
            "Voilà... maintenant choisis bien 😏❤️";

        return;
    }

    const maxX = 180;
    const maxY = 40;

    const x = Math.random() * (maxX * 2) - maxX;
    const y = Math.random() * (maxY * 2) - maxY;

    non.style.transform =
        `translate(${x}px, ${y}px)`;
}

non.addEventListener("mouseover", fuir);

non.addEventListener("touchstart", fuir);

non.addEventListener("click", () => {

    if (tentatives >= 7) {
        accepter();
    }

});

oui.addEventListener("click", accepter);