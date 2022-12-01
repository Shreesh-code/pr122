function setup() {
    createCanvas(600, 600);
}


function preload() {
    apple = loadImage("1.png");

}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function DoSomething() {
    document.getElementById("status").innerHTML = "The system is listening. SAY SOMETHING YOU LAZY HUMAN";
    recognition.start();

}
y = 0;
x = 0;

draw_a = "";
num = 0;
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "THE SPEECH HAS BEEN RECOGNIZED AS:" + content;
    num = Number(content);

    if (Number.isInteger(num)) {
        draw_a = "set";
        document.getElementById("status").innerHTML = "It started drawing apple! ARE YOU PAYING ATTENTION TO MY HARD WORK!";
    }
    else {
        document.getElementById("status").innerHTML = "errror";
    }
}

function draw() {

    if (draw_a == "set") {
        for (var i = 1; i <= num; i++) {
            x = Math.floor(Math.random() * 600);
            y = Math.floor(Math.random() * 600);

            image(apple, x, y, 50, 50);
        }


        document.getElementById("status").innerHTML = "I drew a application on my own";
        draw_a = "";
    }
}



function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}