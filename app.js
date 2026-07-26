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
    name: '',
    emoji: '🍃',
    image: 'images/Anthurium_Renaissance.jpg',
    price: 6500,
    category: ['rare', 'air', 'foliage'],
    badge: 'Хит',
    short: 'Редкий коллекционный сорт',
    desc: 'Каждый экземпляр уникален: бархатистые листья с выразительной формой. Одинаковых не существует.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-70%', 'Температура: 20–25 °C']
  },
  {
    id: 3,
    name: 'Монстера «Медуза»',
    emoji: '🌳',
    image: 'images/meduza.jpg',
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
    name: 'Монстера «Альба»',
    emoji: '🌴',
    image: 'images/7.jpg',
    price: 1600,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Живое произведение искусства среди растений',
    desc: 'Каждая пластина неповторима — как снежный узор, застывший на вечнозелёной ткани. Роскошная, немного капризная и невероятно выразительная — настоящая королева интерьера.',
    care: ['Свет: Яркий рассеянный свет', 'Полив: Умеренный', 'Влажность: 60%', 'Температура: 18–27 °C']
  },
  {
    id: 8,
    name: 'Монстера «Альба»',
    emoji: '🌴',
    image: 'images/8.jpg',
    price: 800,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Живое произведение искусства среди растений',
    desc: 'Каждая пластина неповторима — как снежный узор, застывший на вечнозелёной ткани. Роскошная, немного капризная и невероятно выразительная — настоящая королева интерьера.',
    care: ['Свет: Яркий рассеянный свет', 'Полив: Умеренный', 'Влажность: 60%', 'Температура: 18–27 °C']
  },
  {
    id: 9,
    name: 'Монстера «Альба»',
    emoji: '🌴',
    image: 'images/9.jpg',
    price: 1200,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Живое произведение искусства среди растений',
    desc: 'Каждая пластина неповторима — как снежный узор, застывший на вечнозелёной ткани. Роскошная, немного капризная и невероятно выразительная — настоящая королева интерьера.',
    care: ['Свет: Яркий рассеянный свет', 'Полив: Умеренный', 'Влажность: 60%', 'Температура: 18–27 °C']
  },
  {
    id: 10,
    name: 'Монстера «Бульбазавр»',
    emoji: '🪴',
    image: 'images/11.jpg',
    price: 25000,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Редкий коллекционный сорт',
    desc: 'Компактная и характерная: плотные листья с выразительным рисунком будто только проснулись и набирают силу. Милое имя — серьёзный характер: растёт уверенно и сразу становится любимцем коллекции.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-75%', 'Температура: 20–27 °C']
  },
  {
    id: 11,
    name: 'Монстера «Еллоу Сплэш»',
    emoji: '🦋',
    image: 'images/12.jpg',
    price: 600,
    category: ['rare', 'foliage'],
    badge: 'Новинка',
    short: 'Солнечные брызги на зелёных листьях.',
    desc: 'Жёлто-кремовые всполохи будто кто-то рассыпал жидкое золото по тёмной листве — каждый лист получается особенным, с неповторимым рисунком. Лёгкая, воздушная и очень выразительная — настоящее тёплое свечение в коллекции.',
    care: ['Свет: яркий рассеянный (минимум 6 часов)', 'Полив: Умеренный', 'Влажность: 60%', 'Температура: 18–27 °C']
  },
  {
    id: 12,
    name: 'Диффенбахия «AURORA»',
    emoji: '🦩',
    image: 'images/13.jpg',
    price: 900,
    category: ['easy', 'foliage', 'air'],
    badge: 'Хит',
    short: 'Крупные листья, будто освещённые изнутри.',
    desc: 'Свежая, яркая и очень декоративная — сразу наполняет пространство тропическим светом.',
    care: ['Свет: яркий рассеянный или лёгкая полутень', 'Полив: регулярный, после лёгкого просыхания верхнего слоя', 'Влажность: средняя-высокая', 'Температура: 18–26 °C']
  },
  // ===== Пустые карточки для редактирования (id 13–52) =====
  { id: 13,
    name: 'Аглаонема «Клеопатра»',
    emoji: '🌿',
    image: 'images/14.jpg',
    price: 450, 
    category: ['easy', 'foliage', 'air'],
    badge: null,
    short: 'Элегантные листья с серебристо-зелёной серединой и глубокой изумрудной каймой.',
    desc: 'Спокойная, благородная и очень декоративная — создаёт ощущение уюта и свежести.', 
    care: ['Свет: полутень или яркий рассеянный', 'Полив: умеренный, после лёгкого просыхания верхнего слоя', 'Влажность: средняя', 'Температура: 18–25 °C'] 
  },
  { 
    id: 14,
    name: 'Аглаонема «Клеопатра»',
    emoji: '🌿',
    image: 'images/15.jpg',
    price: 450, 
    category: ['easy', 'foliage', 'air'],
    badge: null,
    short: 'Элегантные листья с серебристо-зелёной серединой и глубокой изумрудной каймой.',
    desc: 'Спокойная, благородная и очень декоративная — создаёт ощущение уюта и свежести.', 
    care: ['Свет: полутень или яркий рассеянный', 'Полив: умеренный, после лёгкого просыхания верхнего слоя', 'Влажность: средняя', 'Температура: 18–25 °C'] 
  },
  { 
    id: 15,
    name: 'Аглаонема «Клеопатра»',
    emoji: '🌿',
    image: 'images/16.jpg',
    price: 450, 
    category: ['easy', 'foliage', 'air'],
    badge: null,
    short: 'Элегантные листья с серебристо-зелёной серединой и глубокой изумрудной каймой.',
    desc: 'Спокойная, благородная и очень декоративная — создаёт ощущение уюта и свежести.', 
    care: ['Свет: полутень или яркий рассеянный', 'Полив: умеренный, после лёгкого просыхания верхнего слоя', 'Влажность: средняя', 'Температура: 18–25 °C'] 
  },
  { 
    id: 16, 
    name: 'Монстера «Делициоза»', 
    emoji: '🌿', 
    image: 'images/17.jpg', 
    price: 800,
    category: ['easy', 'foliage', 'air'], 
    badge: null, 
    short: 'Крупные глянцевые листья с изящными прорезями — будто тропический лес поселился дома.', 
    desc: 'Растёт уверенно, создаёт атмосферу свежести и уюта. Классика, которая никогда не выходит из моды.', 
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя', 'Влажность: 50–70 %', 'Температура: 18–27 °C'] 
  },
  { 
    id: 17,
    name: 'Монстера «Делициоза»', 
    emoji: '🌿', 
    image: 'images/18.jpg', 
    price: 800,
    category: ['easy', 'foliage', 'air'], 
    badge: null, 
    short: 'Крупные глянцевые листья с изящными прорезями — будто тропический лес поселился дома.', 
    desc: 'Растёт уверенно, создаёт атмосферу свежести и уюта. Классика, которая никогда не выходит из моды.', 
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя', 'Влажность: 50–70 %', 'Температура: 18–27 °C'] 
  },
  { 
    id: 18, 
    name: 'Монстера «Делициоза»', 
    emoji: '🌿', 
    image: 'images/19.jpg', 
    price: 550,
    category: ['easy', 'foliage', 'air'], 
    badge: null, 
    short: 'Крупные глянцевые листья с изящными прорезями — будто тропический лес поселился дома.', 
    desc: 'Растёт уверенно, создаёт атмосферу свежести и уюта. Классика, которая никогда не выходит из моды.', 
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя', 'Влажность: 50–70 %', 'Температура: 18–27 °C']
  },
  {
    id: 19, 
    name: 'Спатифиллум «Даймонд»', 
    emoji: '🌿', 
    image: 'images/20.jpg',
    price: 1000, 
    category: ['flowering', 'foliage', 'air'],
    badge: null, 
    short: 'Тёмно-зелёные листья, будто припорошенные белым инеем, и изящные белоснежные покрывала.', 
    desc: 'Нежный, свежий и очень выразительный — настоящее украшение интерьера и символ гармонии.', 
    care: ['Свет: полутень или яркий рассеянный', 'Полив: регулярный, почва должна быть слегка влажной', 'Влажность: высокая', 'Температура: 18–25 °C'] 
  },
  { 
    id: 20, 
    name: 'Спатифиллум «Даймонд»', 
    emoji: '🌿',
    image: 'images/diamond.jpg', 
    price: 3200,
    category: ['flowering', 'foliage', 'air'],
    badge: null, 
    short: 'Тёмно-зелёные листья, будто припорошенные белым инеем, и изящные белоснежные покрывала.', 
    desc: 'Нежный, свежий и очень выразительный — настоящее украшение интерьера и символ гармонии.', 
    care: ['Свет: полутень или яркий рассеянный', 'Полив: регулярный, почва должна быть слегка влажной', 'Влажность: высокая', 'Температура: 18–25 °C'] 
  },
  { 
    id: 21,
    name: 'Алоказия «Амазоника»',
    emoji: '🌿',
    image: 'images/Amaz.jpg',
    price: 1800,
    category: ['foliage', 'rare'], 
    badge: null, 
    short: 'Тёмные, почти чёрно-зелёные листья с волнистым краем и яркими серебристыми прожилками — будто тропическая графика.', 
    desc: 'Эффектная, графичная и очень стильная — сразу становится акцентом в интерьере.', 
    care: ['Свет: яркий рассеянный', 'Полив: регулярный', 'Влажность: 60-80%', 'Температура: 20–27 °C'] 
  },
  { 
    id: 22,
    name: 'Антуриум «Ренессанс»',
    emoji: '🍃',
    image: 'images/Anthurium_Renaissance2.jpg',
    price: 6500,
    category: ['rare', 'air', 'foliage'],
    badge: 'Хит',
    short: 'Редкий коллекционный сорт',
    desc: 'Каждый экземпляр уникален: бархатистые листья с выразительной формой. Одинаковых не существует.',
    care: ['Свет: яркий рассеянный', 'Полив: умеренный, после просыхания верхнего слоя почвы', 'Влажность: 60-70%', 'Температура: 20–25 °C'] 
  },
  { 
    id: 23,
    name: 'Диффенбахия «Камуфляж»', 
    emoji: '🌿',
    image: 'images/kamuf.png', 
    price: 1000, 
    category: ['easy', 'air'], 
    badge: null, 
    short: 'Смотрится стильно и живо в любом интерьере', 
    desc: 'Эффектное растение с крупными листьями в камуфляжной расцветке — тёмно-зелёный фон с хаотичными светлыми пятнами.', 
    care: ['Свет: яркий рассеянный', 'Полив: после подсыхания верхнего слоя грунта', 'Влажность: средняя, любит опрыскивание', 'Температура: 18–26 °C'] 
  },
  { 
    id: 24,
    name: 'Диффенбахия «Камуфляж»', 
    emoji: '🌿',
    image: 'images/kamuf2.png', 
    price: 3200, 
    category: ['easy', 'air'], 
    badge: null, 
    short: 'Смотрится стильно и живо в любом интерьере', 
    desc: 'Эффектное растение с крупными листьями в камуфляжной расцветке — тёмно-зелёный фон с хаотичными светлыми пятнами.', 
    care: ['Свет: яркий рассеянный', 'Полив: после подсыхания верхнего слоя грунта', 'Влажность: средняя, любит опрыскивание', 'Температура: 18–26 °C'] 
  },
  { id: 25, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 26, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 27, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 28, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 29, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 30, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 31, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 32, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 33, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 34, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 35, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 36, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 37, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 38, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 39, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 40, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 41, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 42, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 43, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 44, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 45, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 46, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 47, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 48, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 49, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 50, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 51, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] },
  { id: 52, name: '', emoji: '🌿', image: '', price: 0, category: [], badge: null, short: '', desc: '', care: [] }
];

// ===== State =====
let cart = {};
let currentCategory = 'all';
let searchQuery = '';

// ===== Extra service (cart only) =====
const SOIL = {
  id: 'soil',
  name: 'Грунт для пересадки',
  emoji: '🪴',
  price: 499
};

function addSoil() {
  cart['soil'] = (cart['soil'] || 0) + 1;
  updateCartUI();
  renderCartItems();
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
}


// ===== Render =====
function renderCatalog() {
  const catalog = document.getElementById('catalog');
  const empty = document.getElementById('emptyState');
  if (!catalog) return;

  const filtered = plants.filter(p => {
    if (!p.name || !p.name.trim()) return false; // скрываем пустые карточки
    const matchCat = currentCategory === 'all' || (p.category && p.category.includes(currentCategory));
    const matchSearch = !searchQuery ||
      (p.name && p.name.toLowerCase().includes(searchQuery)) ||
      (p.short && p.short.toLowerCase().includes(searchQuery));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    catalog.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }

  if (empty) empty.style.display = 'none';
  catalog.innerHTML = filtered.map(p => {
    const price = Number(p.price).toLocaleString('ru-RU');
    const badgeClass = (p.category && p.category.includes('rare')) ? 'rare' : '';
    const badgeHtml = p.badge
      ? `<span class="plant-badge ${badgeClass}">${p.badge}</span>`
      : '';
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span class="plant-emoji" style="display:none">${p.emoji || '🌿'}</span>`
      : `<span class="plant-emoji">${p.emoji || '🌿'}</span>`;

    return `
    <div class="plant-card" onclick="openModal(${p.id})">
      <div class="plant-image" ${p.image ? `onclick="event.stopPropagation(); openZoom('${p.image}')"` : ''}>
        ${imgHtml}
        ${badgeHtml}
      </div>
      <div class="plant-info">
        <div class="plant-name">${p.name}</div>
        <div class="plant-desc">${p.short || ''}</div>
        <div class="plant-bottom">
          <div class="plant-price">${price} ₽</div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
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
    if (id === 'soil') return sum + SOIL.price * qty;
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
    if (id === 'soil') {
      return `
      <div class="cart-item">
        <div class="cart-item-emoji">${SOIL.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${SOIL.name}</div>
          <div class="cart-item-price">${SOIL.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('soil', -1)">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" onclick="changeQty('soil', 1)">+</button>
        </div>
      </div>`;
    }
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
    if (id === 'soil') {
      return `• ${SOIL.name} × ${qty} = ${(SOIL.price * qty).toLocaleString('ru-RU')} ₽`;
    }
    const p = plants.find(pl => pl.id === +id);
    if (!p) return '';
    return `• ${p.name} × ${qty} = ${(p.price * qty).toLocaleString('ru-RU')} ₽`;
  }).filter(Boolean).join('\n');

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    if (id === 'soil') return sum + SOIL.price * qty;
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
  const labels = { easy: 'Для новичков', air: 'Очищает воздух', rare: 'Редкая', flowering: 'Цветёт', foliage: 'Декор.-лиственные' };
  const tags = (p.category || []).map(c => `<span class="tag">${labels[c] || c}</span>`).join('');
  const care = (p.care || []).map(c => `<li>${c}</li>`).join('');
  const price = Number(p.price).toLocaleString('ru-RU');
  const img = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="modal-img" onclick="event.stopPropagation(); openZoom('${p.image}')" onerror="this.style.display='none';this.nextElementSibling.style.display='block';"><div class="modal-emoji" style="display:none">${p.emoji || '🌿'}</div>`
    : `<div class="modal-emoji">${p.emoji || '🌿'}</div>`;

  content.innerHTML = `
    <div class="modal-image-wrap" ${p.image ? `onclick="openZoom('${p.image}')"` : ''}>${img}</div>
    <div class="modal-name">${p.name}</div>
    <div class="modal-price">${price} ₽</div>
    <div class="modal-tags">${tags}</div>
    <div class="modal-desc">${p.desc || ''}</div>
    <div class="modal-care">
      <h4>💧 Уход</h4>
      <ul>${care}</ul>
    </div>
    <button class="modal-add" onclick="addToCart(${p.id}); closeModal();">
      Добавить в корзину · ${price} ₽
    </button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('plantModal').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('plantModal').classList.remove('open');
}

// ===== Image Zoom (pinch + pan) =====
let zoomScale = 1;
let zoomX = 0;
let zoomY = 0;
let lastTap = 0;
let pointers = new Map();
let lastDist = 0;
let lastMid = { x: 0, y: 0 };
let isPanning = false;

function openZoom(src) {
  if (!src) return;
  const viewer = document.getElementById('zoomViewer');
  const img = document.getElementById('zoomImg');
  if (!viewer || !img) return;

  img.src = src;
  zoomScale = 1;
  zoomX = 0;
  zoomY = 0;
  applyZoomTransform();
  viewer.classList.add('open');

  const stage = document.getElementById('zoomStage');
  stage.ontouchstart = onZoomTouchStart;
  stage.ontouchmove = onZoomTouchMove;
  stage.ontouchend = onZoomTouchEnd;
  stage.ontouchcancel = onZoomTouchEnd;
  stage.onwheel = onZoomWheel;
}

function closeZoom(e) {
  if (e) {
    e.stopPropagation();
    // Close only on button or backdrop (not while interacting with image)
    const t = e.target;
    if (t && t.id !== 'zoomViewer' && !t.classList.contains('zoom-close')) {
      return;
    }
  }
  const viewer = document.getElementById('zoomViewer');
  if (viewer) viewer.classList.remove('open');
  zoomScale = 1;
  zoomX = 0;
  zoomY = 0;
  pointers.clear();
  window._lastPan = null;
}

function applyZoomTransform() {
  const img = document.getElementById('zoomImg');
  if (!img) return;
  img.style.transform = `translate(${zoomX}px, ${zoomY}px) scale(${zoomScale})`;
}

function getDistance(a, b) {
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy);
}

function getMidpoint(a, b) {
  return {
    x: (a.clientX + b.clientX) / 2,
    y: (a.clientY + b.clientY) / 2
  };
}

function onZoomTouchStart(e) {
  e.preventDefault();
  for (const t of e.changedTouches) {
    pointers.set(t.identifier, t);
  }

  // Double-tap zoom
  if (e.touches.length === 1) {
    const now = Date.now();
    if (now - lastTap < 300) {
      if (zoomScale > 1.2) {
        zoomScale = 1;
        zoomX = 0;
        zoomY = 0;
      } else {
        zoomScale = 2.5;
      }
      applyZoomTransform();
      lastTap = 0;
    } else {
      lastTap = now;
    }
  }

  if (pointers.size === 2) {
    const pts = [...pointers.values()];
    lastDist = getDistance(pts[0], pts[1]);
    lastMid = getMidpoint(pts[0], pts[1]);
  }
  isPanning = pointers.size === 1;
}

function onZoomTouchMove(e) {
  e.preventDefault();
  for (const t of e.changedTouches) {
    pointers.set(t.identifier, t);
  }

  if (pointers.size === 2) {
    const pts = [...pointers.values()];
    const dist = getDistance(pts[0], pts[1]);
    const mid = getMidpoint(pts[0], pts[1]);

    if (lastDist > 0) {
      const factor = dist / lastDist;
      const newScale = Math.min(5, Math.max(1, zoomScale * factor));

      // Zoom towards midpoint
      const dx = mid.x - lastMid.x;
      const dy = mid.y - lastMid.y;
      zoomX += dx;
      zoomY += dy;
      zoomScale = newScale;
      applyZoomTransform();
    }
    lastDist = dist;
    lastMid = mid;
    isPanning = false;
  } else if (pointers.size === 1 && zoomScale > 1) {
    const t = e.changedTouches[0];
    const prev = pointers.get(t.identifier);
    // use movement from previous frame stored on touch — approximate via changedTouches
    // Better: track last single point
    if (window._lastPan) {
      zoomX += t.clientX - window._lastPan.x;
      zoomY += t.clientY - window._lastPan.y;
      applyZoomTransform();
    }
    window._lastPan = { x: t.clientX, y: t.clientY };
  }
}

function onZoomTouchEnd(e) {
  for (const t of e.changedTouches) {
    pointers.delete(t.identifier);
  }
  if (pointers.size < 2) lastDist = 0;
  if (pointers.size === 0) {
    window._lastPan = null;
    // Soft reset if almost default
    if (zoomScale < 1.05) {
      zoomScale = 1;
      zoomX = 0;
      zoomY = 0;
      applyZoomTransform();
    }
  }
  if (pointers.size === 1) {
    const t = [...pointers.values()][0];
    window._lastPan = { x: t.clientX, y: t.clientY };
  }
}

function onZoomWheel(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  zoomScale = Math.min(5, Math.max(1, zoomScale * delta));
  if (zoomScale === 1) {
    zoomX = 0;
    zoomY = 0;
  }
  applyZoomTransform();
}

// ===== Init =====
function init() {
  try {
    renderCatalog();
    updateCartUI();
  } catch (e) {
    console.error('BLOOM init error:', e);
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.innerHTML = '<p style="padding:20px;text-align:center;">Ошибка загрузки каталога. Обновите страницу.</p>';
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
