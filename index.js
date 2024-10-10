let loaderIndexStatus = true;
let loader = document.querySelector("img");
if (loaderIndexStatus == true) {
  setTimeout(() => {
    loader.style.display = "none";
    loaderIndexStatus = false;
  }, 2000);
}

let modalIndex = false;
let modal = document.querySelector(".modal");
let namee = document.querySelector(".name");
let age = document.querySelector(".age");
function openModal() {
  modalIndex = true;
  modal.style.display = "flex";
}
function closeModal() {
  modalIndex = false;
  modal.style.display = "none";
}
function clearInput(){
    namee.value ="";
    age.value ="";
}

