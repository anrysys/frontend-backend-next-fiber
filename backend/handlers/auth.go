package handlers

import (
	"github.com/gofiber/fiber/v2"
	// Предполагаем, что у вас есть пакет auth для бизнес-логики
	"backend/auth"
)

// RegisterRequest структура для данных запроса регистрации
type RegisterRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Register(c *fiber.Ctx) error {
	req := new(RegisterRequest)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "cannot parse JSON"})
	}

	// Вызваем функцию регистрации из нашего пакета auth с полученными данными
	if err := auth.Register(req.Username, req.Password); err != nil {
		// В реальном приложении здесь должна быть более подробная обработка ошибок
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "registration failed"})
	}

	return c.JSON(fiber.Map{"message": "user registered successfully"})
}
