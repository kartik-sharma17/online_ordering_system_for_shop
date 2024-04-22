

// for slider 

let slider = document.querySelectorAll(".slide");


slider.forEach((slide , index)=>{
    slide.style.left = `${index * 100}%`;
})

slider[0].style.transform = translateX(100%);

// timer(()=>{
//     for(let i = 0 ; i<4 ; i++){
        
//     }
// })

