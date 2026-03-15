const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current="";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


// Background animation
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00c6ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00c6ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});
