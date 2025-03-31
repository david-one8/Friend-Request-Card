let c = document.querySelector(".card")
let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let btn = document.querySelector("button")

let clicked = 0;

addEventListener("click", function(){
if(clicked == 0){
  h3.innerHTML = 'Web Developer'
  h3.style.color = '#6A5ACD'
  btn.innerHTML = 'Remove friend'
  btn.style.backgroundColor = "rgb(127, 255, 63)"
  clicked = true;
  spreadEmojis("❤️", 300, 1600); // Spread 300 heart emojis within 1600px area 
}
else{
  h3.innerHTML = 'UI Designer'
  h3.style.color = ''
  btn.innerHTML = 'Friend request'
  btn.style.backgroundColor = ""
  clicked = false;
  spreadEmojis("🥲", 300, 1600);
}
})


function spreadEmojis(emojiType, count, spreadSize) {
  for (let i = 0; i < count; i++) { 
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerHTML = emojiType;

    emoji.style.position = "absolute";
    emoji.style.left = `${btn.offsetLeft + btn.offsetWidth / 2 + (Math.random() * spreadSize - spreadSize / 2)}px`; 
    emoji.style.top = `${btn.offsetTop + (Math.random() * spreadSize - spreadSize / 2)}px`; 
    emoji.style.fontSize = "24px";
    emoji.style.transition = "transform 1s, opacity 1s"; 

    document.body.appendChild(emoji); 

    setTimeout(() => {
      emoji.style.transform = `translateY(${Math.random() * -50}px) rotate(${Math.random() * 360}deg)`; 
      emoji.style.opacity = "0"; 
    }, 50);

    setTimeout(() => {
      emoji.remove();
    }, 1050);
  }
}