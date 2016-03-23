var tiles = document.getElementsByClassName("tile");
var logbar = document.getElementsByClassName("logbar");

var characters =[{name:"Apple", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/apple.jpg')" },
                {name:"Orange",url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/orange.jpg')"},
                {name:"Bananas", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/banana.jpg')"},
                {name:"Pear", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/pear.jpg')"},
                {name:"Watermelon", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/watermelon.png')"},
                {name:"Pineapple", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/pineapple.png')"},
                {name:"Blueberry", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/blueberry.png')"},
                {name:"Strawberry", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/strawberry.jpg')"},
                {name:"Blackberry", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/blackberry.jpg')"},
                {name:"Kiwis", url: "url('/home/sidra/Dropbox/Berry Blast/Berry Blast/kiwis.png')"}
              ];
              
              
function startUp(){
  logbar[0].innerHTML = "<div> The Fruit Roll Up!</div>"
  tiles[0].childNodes[0].innerText = "Berry";
  tiles[1].innerHTML = "<div> Blast</div>";
  tiles[2].innerHTML = "<div> !!!</div>";
  tiles[3].innerHTML = "<div> !!!</div>"
}

function doBattle(){
    var selected=[];
    for( var i=0; i < tiles.length; i++){
        tiles[i].innerHTML = "";
        
        tiles[i].style.backgroundImage = "url('../image/game.jpg')";
        tiles[i].style.backgroundRepeat = "no-repeat";
        selected[i] = Math.floor((Math.random() * 10));
        tiles[i].style.backgroundImage = characters[selected[i]].url;
    }

    if ( (selected[0]==selected[1]) && (selected[0]==selected[2]) && (selected[0]==selected[3])
        && (selected[1]==selected[3]) && (selected[1]==selected[2]) && (selected[1]==selected[3]) && (selected[2]==selected[3]) ){
        logbar[0].innerHTML = "YAYY, YOU WON! 4/4! I must give you a berry big hug!";
    } 
    else if (((selected[0]==selected[1]) && (selected[0]==selected[2])) || ((selected[0]==selected[1]) && (selected[0]==selected[2]))
        || ((selected[0]==selected[2]) && (selected[0]==selected[3])) 
        || ((selected[1]==selected[2]) && (selected[1]==selected[3])) || ((selected[1]==selected[2]) && (selected[0]==selected[1])) 
        || ((selected[1]==selected[3]) && (selected[0]==selected[1]))) {
        logbar[0].innerHTML = "Shoot! You were berry close! 3/4!";
    }
    else if ( (selected[0]==selected[1]) || (selected[0]==selected[2]) || (selected[0]==selected[3])
        || (selected[1]==selected[3]) || (selected[1]==selected[2]) || (selected[1]==selected[3]) || (selected[2]==selected[3])
        || (selected[1]==selected[2]) || (selected[0]==selected[3]) ){
        logbar[0].innerHTML = "Dang! It's okay, you tried your berry best! 2/4!";
    } else {
        logbar[0].innerHTML = 'Aww darn! This is berry disappointing! 0/4! ';
    }   
}

function autoBattle(){
    auto = setInterval(function(){doBattle()}, 3000);
}

function stopAutoBattle(){
    clearInterval(auto);
}

// function shift01(){
//     var tile01 = document.getElementById("tile01");
//     tile01.style.position = "relative";
//     tile01.style.top = "30vw";    
// }