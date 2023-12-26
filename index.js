

var l=document.querySelectorAll(".drum").length;


for(var i=0;i<l; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var button_name=this.innerHTML;

        sound_type(button_name);

        button_animation(button_name);
    });
}

document.addEventListener("keypress", function(button_name){
    sound_type(button_name.key);

    button_animation(button_name.key);
});



function button_animation(button_name){
    var active_button=document.querySelector("."+ button_name);

    active_button.classList.add("pressed");

    setTimeout(function(){active_button.classList.remove("pressed");}, 100);
}


function sound_type(button_name){ 

    switch(button_name){
        case 'w':
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio=new Audio('./sounds/snare.mp3');
            audio.play(); 
            break;
        case 'd':
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
       }
}



