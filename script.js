let circle = document.querySelector('.circle');
let blur = document.querySelector('.blur');

document.addEventListener('mousemove',function(dets){
    circle.style.left = dets.x+'px';
    circle.style.top = dets.y+'px'
    blur.style.left = dets.x - 125 +'px';
    blur.style.top = dets.y - 125 +'px'
})

let h3s = document.querySelectorAll('.nav h3')
h3s.forEach(function(value){
    value.addEventListener('mouseenter',function(){
        circle.style.scale =  2.5;
        circle.style.backgroundColor = 'transparent';
        circle.style.border = '1px solid white'
    })
    value.addEventListener('mouseleave',function(){
        circle.style.scale = 1;
        circle.style.backgroundColor = '#95C11E';
        circle.style.border = '0px solid #95C11E'
    })
})




gsap.to('.nav',{
    backgroundColor:'black',
    height:'90px',
    duration:0.5,
    scrollTrigger:{
        trigger:'.nav',
        scroller:'body',
        // markers:true,
        start:'top -10%',
        end:'top -11%',
        scrub:1
    }
})
gsap.to('.main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:'.main',
        scroller:'body',
        start:'top -30%',
        end:'top -80%',
        scrub:2
    }
})

gsap.from('#img1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:'img1',
        scroller:'body',
        marker:true,
        start:'top 55%',
        stop:'top 40%',
        scrub:4
    }
})
gsap.from('#img2',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:'img2',
        scroller:'body',
        marker:true,
        start:'top 55%',
        stop:'top 40%',
        scrub:4
    }
})