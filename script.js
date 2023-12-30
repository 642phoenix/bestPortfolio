console.log("conectado")



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


