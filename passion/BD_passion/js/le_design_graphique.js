// const swup = new Swup();

// var color = ["#2e86c1","#f39c12","#2e4053","#c0392b","#1abc9c"]
// var i = 0;
// document.querySelector(".eventFlash").addEventListener("click",
//     function(){
//         i = i < color.lenght ? ++i : 0;
// document.querySelector(".jumbotron").style.background = color[i]
//     })

// const changeBg = document.querySelector('.eventFlash'),
//         bg = [location.href='img/accueil/appareilPhoto.jpg', location.href='img/accueil/bgJumbotron3.jpg'];
// let bgIndex = 0;

// changeBg.addEventListener('click', () => {
//     document.querySelector(".jumbotron").sytle.backgroundImage = bg[bgIndex];
//     bgIndex = (bgIndex + 1) % bg.length
// });

//Ca fonctionne
document.querySelector(".eventFlash").addEventListener("click", function (){
    document.querySelector(".jumbotron").style.backgroundImage = "url('img/accueil/appareilPhoto.jpg')";
});
document.querySelector(".eventFlash2").addEventListener("click", function (){
    document.querySelector(".jumbotron").style.backgroundImage = "url('img/accueil/bgJumbotron3.jpg')";
});



// document.querySelector(".eventFlash").addEventListener("click", function (){
//         document.querySelector(".jumbotron").style.backgroundImage = "url('img/accueil/appareilPhoto.jpg')";
//         this.document.querySelector(".jumbotron").style.backgroundImage = "url('img/accueil/bgJumbotron3.jpg')";

// });

// var image = ["url('img/accueil/bgJumbotron3.jpg')", "url('img/accueil/appareilPhoto.jpg')"];
// var index = 0;
// var button = document.querySelector(".jumbotron");

// function myFunction() {
//     document.querySelector(".eventFlash");

//     image.src = image[index]
//     index++
//     if(index >= image.length){
//         index = 0;
//     }
// }

// var lights= ["url('img/accueil/bgJumbotron3.jpg')", "url('img/accueil/appareilPhoto.jpg')"]
// var index = 0;
// var image = document.querySelector(".jumbotron");

// function myFunction() {
//     document.querySelector(".eventFlash");

//     image.src = lights[index]
//     index++;
//     if(index >= lights.length) {
//         index = 0;
//     } 
// }



