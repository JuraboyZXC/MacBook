let imgOne = document.querySelector(".imgOne");
let imgTwo = document.querySelector(".imgTwo");
let colorName = document.querySelector(".colorName");
let colorWhite = document.querySelector(".white");
let colorSpace = document.querySelector(".space");
let btnOne = document.querySelector(".one");
let btnTwo = document.querySelector(".two");
let btnTree = document.querySelector(".tree");
let btnFour = document.querySelector(".four");
let price = document.querySelector('.price')

colorSpace.onclick = () => {
  imgTwo.style.display = "block";
  colorSpace.style.backgroundColor = "#0071E3";
  colorWhite.style.backgroundColor = "#CFE7FF";
  colorSpace.style.color = "white";
  colorName.innerText = "Space Grey";
};

colorWhite.onclick = () => {
  imgTwo.style.display = "none";
  colorSpace.style.backgroundColor = "#CFE7FF";
  colorWhite.style.backgroundColor = "#0071E3";
  colorName.innerText = "White";
};

btnOne.onclick = () => {
  btnOne.style.border = "2px solid #0071E3";
  btnTwo.style.border = "2px solid #CFE7FF";
  btnTree.style.border = "2px solid #CFE7FF";
  btnFour.style.border = "2px solid #CFE7FF";
  price.innerText = '$1,999'
};
btnTwo.onclick = () => {
    btnTwo.style.border = "2px solid #0071E3";
    btnTree.style.border = "2px solid #CFE7FF";
    btnFour.style.border = "2px solid #CFE7FF";
    btnOne.style.border = "2px solid #CFE7FF";
    price.innerText = '$2,199'
};
btnTree.onclick = () => {
    btnTree.style.border = "2px solid #0071E3";
    btnFour.style.border = "2px solid #CFE7FF";
    btnOne.style.border = "2px solid #CFE7FF";
    btnTwo.style.border = "2px solid #CFE7FF";
    price.innerText = '$2,599'
};
btnFour.onclick = () => {
    btnFour.style.border = "2px solid #0071E3";
    btnTwo.style.border = "2px solid #CFE7FF";
    btnTree.style.border = "2px solid #CFE7FF";
    btnOne.style.border = "2px solid #CFE7FF";
    price.innerText = '$3,199'
};
