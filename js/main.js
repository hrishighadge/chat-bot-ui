function ToggleBotWindow(){
    var BotIcon = document.getElementById("bot-icon");
    var CancelIcon = document.getElementById("cancel-icon");
    if(window.getComputedStyle(BotIcon).display === "block" && window.getComputedStyle(CancelIcon).display === "none"){
        document.getElementById("bot-icon").style.display = "none";
        document.getElementById("cancel-icon").style.display = "block";
        document.getElementsByClassName("bot-container")[0].classList.add("bot-container-visible");
        document.getElementById("chat-bot").style.display = "block";
    }
    else{
        document.getElementById("bot-icon").style.display = "block";
        document.getElementById("cancel-icon").style.display = "none";
        document.getElementsByClassName("bot-container")[0].classList.remove("bot-container-visible");
        document.getElementById("chat-bot").style.display = "none";
    }
}