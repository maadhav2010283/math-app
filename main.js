function adduser() {

var player1_name = document.getElementById("1st_input").value
var player2_name = document.getElementById("2nd_input").value

localStorage.setItem("player1_name_localStorage", player1_name)
localStorage.setItem("player2_name_localStorage", player2_name)

window.location = "game_page.html"

}