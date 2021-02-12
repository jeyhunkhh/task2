let addForm = document.querySelector(".add-form");
let toList = document.querySelector(".to-list");
var items = document.querySelectorAll(".item")

addForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(this.firstElementChild.value.trim() == ""){
        return
    };
    let div = document.createElement("div");
    div.className ="d-flex item align-items-center mb-3";
    let firstSpan = document.createElement("span");
    firstSpan.className = "option-input radio";
    let secondSpan = document.createElement("span");
    secondSpan.className = "label-text";
    secondSpan.innerText = this.firstElementChild.value;
    div.append(firstSpan,secondSpan)
    toList.append(div)
    items = document.querySelectorAll(".item")
    this.firstElementChild.value = ""
    //  toList.innerHTML += `<div class="d-flex item align-items-center mb-3">
    //                         <span class="option-input radio "></span>
    //                         <span class="label-text">${this.firstElementChild.value}</span>
    //                     </div>`

    // items.forEach((item)=>{
    //     item.firstElementChild.addEventListener("click", function(){
    //         // this.classList.replace("active","test")
    //         this.classList.toggle("active")
    //         this.nextElementSibling.classList.toggle("active")
    //     })
    // })
})

items.forEach((item)=>{
    item.firstElementChild.addEventListener("click", function(){
        // this.classList.replace("active","test")
        this.classList.toggle("active")
        this.nextElementSibling.classList.toggle("active")
    })
})

let openIcon = document.querySelector(".menu .open-icon")
let sidebar = document.querySelector(".sidebar")
let ulList = document.querySelector(".menu ul")

openIcon.addEventListener("click",function(){
    sidebar.classList.remove("close")
    ulList.classList.add("flex-box")
})
