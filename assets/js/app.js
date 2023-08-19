let section=document.querySelector('#about');
let nums=document.querySelectorAll('.nums .num');
// console.log(nums);
let start=false;
    window.onscroll=function(){
        myFunction();
        if(window.scrollY >= section.offsetTop){
            if(!start){
                nums.forEach((num)=>startCount(num));
            }
            start = true;
        }
    };
    


function startCount(number){
    let goal=number.dataset.goal;
    // console.log(goal);
    let count=setInterval(()=>{
        number.textContent++;
        if(number.textContent==goal){
            clearInterval(count);
        }
    },1000/goal);
}


// Up Arrow 

let uparrow=document.getElementById('uparrow');

function myFunction(){
    if(pageYOffset < 200){
        uparrow.style.display="none";

    }else{
        uparrow.style.display="inline"
    }
    
}

