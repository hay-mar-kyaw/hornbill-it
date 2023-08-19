let section=document.querySelector('#about');
let nums=document.querySelectorAll('.nums .num');
// console.log(nums);
let start=false;
    window.onscroll=function(){
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