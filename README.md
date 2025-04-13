# 🌐 Frontend App with Docker

Этот проект представляет собой frontend-приложение, развёрнутое в контейнере с помощью Docker и Docker Compose. Приложение работает на Node.js 18 и использует Vite для разработки.

## 📦 Технологии

- Node.js 18
- Vite
- Docker
- Docker Compose

Убедитесь, что у вас установлены:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### ⚙️ Развёртывание

1. Клонируйте репозиторий:

   ```bash
   git clone <URL_репозитория>
   cd <имя_папки_проекта>

2. апустите сборку и приложение:
   ```bash
   docker-compose up --build

3. Откройте в браузере:
   ```bash
   http://localhost:5173

4. Остановить контейнеры:
   ```bash
   hdocker-compose down

5. Остановить и удалить том node_modules:
   ```bash
   docker-compose down -v

