package main

import (
	"backend/pkg/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Инициализируем маршруты
	routes.Setup(app)

	app.Listen(":8181")
}
