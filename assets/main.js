const navBar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY>20){
        navBar.classList.add('onScroll')
    }else{
        navBar.classList.remove('onScroll')
    }
})

document.addEventListener('DOMContentLoaded', ()=>{

    const burger = document.querySelector('.burger');
    const links = document.querySelector('.nav-links')

    burger.addEventListener('click',()=>{

        if(!burger.classList.contains('active')){
            burger.classList.add('active');
            links.classList.add('active');
        }else{
            burger.classList.remove('active');
            links.classList.remove('active');
        }

        links.addEventListener('click',()=>{
            burger.classList.remove('active');
            links.classList.remove('active');
        })
    })
})