package connect

import (
	"fmt"
	"os"
	"sync"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	db   *gorm.DB
	once sync.Once // Используем `sync.Once` для инициализации инстанса единожды.
)

// GetDatabase функция для инициализации подключения к базе данных
func GetDatabase() *gorm.DB {

	once.Do(func() { // Удостовериться, что функция выполнится только один раз.

		var err error

		// Формирование строки подключения
		// Интерполяция строк, заменяя заглушки настоящими значениями переменных окружения
		dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s TimeZone=%s",
			os.Getenv("HOST"),
			os.Getenv("POSTGRES_USER"),
			os.Getenv("POSTGRES_PASSWORD"),
			os.Getenv("POSTGRES_DB"),
			os.Getenv("POSTGRES_PORT"),
			os.Getenv("POSTGRES_SSL_MODE"),
			os.Getenv("TZ"))
		db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
			panic("Failed to connect to database!")
		}

		// // Автомиграция для модели `User`
		// err = db.AutoMigrate(&models.User{})
		// if err != nil {
		// 	panic("failed to auto migrate database")
		// }
	})

	return db
}
