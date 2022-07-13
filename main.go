package main

import (
	"fmt"
	"html/template"

	"net/http"

	"github.com/gorilla/mux"
	"news.com/events/auth"
	enter "news.com/events/controllers"
	connect "news.com/events/databases"
)

type Users struct {
	Login    string `json:"Login"`
	Password string `json:"Password"`
	Email    string `json:"Email"`
}

func home_page(w http.ResponseWriter, r *http.Request) {

	//fmt.Fprintf(w, "Hello," + egor.getInfo())
	tmpl, err := template.ParseFiles("html/index.html")
	if err != nil {
		panic(err)
	}
	tmpl.ExecuteTemplate(w, "index", nil)
}
func sign(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("html/Log_in.html")
	if err != nil {
		panic(err)
	}
	tmpl.ExecuteTemplate(w, "Log", nil)
	Email := r.FormValue("email")
	Login := r.FormValue("login")
	Password := r.FormValue("password")
	fmt.Println(Login + " " + Password + " " + Email)
	if Login != "" && Password != "" {
		connect.Connect(Login, Password, Email)

	} else {
		fmt.Println("Oh, sorry")
	}
	//fmt.Println(Login + " " + Password)

}
func Profile(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("html/Profile.html")
	if err != nil {
		panic(err)
	}
	vars := mux.Vars(r)
	user := vars["Users"]
	fmt.Println(user)
	//var Us_prof Users

	Us_prof := *auth.GetProfile(user)
	//fmt.Println(u.Email + " " + u.Login + " " + u.Password)

	tmpl.ExecuteTemplate(w, "profile", Us_prof)

}
func Registered(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("html/User_start.html")
	if err != nil {
		panic(err)
	}
	vars := mux.Vars(r)
	user := vars["Users"]
	if enter.Check(user) == true {
		tmpl.ExecuteTemplate(w, "user", user)
	} else {

	}

}
func login(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("html/Entry.html")
	if err != nil {
		panic(err)
	}
	tmpl.ExecuteTemplate(w, "Entry", nil)
	Login := r.FormValue("Login")
	Password := r.FormValue("Password")

	if Login != "" && Password != "" {

		if enter.Entry(Login, Password) == true {
			http.Redirect(w, r, "/home/"+Login, 301)

		}
	} else {

		fmt.Println("Oh, sorry")

	}
	//fmt.Println(Login + " " + Password)

}

func handleRequest() {
	r := mux.NewRouter()

	http.Handle("/styles/", http.StripPrefix("/styles/", http.FileServer(http.Dir("./styles/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./js/"))))
	r.HandleFunc("/", home_page)
	r.HandleFunc("/Sign", sign)
	r.HandleFunc("/Log", login)
	r.HandleFunc("/Profile/{Users}", Profile)
	r.HandleFunc("/home/{Users}", Registered)
	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)

}
func main() {

	handleRequest()

	//handleRequest()

}
