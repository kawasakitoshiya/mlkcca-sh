var milkcocoa = new MilkCocoa('guitaricoz8m9j.mlkcca.com');
var chatDataStore = milkcocoa.dataStore('mlkcca-sh');
var textArea, board;
window.onload = function(){
    textArea = document.getElementById("msg");
    board = document.getElementById("board");
}

function clickEvent(){
    var text = textArea.value;
    if(text=="clear"){
	board.innerHTML = "";
	addText(">");
	return;
    }
    sendText(text);
}

function sendText(text){
    chatDataStore.push({message : text, type:"request"});
    textArea.value = "";
    addText(">" + text);
}

chatDataStore.on("push",function(data){
	if(data.value.type=="request") return;
	addText(data.value.message);
	addText(">");
});

function addText(text){
    var msgDom = document.createElement("li");
    msgDom.innerHTML = text;
    board.appendChild(msgDom);
}
