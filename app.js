// ===== Telegram WebApp =====
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#1b4332');
  tg.setBackgroundColor('#f7f9f5');

  // Dark theme support
  if (tg.colorScheme === 'dark') {
    document.body.classList.add('tg-dark');
    tg.setBackgroundColor('#1c1c1e');
  }

  // Main button (optional)
  tg.MainButton.hide();
}

// ===== Data =====
const plants = [
  {
    id: 1,
    name: 'Монстера деликатесная',
    emoji: '🌿',
    price: 1890,
    category: ['air', 'easy'],
    badge: 'Хит',
    short: 'Классика с резными листьями',
    desc: 'Эффектная лиана с большими резными листьями. Отлично очищает воздух и создаёт атмосферу тропиков дома. Неприхотлива при правильном уходе.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания', 'Влажность: средняя–высокая', 'Температура: 18–27 °C']
  },
  {
    id: 2,
    name: 'Диффенбахия Сегуина',
    emoji: '🍃',
    price: 1450,
    category: ['air'],
    badge: null,
    short: 'Пышная красавица с пятнами',
    desc: 'Крупные пёстрые листья, хорошо очищает воздух. Требует осторожности — сок ядовит. Идеальна для просторных комнат.',
    care: ['Свет: полутень', 'Полив: регулярный', 'Влажность: высокая', 'Важно: беречь от детей и животных']
  },
  {
    id: 3,
    name: 'Мирт обыкновенный',
    emoji: '🌳',
    price: 980,
    category: ['easy'],
    badge: null,
    short: 'Ароматный средиземноморский куст',
    desc: 'Вечнозелёный кустарник с ароматными листьями. Символ мира и удачи. Хорошо поддаётся формировке.',
    care: ['Свет: яркий', 'Полив: регулярный', 'Влажность: средняя', 'Любит прохладную зимовку']
  },
  {
    id: 4,
    name: 'Сансевиерия «Лаurentii»',
    emoji: '🌵',
    price: 890,
    category: ['easy', 'succulent', 'air'],
    badge: 'Для новичков',
    short: 'Тёщин язык — почти неубиваемая',
    desc: 'Одна из самых выносливых растений. Очищает воздух даже ночью. Идеальна для офиса и новичков.',
    care: ['Свет: любой', 'Полив: редкий', 'Влажность: низкая', 'Почти не требует внимания']
  },
  {
    id: 5,
    name: 'Фикус лировидный',
    emoji: '🪴',
    price: 2490,
    category: ['air'],
    badge: null,
    short: 'Крупные лировидные листья',
    desc: 'Стильное растение с большими глянцевыми листьями. Станет акцентом любого интерьера.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный', 'Влажность: средняя', 'Не любит перестановки']
  },
  {
    id: 6,
    name: 'Замиокулькас',
    emoji: '💚',
    price: 1290,
    category: ['easy', 'succulent'],
    badge: 'Для новичков',
    short: 'Долларовое дерево',
    desc: 'Неприхотливый суккулент с глянцевыми листьями. Отлично переносит редкий полив и недостаток света.',
    care: ['Свет: полутень', 'Полив: редкий', 'Влажность: низкая', 'Почти невозможно убить']
  },
  {
    id: 7,
    name: 'Алоказия Полли',
    emoji: '🌴',
    price: 2190,
    category: ['rare'],
    badge: 'Редкая',
    short: 'Экзотика с рифлёными листьями',
    desc: 'Эффектное растение с тёмно-зелёными рифлёными листьями и светлыми прожилками. Для ценителей.',
    care: ['Свет: яркий рассеянный', 'Полив: регулярный', 'Влажность: высокая', 'Любит тепло']
  },
  {
    id: 8,
    name: 'Хавортия cooperi',
    emoji: '💎',
    price: 650,
    category: ['succulent', 'easy'],
    badge: null,
    short: 'Мини-суккулент «хрустальный»',
    desc: 'Компактный суккулент с прозрачными «окошками» на листьях. Идеален для подоконника и коллекций.',
    care: ['Свет: яркий', 'Полив: редкий', 'Влажность: низкая', 'Любит солнце']
  },
  {
    id: 9,
    name: 'Спатифиллум «Sensation»',
    emoji: '🤍',
    price: 1590,
    category: ['air', 'easy'],
    badge: 'Очищает воздух',
    short: 'Женское счастье крупное',
    desc: 'Крупный сорт с большими листьями и белыми покрывалами. Активно очищает воздух.',
    care: ['Свет: полутень', 'Полив: регулярный', 'Влажность: высокая', 'Любит влажный воздух']
  },
  {
    id: 10,
    name: 'Филодендрон Биркин',
    emoji: '✨',
    price: 2790,
    category: ['rare'],
    badge: 'Редкая',
    short: 'Белые штрихи на листьях',
    desc: 'Редкий и очень декоративный филодендрон с белыми продольными полосками. Настоящий коллекционный экземпляр.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный', 'Влажность: высокая', 'Не любит прямой свет']
  },
  {
    id: 11,
    name: 'Эхеверия «Perle von Nürnberg»',
    emoji: '🌸',
    price: 490,
    category: ['succulent', 'easy'],
    badge: null,
    short: 'Розовая каменная роза',
    desc: 'Нежный суккулент с розово-сиреневыми листьями. Компактный и очень красивый.',
    care: ['Свет: яркий', 'Полив: редкий', 'Влажность: низкая', 'Отличный дренаж']
  },
  {
    id: 12,
    name: 'Калатея Орната',
    emoji: '🦩',
    price: 1750,
    category: ['rare'],
    badge: 'Редкая',
    short: 'Полосатые «перья»',
    desc: 'Роскошная калатея с розовыми полосками на тёмных листьях. Двигает листья в течение дня.',
    care: ['Свет: полутень', 'Полив: регулярный мягкой водой', 'Влажность: очень высокая', 'Не любит сквозняки']
  }
];

// ===== State =====
let cart = {};
let currentCategory = 'all';
let searchQuery = '';

// ===== Render =====
function renderCatalog() {
  const catalog = document.getElementById('catalog');
  const empty = document.getElementById('emptyState');

  const filtered = plants.filter(p => {
    const matchCat = currentCategory === 'all' || p.category.includes(currentCategory);
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.short.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    catalog.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  catalog.innerHTML = filtered.map(p => `
    <div class="plant-card" onclick="openModal(${p.id})">
      <div class="plant-image">
        ${p.emoji}
        ${p.badge ? `<span class="plant-badge ${p.category.includes('rare') ? 'rare' : ''}">${p.badge}</span>` : ''}
      </div>
      <div class="plant-info">
        <div class="plant-name">${p.name}</div>
        <div class="plant-desc">${p.short}</div>
        <div class="plant-bottom">
          <div class="plant-price">${p.price.toLocaleString('ru-RU')} ₽</div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderCatalog();
}

function filterPlants() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  renderCatalog();
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === 'all');
  });
  renderCatalog();
}

// ===== Cart =====
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
  // Haptic feedback
  if (tg?.HapticFeedback) {
    tg.HapticFeedback.impactOccurred('light');
  }
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const plant = plants.find(p => p.id === +id);
    return sum + (plant ? plant.price * qty : 0);
  }, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = total.toLocaleString('ru-RU') + ' ₽';

  const note = document.getElementById('minOrderNote');
  const btn = document.getElementById('orderBtn');

  if (total >= 1500) {
    note.textContent = '✓ Минимальная сумма набрана';
    note.classList.add('ok');
    btn.disabled = false;
  } else if (count > 0) {
    note.textContent = `Ещё ${(1500 - total).toLocaleString('ru-RU')} ₽ до минимального заказа`;
    note.classList.remove('ok');
    btn.disabled = true;
  } else {
    note.textContent = 'Минимальный заказ — 1500 ₽';
    note.classList.remove('ok');
    btn.disabled = true;
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text-secondary);">
      <div style="font-size:40px;margin-bottom:8px;">🛒</div>
      Корзина пуста
    </div>`;
    return;
  }

  container.innerHTML = entries.map(([id, qty]) => {
    const p = plants.find(pl => pl.id === +id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-emoji">${p.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${p.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = panel.classList.contains('open');

  if (isOpen) {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    renderCartItems();
    panel.classList.add('open');
    overlay.classList.add('open');
  }
}

function placeOrder() {
  const items = Object.entries(cart).map(([id, qty]) => {
    const p = plants.find(pl => pl.id === +id);
    return `• ${p.name} × ${qty} = ${(p.price * qty).toLocaleString('ru-RU')} ₽`;
  }).join('\n');

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const plant = plants.find(p => p.id === +id);
    return sum + (plant ? plant.price * qty : 0);
  }, 0);

  const message = encodeURIComponent(
`Здравствуйте! Хочу оформить заказ из каталога BLOOM 🪴

${items}

Итого: ${total.toLocaleString('ru-RU')} ₽

Доставка по России 🚚`
  );

  const url = `https://t.me/olga_bloom24?text=${message}`;

  if (tg) {
    tg.openTelegramLink(url);
  } else {
    window.open(url, '_blank');
  }

  // Optional: clear cart after order
  // cart = {};
  // updateCartUI();
  // toggleCart();
}

// ===== Modal =====
function openModal(id) {
  const p = plants.find(pl => pl.id === id);
  if (!p) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-emoji">${p.emoji}</div>
    <div class="modal-name">${p.name}</div>
    <div class="modal-price">${p.price.toLocaleString('ru-RU')} ₽</div>
    <div class="modal-tags">
      ${p.category.map(c => {
        const labels = { easy: 'Для новичков', air: 'Очищает воздух', rare: 'Редкая', succulent: 'Суккулент' };
        return `<span class="tag">${labels[c] || c}</span>`;
      }).join('')}
    </div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-care">
      <h4>💧 Уход</h4>
      <ul>
        ${p.care.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
    <button class="modal-add" onclick="addToCart(${p.id}); closeModal();">
      Добавить в корзину · ${p.price.toLocaleString('ru-RU')} ₽
    </button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('plantModal').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('plantModal').classList.remove('open');
}

// ===== Init =====
renderCatalog();
updateCartUI();
