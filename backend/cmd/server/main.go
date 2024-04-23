package main

import (
	"backend/pkg/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	// Применение CORS middleware - настройте опции по необходимости
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000", // Разрешение запросов с этого домена
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
	}))

	// Инициализируем маршруты
	routes.Setup(app)

	app.Listen(":8181")
}
