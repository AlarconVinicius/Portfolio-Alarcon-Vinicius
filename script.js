$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor Back-end", "Desenvolvedor Front-end", "Freelancer"],
        //  strings:["Desenvolvedor Back-end", "Desenvolvedor Front-end", "Analista de Dados", "Freelancer"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Desenvolvedor Back-end", "Desenvolvedor Front-end", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    let urlGit = "https://raw.githubusercontent.com/AlarconVinicius/Portfolio-Alarcon-Vinicius/main/arq_json/projetos.json";

    let http = new XMLHttpRequest();
    http.open('get', urlGit, true);
    http.send();
    http.onload = function(){
        if(this.readyState = 4 && this.status == 200){
            let projects = JSON.parse(this.responseText);
            // console.log(projects);
            let output = "";
            for(let project of projects){

                output += `
                    <div class="card">
                        <div class="box">
                            <div class="text">${project.titulo}</div>
                            <p>${project.descricao}</p>
                            <a href="${project.link}" target="_blank" class="btn-outline-green">Ver Mais</a>
                        </div>
                    </div>
                `;
            }
            document.querySelector("#projects-card").innerHTML = output;
        }
        $('.carousel').owlCarousel({
            margin:20,
            loop:true,
            autoplayTimeOut:2000,
            autoplayHoverPauser:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false
                }
            }
        });
    }
    
});
