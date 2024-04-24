package models

import (
	"gorm.io/gorm"
)

// User модель пользователя для GORM
type User struct {
	gorm.Model
	Username string `gorm:"uniqueIndex"`
	Password string
	Email    string `gorm:"uniqueIndex"`
}
