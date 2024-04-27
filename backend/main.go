package main

import (
	connect "backend/connect"
	"backend/handlers"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/BurntSushi/toml"

	json "github.com/bytedance/sonic"
	"github.com/gofiber/contrib/fiberi18n"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
	"golang.org/x/text/language"
)

func init() {

	// Загрузка переменных окружения из файла .env
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {

	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})
	micro := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})
	app.Use(recover.New())
	micro.Use(recover.New())

	app.Mount(fmt.Sprintf("/api/%s", os.Getenv("")), micro)

	app.Use(
		logger.New(logger.Config{
			// For more options, see the Config section
			Format: "${status} - ${method} ${path}\n",
		}),
		// 3 requests per 10 seconds max
		limiter.New(limiter.Config{
			Expiration: 10 * time.Second,
			Max:        3,
		}),
		cors.New(cors.Config{
			AllowOrigins:     os.Getenv("CLIENT_ORIGIN"),
			AllowHeaders:     "Origin, Content-Type, Accept",
			AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",
			AllowCredentials: true,
		}),

		fiberi18n.New(&fiberi18n.Config{
			RootPath:         "./resources/langs",
			AcceptLanguages:  []language.Tag{language.English, language.Ukrainian, language.Russian},
			DefaultLanguage:  language.English,
			UnmarshalFunc:    toml.Unmarshal,
			FormatBundleFile: "toml",
			LangHandler:      handlers.SetLocale,
		}))

	micro.Use(
		logger.New(logger.Config{
			// For more options, see the Config section
			Format: "${status} - ${method} ${path}\n",
		}),
		// 3 requests per 10 seconds max
		limiter.New(limiter.Config{
			Expiration: 10 * time.Second,
			Max:        3,
		}),
		cors.New(cors.Config{
			AllowOrigins:     os.Getenv("CLIENT_ORIGIN"),
			AllowHeaders:     "Origin, Content-Type, Accept",
			AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",
			AllowCredentials: true,
		}),

		fiberi18n.New(&fiberi18n.Config{
			RootPath:         "./resources/langs",
			AcceptLanguages:  []language.Tag{language.English, language.Ukrainian, language.Russian},
			DefaultLanguage:  language.English,
			UnmarshalFunc:    toml.Unmarshal,
			FormatBundleFile: "toml",
			LangHandler:      handlers.SetLocale,
		}))

	// Подключаемся к базе данных
	connect.GetDatabase()

	// Инициализируем маршруты
	// routes.Setup(micro)

	log.Fatal(app.Listen(os.Getenv("SERVER_PORT")))

}
