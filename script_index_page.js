let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");

let a=0,b=0,c=0;

button1.addEventListener("click",()=>{
    if(a==0){
        ans1.style.display = "block";
        a++;
    }
    else{
        ans1.style.display = "none";
        a=0;
    }
})

button2.addEventListener("click",()=>{
    if(b==0){
        ans2.style.display = "block";
        b++;
    }
    else{
        ans2.style.display = "none";
        b=0;
    }
})

button3.addEventListener("click",()=>{
    if(c==0){
        ans3.style.display = "block";
        c++;
    }
    else{
        ans3.style.display = "none";
        c=0;
    }
})
