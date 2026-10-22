// Function to generate a random 5-character Tube P2P Room Code
function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const display = document.getElementById('roomCodeDisplay');
    if (display) display.textContent = code;
}

function copyRoomCode() {
    const display = document.getElementById('roomCodeDisplay');
    if (display) {
        navigator.clipboard.writeText(display.textContent);
        alert('Room Code copied to clipboard: ' + display.textContent);
    }
}

// Loads Giscus script automatically into the .giscus-frame container
function loadGiscus() {
    const container = document.querySelector('.giscus-frame');
    if (!container) return;

    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "ADev-Studios/OneBodyManyMinds");
    script.setAttribute("data-repo-id", "R_kgDOVT0GwA");
    script.setAttribute("data-category", "Feedback");
    script.setAttribute("data-category-id", "DIC_kwDOVT0GwM4DJwv4");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "catppuccin_frappe");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
}

document.addEventListener('DOMContentLoaded', loadGiscus);