package messenger

import (
	_ "html/template"
	"os"
	"strconv"

	"gopkg.in/gomail.v2"
)

// Sent message for customer
func SendEmail(recipients []string, subject string, message string) (err error) {

	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("SMTP_USER"))
	m.SetHeader("To", recipients...)
	m.SetHeader("Subject", subject)
	//m.SetBody("text/html", template.HTMLEscapeString(Message))
	port, _ := strconv.Atoi(os.Getenv("SMTP_PORT"))
	d := gomail.NewDialer(os.Getenv("SMTP_HOST"), port, os.Getenv("SMTP_USER"), os.Getenv("SMTP_PASSWORD"))

	if err := d.DialAndSend(m); err != nil {
		//log.Error("Failed to send email ", err)
		return err
	}
	return
}
