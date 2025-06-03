# Re.Bots Admin Dashboard Panel

## ⚠️ SLC VERSION (Super Light Core)

> 🚧 Project is under active development

`Re.Bots Admin` is an admin panel for Telegram bots that allows real-time monitoring of statistics, order management, and data visualization through an interactive dashboard.

---

## 🚀 Features

* 📋 List of Telegram bots
* 📊 Bot statistics (charts, numeric data)
* 📂 Orders list
* ✅ Order status management
* 📈 Orders analytics

---

## 🧱 Tech Stack

| Category          | Technologies                        |
| ----------------- | ----------------------------------- |
| Language          | TypeScript                          |
| Frontend          | React 19, Vite, React Router v7     |
| Styling           | TailwindCSS 4                       |
| Charts            | ApexCharts + react-apexcharts       |
| UI/UX Animations  | Motion (Framer Motion API)          |
| API Handling      | Axios                               |
| Backend (planned) | Custom API for collecting bot stats |
| Auth (planned)    | Google OAuth                        |
| Deployment        | VPS (planned)                       |

---

## 📂 Project Structure (FSD)

Project is structured using **Feature-Sliced Design (FSD)**:

```
src/
├── app/               # App initialization, global configs
├── entities/          # Core business entities (bots, orders)
├── features/          # Business features (filters, status toggles)
├── pages/             # Application pages (dashboard, orders, etc.)
├── shared/            # Reusable components, UI, helpers
├── widgets/           # Composed UI blocks (charts, stats, etc.)
```

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/rebots-admin.git
cd rebots-admin
npm install
npm run dev
```

> ⚠️ Requires `.env` file for API settings (coming soon).

---

## 🌐 API (in progress)

A custom REST API is planned, allowing Telegram bots to send their statistics, which will be visualized in the dashboard.

---

## 🛋 Future Plans

* 🔐 Google OAuth login
* 📆 API integration for live stats
* 📂 New Telegram bot metrics
* 🌍 i18n/multilingual support
* 📱 Responsive design & PWA mode

---

## 📊 Project Purpose

This is a **commercial + showcase project** designed to:

* Demonstrate front-end architecture and TypeScript usage
* Build a scalable dashboard interface
* Integrate with external APIs
* Prepare for production deployment

---

## 📸 Screenshots

*(Coming soon)*

---

## 📄 License

MIT — free to use with attribution.

---

**If you like the project or want to contribute — star it ⭐️ or open a pull request!**

---

# Re.Bots Панель Администратора

## ⚠️ SLC ВЕРСИЯ (Super Light Core)

> 🚧 Проект находится в стадии активной разработки

`Re.Bots Admin` — это панель администратора для Telegram-ботов, позволяющая в реальном времени отслеживать статистику, управлять заказами и визуализировать ключевые данные в удобной дашборд-форме.

---

## 🚀 Функционал

* 📋 Список Telegram-ботов
* 📊 Статистика по каждому боту (графики, числовые метрики)
* 📂 Список заказов
* ✅ Управление статусами заказов
* 📈 Общая аналитика заказов

---

## 🧱 Стек технологий

| Категория          | Технологии                                     |
| ------------------ | ---------------------------------------------- |
| Язык               | TypeScript                                     |
| Фронтенд           | React 19, Vite, React Router v7                |
| Стилизация         | TailwindCSS 4                                  |
| Графики            | ApexCharts + react-apexcharts                  |
| UI/UX Анимации     | Motion (Framer Motion API)                     |
| Работа с API       | Axios                                          |
| Бэкенд (план)      | Собственное API для приёма статистики от ботов |
| Авторизация (план) | OAuth через Google                             |
| Развёртывание      | VPS (планируется)                              |

---

## 📂 Архитектура проекта

Проект реализуется по **Feature-Sliced Design (FSD)**. Основные уровни:

```
src/
├── app/               # Инициализация приложения, глобальные стили и конфигурации
├── entities/          # Базовые бизнес-сущности (боты, заказы и т.п.)
├── features/          # Фичи — бизнес-логика (например, фильтры, переключение статуса заказа)
├── pages/             # Отдельные страницы (дэшборд, список заказов и т.д.)
├── shared/            # Переиспользуемые компоненты, хелперы, UI, утилиты
├── widgets/           # Составные блоки интерфейса (графики, карточки, виджеты статистики)
```

---

## 🛠️ Установка

```bash
git clone https://github.com/yourusername/rebots-admin.git
cd rebots-admin
npm install
npm run dev
```

> ⚠️ Для корректной работы требуется файл `.env` с настройками API (будет добавлено позже).

---

## 🌐 API (в разработке)

Планируется собственное REST API, через которое Telegram-боты смогут отправлять свою статистику. Эта статистика будет отображаться в интерфейсе в виде графиков и таблиц.

---

## 🛋 Планы на будущее

* 🔐 Реализация авторизации через Google OAuth
* 📆 Подключение реального API для отображения статистики
* 📂 Добавление новых метрик Telegram-ботов
* 🌍 Мультиязычность
* 📱 Адаптивность и PWA-режим

---

## 📊 Назначение проекта

Проект создаётся как **коммерческое решение** с возможностью **публичного showcase**, чтобы продемонстрировать навыки:

* Архитектура фронтенда (FSD, TypeScript, Tailwind)
* Создание админских панелей с графиками
* Подключение к внешним API и визуализация данных
* Подготовка к продакшену (VPS, авторизация, безопасность)

---

## 📸 Скриншоты

*(будут добавлены позже)*

---

## 📄 Лицензия

MIT — свободно используйте, но с указанием авторства.

---

**Если тебе нравится проект или ты хочешь внести вклад — обязательно сделай ⭐️ или pull request!**
