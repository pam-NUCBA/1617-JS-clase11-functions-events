const menuDropdown = document.getElementById("menuDropdown");
const heart = document.getElementsByClassName("heart"); //hay muchos corazones. No nos conviene un id en ese caso!

//lo que vamos a repetir muchas veces nos lo podemos guardar
const hasClass = menuDropdown.classList;

const dropdown = () => {
  if (hasClass.contains("hide")) {
    hasClass.remove("hide");
  } else {
    hasClass.add("hide");
  }
};

//*la forma más larga del mundo:
// const dropdown = ()=> {
//     if(document.getElementById("menuDropdown").classList.contains("hide")) {
//         console.log('oh mis ojos')
//     }
// }

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}

