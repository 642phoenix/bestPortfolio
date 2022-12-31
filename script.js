console.log("conectado")

// document.addEventListener('scroll',(event)=>{

// })

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

let slides = [
  "./images/reactIconXXSmall.png",
  "./images/nodeIconXXSmall.png",
  "./images/mongoIconXXSmall.png",
  "./images/jsIconXXSmall.png",
  "./images/javaIconXXSmall.png",
  "./images/cplusIconXXSmall.png"
]
let next = document.getElementById("nextIcon");
let curr = document.getElementById("currentIcon");
let last = document.getElementById("lastIcon");

let i = 0;
function slide(){
let L = slides[slides.length - 1] ;
let F = slides[0]

  // for( let i = 0 ; i < slides.length; i++){
    curr.innerHTML = `<img src="${slides[i]}"/>`;
    
    if(slides[i-1]===undefined){
      last.innerHTML = `<img src="${L}"/>`;
    }else{
      last.innerHTML = `<img src="${slides[i-1]}"/>`;
    }
    if(slides[i+1]===undefined){
      next.innerHTML = `<img src="${F}"/>`;
    }else{
      next.innerHTML = `<img src="${slides[i+1]}"/>`;
    }
  // }
  i++;
  if(i === slides.length){
    i = 0;
  }
  setTimeout(()=>{
    slide()
  },3500)
}

  slide()


