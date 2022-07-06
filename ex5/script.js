let h2 = document.querySelector("h2");
let a = document.querySelectorAll("a");
let text = document.querySelector(".text");
console.log(h2);
console.log(a);
console.log(text);

h2.textContent = "patate";
a[1].textContent = "purée de pomme de terre";
// let coucou = document.createElement("p");
// coucou.textContent = "coucou";
// document.body.append(coucou);

let h1 = document.createElement("h1");
h1.textContent = "le plus beau site du monde!"
document.body.prepend(h1);
// document.querySelector("img").remove();
// document.querySelector("img").style.display = 'none';

// //Ajouter un h1
// let nav = document.querySelector("#burger");
// let header = document.querySelector("header");
// let newDiv = document.createElement("div");
// let newTitle = document.createElement("h1");

// header.prepend(newDiv);

// newDiv = document.querySelector("div");
// newDiv.append(newTitle);

// //supprimer l'image

// let backgroundImg = document.querySelector("img");

// backgroundImg.remove();
// // Ajouter du texte dans le h1
// newTitle.textContent = "nouveau titre";

// let liNav = document.querySelector("ul");

// //Supprimer le troisième élément de la navbar

// function remover(whatIWantToRemove) {
//   return whatIWantToRemove.lastElementChild.remove();
// }
// remover(liNav);