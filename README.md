# BLOOM Mini App — Telegram

Каталог растений для канала @bloom_krsk24.

## Как добавить товар и фото

### 1. Добавить новое растение

Откройте файл `app.js` и найдите массив `plants`.

Скопируйте любой блок и измените:

```js
{
  id: 9,
  name: "Фикус Лирата",
  price: 4500,
  emoji: "🌿",                        // запасной вариант
  image: "images/ficus.jpg",          // путь к фото
  tags: ["Крупное", "Очищает воздух"],
  category: ["air", "rare"],          // easy / air / rare
  desc: "Любит яркий свет"
},
```

### 2. Добавить фото

1. Положите картинку в папку `images/`
2. Назовите её, например: `monstera.jpg`
3. В `app.js` укажите: `image: "images/monstera.jpg"`

Если фото не найдётся — автоматически покажется эмодзи.

### Рекомендации к фото
- Формат: JPG или WebP
- Размер: 600–800 px
- Лучше квадратные или чуть вертикальные

## Структура папки

```
bloom-miniapp/
├── index.html
├── styles.css
├── app.js
├── images/               ← сюда фото
│   ├── monstera.jpg
│   ├── echeveria.jpg
│   └── ...
└── README.md
```

## Как запустить

1. Откройте `index.html` в браузере
2. Или через Live Server / `python -m http.server`

## Как выложить в Telegram

1. Загрузите папку на Netlify / Vercel / GitHub Pages (нужен HTTPS)
2. В @BotFather привяжите ссылку как Menu Button
3. Готово

---

Менеджер: @olga_bloom24  
Канал: @bloom_krsk24
