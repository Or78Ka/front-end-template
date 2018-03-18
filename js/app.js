const clickedImage1 = document.querySelector('#pic1');
const cardName1 = document.querySelector('#cardtitle1');
const linkList1 = document.querySelector('#overlay1');

clickedImage1.addEventListener('click', () => {
  cardName1.style.display = "none";
  linkList1.style.display = "block";
}
);

linkList1.addEventListener('mouseout', () => {
  cardName1.style.display = "block";
  linkList1.style.display = "none";
}
);
