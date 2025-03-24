
const brawlers = [
    { name: "Shelly", rarity: "Comum" },
    { name: "Colt", rarity: "Comum" },
];

const maps = [
    { name: "Caverna Congelada", mode: "Gem Grab" },
    { name: "Fortaleza", mode: "Brawl Ball" },
];

const news = [
    { title: "Nova Atualização Chegando!", date: "10/05/2024" },
    { title: "Balanceamento de Brawlers", date: "08/05/2024" },
];

function generateItems(items, className, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add(className);
        itemElement.innerHTML = `
            <h3>${item.name || item.title}</h3>
            <p>${item.rarity || item.mode || item.date || item.author}</p>
        `;
        container.appendChild(itemElement);
    });
}
