package messenger

import (
	_ "html/template"
	"log"
	"os"
	"strconv"

	"gopkg.in/gomail.v2"
)

// Sent message for customer
func SendEmail(recipients []string, subject string, message string) (err error) {

	smtpPort, err := strconv.Atoi(os.Getenv("SMTP_PORT"))
	if err != nil {
		log.Fatal(err)
	}
	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("SMTP_USER"))
	m.SetHeader("To", recipients...)
	m.SetHeader("Subject", subject)
	//m.SetBody("text/html", template.HTMLEscapeString(Message))
	m.SetBody("text/html", message)
	// d := gomail.NewDialer(config.SmtpHost, config.SmtpPort, config.SmtpUser, config.SmtpPassword)
	d := gomail.NewDialer(os.Getenv("SMTP_HOST"), smtpPort, os.Getenv("SMTP_USER"), os.Getenv("SMTP_PASSWORD"))

	if err := d.DialAndSend(m); err != nil {
		//log.Error("Failed to send email ", err)
		return err
	}
	return
}
