// let addForm = document.querySelector(".add-form");
// let toList = document.querySelector(".to-list");
// var items = document.querySelectorAll(".item")

// addForm.addEventListener("submit", function(e){
//     e.preventDefault();
//     if(this.firstElementChild.value.trim() == ""){
//         return
//     };
//     let div = document.createElement("div");
//     div.className ="d-flex item align-items-center mb-3";
//     let firstSpan = document.createElement("span");
//     firstSpan.className = "option-input radio";
//     let secondSpan = document.createElement("span");
//     secondSpan.className = "label-text";
//     secondSpan.innerText = this.firstElementChild.value;
//     div.append(firstSpan,secondSpan)
//     toList.append(div)
//     items = document.querySelectorAll(".item")
//     this.firstElementChild.value = ""
//     //  toList.innerHTML += `<div class="d-flex item align-items-center mb-3">
//     //                         <span class="option-input radio "></span>
//     //                         <span class="label-text">${this.firstElementChild.value}</span>
//     //                     </div>`

//     // items.forEach((item)=>{
//     //     item.firstElementChild.addEventListener("click", function(){
//     //         // this.classList.replace("active","test")
//     //         this.classList.toggle("active")
//     //         this.nextElementSibling.classList.toggle("active")
//     //     })
//     // })
// })

// items.forEach((item)=>{
//     item.firstElementChild.addEventListener("click", function(){
//         // this.classList.replace("active","test")
//         this.classList.toggle("active")
//         this.nextElementSibling.classList.toggle("active")
//     })
// })

// let openIcon = document.querySelector(".menu .open-icon")
// let sidebar = document.querySelector(".sidebar")
// let ulList = document.querySelector(".menu ul")
// let closeIcon = document.querySelector(".sidebar .close-icon")

// openIcon.addEventListener("click",function(){
//     sidebar.classList.remove("close")
//     ulList.classList.add("flex-box")
// })

// closeIcon.addEventListener("click",function(){
//     sidebar.classList.add("close")
//     ulList.classList.remove("flex-box")
// })

// let accordion = document.querySelectorAll(".accordion")

// accordion.forEach(item=>{
//     item.addEventListener("click",function(){
//         if(this.nextElementSibling.style.display == "none"){
//             this.nextElementSibling.style.display = "block"
//             this.classList.add("act")
//             this.firstElementChild.classList.replace("fa-plus","fa-minus")
//             accordion.forEach(e=>{
//                 if(e !== this){
//                     e.classList.remove("act")
//                     e.nextElementSibling.style.display = "none"
//                     e.firstElementChild.classList.replace("fa-minus","fa-plus")
//                 }
//             })
//         }else{
//             this.classList.remove("act")
//             this.nextElementSibling.style.display = "none"
//             this.firstElementChild.classList.replace("fa-minus","fa-plus")
//         }       
//     })
// })


$(function(){
    $(window).on("load", function () {
        $(".loader-image").fadeOut("hide");
      });

    $(document).on("scroll",window,function(){
        if($(window).scrollTop() > 100){
           $("#navbar-menu").css({
            "position": "fixed",
            "background-color": "rgb(238, 238, 238)"
           })
        }else{
            $("#navbar-menu").css({
                "position": "absolute",
                "background-color": "transparent"
               })
        }
    })

    if($(window).scrollTop() >100){
        $("#navbar-menu").css({
            "position": "fixed",
            "background-color": "rgb(238, 238, 238)"
        })
    };

    if($("#portfolio").length){
        console.log("work")
        $('#portfolio .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })
    }

    if($("#countTo").length){
        $('.timer').countTo();
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          $(".back-to-top span").addClass('show');
        } else {
            $(".back-to-top span").removeClass('show');
        }
      });
      
      $(".back-to-top span").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

    new WOW().init(); 
})
$(window).on("load", function () {
    $(".loader-image").fadeOut("slow");
  });
