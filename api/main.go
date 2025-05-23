package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"time"
	"context"

	"inversionWebsiteBackend/models"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var newsletterCollection *mongo.Collection
func main(){
	//connectMongo()
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "inversionWebsiteBackend is running")
	})

	http.HandleFunc("/subscribe", func(w http.ResponseWriter, r *http.Request) {
			if r.Method != http.MethodPost {

				http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
				return
			}

			var subscriber models.Subscriber
			err := json.NewDecoder(r.Body).Decode(&subscriber)
			if err != nil || subscriber.Name == "" || subscriber.Email == "" {
				http.Error(w, "Invalid Request Body", http.StatusBadRequest)
				return
			}
			fmt.Printf("Received subscriber: %+v\n", subscriber)

			//TODO Save this to mongo db when cluser is made
			w.WriteHeader(http.StatusCreated)
			fmt.Fprintln(w, "Subscriber Added")
	})

	http.HandleFunc("/send-test-email", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		type Request struct {
			To	string `json:"to"`
			Subject	string `json:"subject"`
			Html	string `json:"html"`

		}

		var req Request
		
		err := json.NewDecoder(r.Body).Decode(&req)

		if err != nil || req.To == "" || req.Subject == "" || req.Html == "" {
			http.Error(w, "Invalid Request Body", http.StatusBadRequest)
			return
		}

		err = SendEmail(req.To, req.Subject, req.Html)
		if err != nil {
			http.Error(w, "Failed To Send Email: "+err.Error(), http.StatusInternalServerError)
			return
		}

		fmt.Fprintln(w, "Test email sent successfully")
	})

	fmt.Println("Server running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}


func connectMongo(){
	uri := ""
	clientOpts := options.Client().ApplyURI(uri)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOpts)
	if err != nil {
		log.Fatal("MongoDB connection error:", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal("MongoDB ping error:", err)
	}

	newsletterCollection = client.Database("Inversion").Collection("subscribers")
	fmt.Println("Connected to mongo!!")
}