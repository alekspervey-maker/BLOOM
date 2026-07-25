// Telegram WebApp
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  document.body.classList.add('tg-theme');
}

// ======================
// КАТАЛОГ РАСТЕНИЙ
// ======================
// Чтобы добавить товар — скопируйте блок и измените данные.
// Чтобы добавить фото — положите картинку в папку images/ и укажите путь в поле image.
// Если image нет — будет показываться emoji.

const plants = [
  {
    id: 1,
    name: "Монстера Делициоза",
    price: 3200,
    emoji: "🌿",
    image: "images/monstera.jpg",          // ← путь к фото (если файла нет — покажется emoji)
    tags: ["Очищает воздух", "Крупное"],
    category: ["air", "rare"],
    desc: "Яркий рассеянный свет, полив после просыхания"
  },
  {
    id: 2,
    name: "Суккулент Эхеверия",
    price: 890,
    emoji: "🌵",
    image: "images/echeveria.jpg",
    tags: ["Для новичков", "Мало полива"],
    category: ["easy"],
    desc: "Много света, редкий полив"
  },
  {
    id: 3,
    name: "Филодендрон Сканденс",
    price: 1650,
    emoji: "🌱",
    image: "images/philodendron.jpg",
    tags: ["Ампельное", "Теневыносливое"],
    category: ["easy", "air"],
    desc: "Легкий уход, хорошо растёт в тени"
  },
  {
    id: 4,
    name: "Калатея Орбифолия",
    price: 2800,
    emoji: "🍃",
    image: "images/calathea.jpg",
    tags: ["Декоративнолистное"],
    category: ["rare"],
    desc: "Высокая влажность, без прямого солнца"
  },
  {
    id: 5,
    name: "Замиокулькас",
    price: 2100,
    emoji: "🪴",
    image: "images/zamioculcas.jpg",
    tags: ["Для новичков", "Очищает воздух"],
    category: ["easy", "air"],
    desc: "Почти неубиваемый, редкий полив"
  },
  {
    id: 6,
    name: "Алоказия Полли",
    price: 2450,
    emoji: "🌴",
    image: "images/alocasia.jpg",
    tags: ["Эффектное"],
    category: ["rare"],
    desc: "Яркий свет, умеренный полив"
  },
  {
    id: 7,
    name: "Пеперомия",
    price: 980,
    emoji: "💚",
    image: "images/peperomia.jpg",
    tags: ["Для новичков", "Компактное"],
    category: ["easy"],
    desc: "Идеально для подоконника"
  },
  {
    id: 8,
    name: "Сансевиерия",
    price: 1400,
    emoji: "🗡️",
    image: "images/sansevieria.jpg",
    tags: ["Очищает воздух", "Для новичков"],
    category: ["easy", "air"],
    desc: "Выдерживает засуху и тень"
  }
];

// ======================
// ЛОГИКА
// ======================

let currentCategory = "all";
let searchQuery = "";

function renderPlants() {
  const container = document.getElementById("plants");
  const filtered = plants.filter(p => {
    const matchCat = currentCategory === "all" || p.category.includes(currentCategory);
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty">Ничего не найдено 🌱</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="plant-card">
      <div class="plant-img">
        ${p.image 
          ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.emoji}'">` 
          : p.emoji}
      </div>
      <div class="plant-info">
        <div class="plant-name">${p.name}</div>
        <div class="plant-price">${p.price.toLocaleString("ru-RU")} ₽</div>
        <div class="plant-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <button class="btn-order" onclick="orderPlant('${p.name}', ${p.price})">
          Заказать
        </button>
      </div>
    </div>
  `).join("");
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".cat").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  renderPlants();
}

function filterPlants() {
  searchQuery = document.getElementById("search").value;
  renderPlants();
}

function orderPlant(name, price) {
  const text = `Здравствуйте! Хочу заказать:\n\n🌱 ${name}\n💰 ${price.toLocaleString("ru-RU")} ₽\n\nПодскажите, пожалуйста, наличие и условия доставки.`;
  
  if (tg) {
    tg.openTelegramLink(`https://t.me/olga_bloom24?text=${encodeURIComponent(text)}`);
  } else {
    window.open(`https://t.me/olga_bloom24?text=${encodeURIComponent(text)}`, "_blank");
  }
}

function openManager() {
  if (tg) {
    tg.openTelegramLink("https://t.me/olga_bloom24");
  } else {
    window.open("https://t.me/olga_bloom24", "_blank");
  }
}

// Запуск
renderPlants();
