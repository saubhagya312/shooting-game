const container = document.querySelector(".container");
const start = document.querySelector(".start");
const blood = document.querySelector(".bloodspot");

const terror = document.createElement("img");

terror.setAttribute("class", "terror");
terror.setAttribute("src", "./gameImages/terrorist.png");

const th = container.offsetHeight;
const tw = container.offsetWidth;


setInterval(() => {
    const randTop = Math.random() * (th - 100);
    const randLeft = Math.random() * (tw - 100);

    terror.style.position = "absolute";
    terror.style.top = randTop + "px";
    terror.style.left = randLeft + "px";
}, 1000);

let score = 0;


start.addEventListener("click", () => {
    container.appendChild(terror);

    start.innerText = "SCORE: " + score;
});
window.addEventListener("click", (e) => {
    console.log(e);
    blood.style.top = e.pageY + "px";
    blood.style.left = e.pageX + "px";

    if (e.target === terror) score++;
    start.innerText = "SCORE: " + score;


});


const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";

});