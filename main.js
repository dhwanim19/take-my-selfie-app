var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult =function(event)  {

    console.log(event);

    var Content = event.result[0][0].transcript;

    document.getElementById("textbox").innerHTML= Content;
}

var SpeechRecognition = new SpeechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}

recognition.onresult = function(event){
      
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(content);
      speak();
}

function speak (){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").Value;
    
    var utterThis =new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}