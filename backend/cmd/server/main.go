package main

import (
	"backend/internal/database"
	"backend/pkg/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func init() {
	// Загрузка переменных окружения из файла .env
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

}

func main() {

	app := fiber.New()

	app.Use(logger.New(logger.Config{
		// For more options, see the Config section
		Format: "${status} - ${method} ${path}\n",
	}))

	// Применение CORS middleware - настройте опции по необходимости
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000", // Разрешение запросов с этого домена
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
	}))

	// Подключаемся к базе данных
	database.GetDatabase()

	// Инициализируем маршруты
	routes.Setup(app)

	app.Listen(":8181")
}
