const messages = [
    "> Iniciando sistema...",
    "> Verificando conexión...",
    "> Buscando persona especial...",
    "",
    "✓ Sistema iniciado",
    "✓ Conexión establecida",
    "✓ Persona especial encontrada ❣️"
];

const terminal = document.getElementById("terminal-text");
const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const enterBtn = document.getElementById("enterBtn");

let messageIndex = 0;

function showMessages() {

    if (messageIndex < messages.length) {

        const line = document.createElement("div");

        line.textContent = messages[messageIndex];

        terminal.appendChild(line);

        messageIndex++;

        setTimeout(showMessages, 700);

    } else {

        startLoading();

    }
}

function startLoading() {

    let value = 0;

    const loading = setInterval(() => {

        value++;

        progress.style.width = value + "%";
        percentage.textContent = value + "%";

        if (value >= 100) {

            clearInterval(loading);

            enterBtn.style.display = "inline-block";

        }

    }, 30);
}

function enterSystem() {

    document.querySelector(".content").innerHTML = `
        <div class="heart-screen">
            <h1>❣️ACCESO CONCEDIDO❣️</h1>

            <p class="typing" id="loveText"></p>

            <button onclick="showFinalMessage()">
                [ CONTINUAR ]
            </button>
        </div>
    `;

    const text =
        "No era un virus... solo era una excusa para decirte que eres una persona muy especial para mí. 🥰";

    let i = 0;
    const typing = document.getElementById("loveText");

    function write() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(write, 45);
        }
    }

    write();
}

function showFinalMessage() {

    document.querySelector(".content").innerHTML = `
        <div class="heart-screen">
            <h1>❣️ SYSTEM COMPLETED ❣️</h1>

            <p>
                Gracias por entrar a mi sistema.
                Ahora ya sabes cuál era el secreto...
            </p>

            <h2 class="love">Te quiero muchísimo. ❣️🌹</h2>
        </div>
    `;

    createHearts();
}

showMessages();

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");
        heart.innerHTML = "❣️";
        heart.className = "heart";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);

    }, 250);
}