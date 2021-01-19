class Player{
    constructor(){}
    getCount(){
        var pc=database.ref("playerCount")
        pc.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
        
    }
    update(name){
        var PI="player"+playerCount
        database.ref(PI).set({name:name})
    }
}