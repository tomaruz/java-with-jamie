console.log("hello world");
const body = document.querySelector("body");
body.style.backgroundColor = "#5A5A5A";
const links = document.querySelectorAll("a");
for(let i = 0; i < links.length; i++){
    //console.log(links[i]);
    links[i].style.color = "white";
}
