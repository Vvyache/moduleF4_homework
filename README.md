# Задание:
1. Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.
2. Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать в клиенте и в API.
3. Где отображать документацию API — решать вам.
4. У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, а из категории — на любой рецепт этой категории.

# В проекте применены
Frontend:
- сборщик пакетов webpack
- react, установленный инструментом create-react-app
- библиотека для маршрутизации react-router
  
Backend:
- сервер на основе фреймворка django
- библиотека django rest framework для организации api интерфейса
- инструмент для генерации документации к эндпоинтам swagger
- база данных SQLite

# Установка и запуск среды разработки backend Django
- Клонируем репозиторий git clone https://github.com/Vvyache/moduleF4_homework.git
- Переходим в терминале в директорию проекта
- Затем инсталлируем необходимые для работы проекта пакеты: 
    pip install -r requirements.txt
- В консоли переходим в директорию проекта и стартуем проект:  
    python manage.py runserver

# Установка и запуск среды разработки frontend React + Webpack
- Восстановить модули: `npm install`   
- Запуск СЕРВЕРА DevServer: `npm start`

Сервер разработки будет запущен по адресу http://127.0.0.1:3000/

Документация по открытому API (Swagger) доступна по адресу http://127.0.0.1:8000/swagger/








