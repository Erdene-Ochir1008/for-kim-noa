const giftBtn = document.getElementById("giftBtn");
const giftPage = document.getElementById("giftPage");

const questionBtn = document.getElementById("questionBtn");
const questionPage = document.getElementById("questionPage");

const musicPage = document.getElementById("musicPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

giftBtn.onclick = () => {
    document.querySelector(".container").style.display = "none";
    giftPage.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

questionBtn.onclick = () => {
    giftPage.style.display = "none";
    questionPage.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

yesBtn.onclick = () => {
    questionPage.style.display = "none";
    musicPage.style.display = "block";

    alert("💖 Thank you, Kim Noa.\nYou just made me the happiest person. 💕");
};

let clickCount = 0;

noBtn.onclick = () => {

    clickCount++;

    if(clickCount == 1){
        alert("🥺 Really?");
    }
    else if(clickCount == 2){
        alert("🌸 Please think one more time...");
    }
    else{
        questionPage.style.display = "none";
        musicPage.style.display = "block";

        alert("Thank you for being honest. 🤍");
    }

};

function moveButton(){

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseover", moveButton);

setInterval(() => {

    const hearts = document.createElement("div");

    hearts.innerHTML = "💖";

    hearts.style.position = "fixed";

    hearts.style.left = Math.random()*100+"vw";

    hearts.style.top = "-30px";

    hearts.style.fontSize = (20+Math.random()*30)+"px";

    hearts.style.transition = "5s linear";

    document.body.appendChild(hearts);

    setTimeout(()=>{
        hearts.style.top="110vh";
    },50);

    setTimeout(()=>{
        hearts.remove();
    },5500);

},700);
