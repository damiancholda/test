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
    const switchTheam = document.querySelector('.switch')

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

    switchTheam.addEventListener("click",()=>{
        const heroCtas = document.querySelectorAll('.hero-ctas a');

        switchTheam.classList.toggle('active');

        if(switchTheam.classList.contains('active')){
            document.documentElement.style.setProperty('--background-dark', '--background')
            document.documentElement.style.setProperty('--main-text-light', '--main-text-dark')
            document.querySelector('.h1-line').style.setProperty('-webkit-text-stroke', '1px #1A1A18');
            document.documentElement.style.setProperty('--sec-text-light', '--sec-text-dark');
            changeBorder();
        }else{
            document.documentElement.style.setProperty('--background-dark','#1A1A18')
            document.documentElement.style.setProperty('--main-text-light','#dbdbc9');
            document.querySelector('.h1-line').style.setProperty('-webkit-text-stroke', '1px var(--main-text-light)');
            document.documentElement.style.setProperty('--sec-text-light', '#EDEAE3');
            document.querySelector('.hero-ctas a').style.setProperty('border', '1px solid #EDEAE3')
            changeBorder();

        }

        function changeBorder (){
            const secCta = heroCtas[1];

           heroCtas.forEach(cta => {
                if(switchTheam.classList.contains('active')){
                cta.style.border = '1px solid var(--sec-text-dark)';
                secCta.style.setProperty('box-shadow','0 0 5px -1px #1A1A18')
                secCta.addEventListener('mouseenter',()=>{secCta.style.setProperty('box-shadow','0 0 10px -1px #1A1A18')});
                secCta.addEventListener('mouseleave',()=>{secCta.style.setProperty('box-shadow','0 0 5px -1px #1A1A18')});
            }else{
                cta.style.border = '1px solid #EDEAE3';
                secCta.style.setProperty('box-shadow','none')
                secCta.addEventListener('mouseenter',()=>{secCta.style.setProperty('box-shadow','0 0 5px 1px var(--sec-text-light)')});
                secCta.addEventListener('mouseleave',()=>{secCta.style.setProperty('box-shadow','0 0 0 0 transparent')});
                }
           });
        }
    })
})
