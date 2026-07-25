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
    name: 'Филодендрон «Ring of Fire»',
    emoji: '🌿',
    image: 'images/Ring_of_Fire.jpg',
    price: 1200,
    category: ['foliage', 'rare'],
    badge: null,
    short: 'Коллекционный сорт',
    desc: 'Яркий представитель филодендрона с непредсказуемой вариегатностью — огненные всполохи на листьях делают каждый экземпляр уникальным.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания', 'Влажность: 60-80%', 'Температура: 20–28 °C']
  },
  {
    id: 2,
    name: 'Антуриум «Ренессанс»',
    emoji: '🍃',
    image: 'images/Anthurium_Renaissance.jpg',
    price: 6500,
    category: ['rare', 'air', 'foliage'],
    badge: 'Новинка',
    short: 'Редкий коллекционный сорт',
    desc: 'Каждый экземпляр уникален: бархатистые листья с выразительной формой. Одинаковых не существует.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-70%', 'Температура: 20–25 °C']
  },
  {
    id: 3,
    name: 'Монстера «Медуза»',
    emoji: '🌳',
    image: 'images/Bulbazavr.jpg',
    price: 18000,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Редкий коллекционный сорт',
    desc: 'Завораживающая форма с волнистыми, словно живыми листьями — будто щупальца медузы застыли в движении. Редкая и очень декоративная, создаёт в комнате ощущение тропического чуда.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный', 'Влажность: 60-75%', 'Температура: 20–27 °C']
  },
  {
    id: 4,
    name: 'Монстера «Медуза» XL',
    emoji: '🪴',
    image: 'images/Bulbazavr_2.jpg',
    price: 24000,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Крупный коллекционный экземпляр',
    desc: 'Завораживающая форма с волнистыми, словно живыми листьями — будто щупальца медузы застыли в движении. Более крупный экземпляр для ценителей.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный', 'Влажность: 60-75%', 'Температура: 20–27 °C']
  },
  {
    id: 5,
    name: 'Монстера «Бульбазавр»',
    emoji: '🪴',
    image: 'images/Bulba.jpg',
    price: 25000,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Редкий коллекционный сорт',
    desc: 'Компактная и характерная: плотные листья с выразительным рисунком будто только проснулись и набирают силу. Милое имя — серьёзный характер: растёт уверенно и сразу становится любимцем коллекции.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-75%', 'Температура: 20–27 °C']
  },
  {
    id: 6,
    name: 'Монстера «Тайское созвездие»',
    emoji: '💚',
    image: 'images/Sozvezdie.jpg',
    price: 6500,
    category: ['foliage', 'rare'],
    badge: 'Хит',
    short: 'Тайская Констелляция',
    desc: 'Тёмно-зелёные листья, будто присыпанные звёздной пылью: кремовые крапинки и пятна делают каждый лист неповторимым. Редкая и очень эффектная — сразу становится центром комнаты.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-75%', 'Температура: 18–29 °C']
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
    name: 'Антуриум «Red Champion»',
    emoji: '🌺',
    price: 1690,
    category: ['flowering', 'air'],
    badge: 'Цветёт',
    short: 'Ярко-красные «сердечки»',
    desc: 'Эффектное цветущее растение с глянцевыми красными покрывалами. Цветёт почти круглый год при хорошем уходе.',
    care: ['Свет: яркий рассеянный', 'Полив: регулярный', 'Влажность: высокая', 'Любит тепло']
  },
  {
    id: 9,
    name: 'Спатифиллум «Sensation»',
    emoji: '🤍',
    price: 1590,
    category: ['flowering', 'air', 'easy'],
    badge: 'Цветёт',
    short: 'Женское счастье крупное',
    desc: 'Крупный сорт с большими листьями и белыми покрывалами. Цветёт и активно очищает воздух.',
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
    name: 'Орхидея Фаленопсис',
    emoji: '🦋',
    price: 1290,
    category: ['flowering', 'easy'],
    badge: 'Цветёт',
    short: 'Классика на подоконнике',
    desc: 'Неприхотливая орхидея с длительным цветением. Цветки держатся до 2–3 месяцев. Идеальна для начинающих.',
    care: ['Свет: яркий рассеянный', 'Полив: раз в 7–10 дней', 'Влажность: средняя', 'Не заливать точку роста']
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
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<span class=\\'plant-emoji\\'>${p.emoji}</span>'">`
          : `<span class="plant-emoji">${p.emoji}</span>`}
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
        <div class="cart-item-emoji">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" onerror="this.outerHTML='${p.emoji}'">`
            : p.emoji}
        </div>
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
    <div class="modal-image-wrap">
      ${p.image
        ? `<img src="${p.image}" alt="${p.name}" class="modal-img" onerror="this.outerHTML='<div class=\\'modal-emoji\\'>${p.emoji}</div>'">`
        : `<div class="modal-emoji">${p.emoji}</div>`}
    </div>
    <div class="modal-name">${p.name}</div>
    <div class="modal-price">${p.price.toLocaleString('ru-RU')} ₽</div>
    <div class="modal-tags">
      ${p.category.map(c => {
        const labels = { easy: 'Для новичков', air: 'Очищает воздух', rare: 'Редкая', flowering: 'Цветёт', foliage: 'Декор.-лиственные' };
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
