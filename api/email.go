package main

import (
	"os"
	"fmt"

	"github.com/joho/godotenv"
	"github.com/resendlabs/resend-go"
)

func SendEmail(to, subject, html string) error {
	err := godotenv.Load()
	if err != nil {
		return fmt.Errorf("Failed to load .env: %v", err)

	}
	apiKey := os.Getenv("RESEND_API_KEY")
	fmt.Println("Loaded RESEND_API_KEY:", apiKey)
	if apiKey == "" {
		return fmt.Errorf("RESEND_API_KEY is not here?!")
	}

	client := resend.NewClient(apiKey)

	params := &resend.SendEmailRequest{
		From: "Inversion <onboarding@resend.dev>",
		To: []string{to},
		Subject: subject,
		Html: html,
	}

	_, err = client.Emails.Send(params)
	return err
}