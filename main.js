const b5=document.getElementById("a5");
const b10=document.getElementById("a10");
const b15=document.getElementById("a15");
const b25=document.getElementById("a25");
const b50=document.getElementById("a50");
const b=document.getElementById("xx");
function bosildi(xz){
    const ota=document.getElementById("otta");
    ota.children[0].style.background="black"
    ota.children[1].style.background="black"
    ota.children[2].style.background="black"
    ota.children[3].style.background="black"
    ota.children[4].style.background="black"
    ota.children[5].style.background="rgba(182, 186, 190, 0.782)"
    xz.style.background="#26C2AE"
}
let xisob=0;
let choychaqa=0;
let narx=142.55;
b5.addEventListener("click", function(){
    bosildi(b5);
    choychaqa=142.55*0.05;
})

b10.addEventListener("click", function(){
    bosildi(b10);
    choychaqa=142.55*0.1;
})
b15.addEventListener("click", function(){
    bosildi(b15);
    choychaqa=142.55*0.15;
})
b25.addEventListener("click", function(){
    bosildi(b25);
    choychaqa=142.55*0.25;
})
b50.addEventListener("click", function(){
    bosildi(b50);
    choychaqa=142.55*0.5;
})
b.addEventListener("click", function(){
    bosildi(b);
})

const btnel=document.getElementById("jonat");
btnel.addEventListener("click", function(){
    const inpel=document.getElementById("int").value;
    const coy=document.querySelector(".choy");
    const umm=document.querySelector(".umumiy");
    coy.textContent+=(choychaqa/inpel).toFixed(2);
    umm.textContent+=(142.55/inpel+choychaqa/inpel).toFixed(2);
})