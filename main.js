let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

let imgArray = ["pithu1.jpg", "pithu2.jpg", "pithu3.jpg", "pithu4.jpg", "pithu5.jpg",
                "pithu6.jpg", "pithu7.jpg", "pithu8.jpg", "pithu9.jpg", "pithu10.jpg",
                "pithu11.jpg", "pithu12.jpg" ];
let imgIndex = 0;

function openModal(src) {
 imgIndex = imgArray.indexOf(src);
 document.getElementById('myModal').style.display = "block";
 document.getElementById('modalImg').src = src;
}

function closeModal() {
 document.getElementById('myModal').style.display = "none";
}

function prevImg() {
 if (imgIndex === 0) {
    imgIndex = imgArray.length - 1;
 } else {
    imgIndex--;
 }
 document.getElementById('modalImg').src = imgArray[imgIndex];
}

function nextImg() {
 if (imgIndex === imgArray.length - 1) {
    imgIndex = 0;
 } else {
    imgIndex++;
 }
 document.getElementById('modalImg').src = imgArray[imgIndex];
}