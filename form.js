class Form{

constructor(){}


display(){

var title=createElement("h2")
title.html("CarRace")
title.position(130,0)
var input = createInput("name")
input.position(150,150)
var button= createButton("PLAY")
button.position(200,180)
var greeting=createElement("h3")
button.mousePressed(function(){
    input.hide()
    button.hide()
    var name=input.value()
    playerCount=playerCount+1
    player.update(name)
    player.updateCount(playerCount)
    greeting.html("WAZ UP"+ name + "Waiting for people to bounce in")
    greeting. position(200,200)
})
}







}