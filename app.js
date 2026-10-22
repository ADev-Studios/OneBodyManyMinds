// Mapping of pages to your exact GitHub Discussion Categories & IDs
const CATEGORY_MAP = {
    "index.html": {
        category: "Feedback",
        categoryId: "DIC_kwDOVT0GwM4DJWv4"
    },
    "announcements.html": {
        category: "Announcements",
        categoryId: "DIC_kwDOVT0GwM4DJWv0"
    },
    "bugs.html": {
        category: "Bugs",
        categoryId: "DIC_kwDOVT0GwM4DJWv2"
    },
    "feedback.html": {
        category: "Feedback",
        categoryId: "DIC_kwDOVT0GwM4DJwv4"
    },
    "general.html": {
        category: "General",
        categoryId: "DIC_kwDOVT0GwM4DJWv1"
    },
    "ideas.html": {
        category: "Ideas",
        categoryId: "DIC_kwDOVT0GwM4DJWv3"
    },
    "polls.html": {
        category: "Polls",
        categoryId: "DIC_kwDOVT0GwM4DJWv5"
    }
};

// Generate random 5-character Tube P2P Room Code
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

// Injects Giscus with the correct category settings for the active page
function loadGiscus() {
    const container = document.querySelector('.giscus-frame');
    if (!container) return;

    let pagePath = window.location.pathname.split("/").pop();
    if (!pagePath || pagePath === "") pagePath = "index.html";

    const config = CATEGORY_MAP[pagePath] || CATEGORY_MAP["index.html"];

    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "ADev-Studios/OneBodyManyMinds");
    script.setAttribute("data-repo-id", "R_kgDOVT0GwA");
    script.setAttribute("data-category", config.category);
    script.setAttribute("data-category-id", config.categoryId);
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