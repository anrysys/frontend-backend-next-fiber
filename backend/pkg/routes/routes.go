package routes

import (
	"backend/pkg/handlers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	// app.Post("/api/login", handlers.Login)
	app.Post("/api/register", handlers.Register)
}
