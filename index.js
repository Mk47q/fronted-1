let up1 = document.querySelector(".up1")
let product = document.querySelector(".box-Product")
let imgup1 = document.querySelector(".img1")
up1.addEventListener("click", function() {
    imgup1.classList.toggle("deg-menu-img")
    if(product.style.display == "block"){
        product.style.display = "none"
    } else {
        product.style.display = "block"
    }
})
let up2 = document.querySelector(".up2")
let company = document.querySelector(".box-Company")
let imgup2 = document.querySelector(".img2")
up2.addEventListener("click", function() {
    imgup2.classList.toggle("deg-menu-img")
    if(company.style.display == "block"){
        company.style.display = "none"
    } else {
        company.style.display = "block"
    }
})
let up3 = document.querySelector(".up3")
let connect = document.querySelector(".box-Connect")
let imgup3 = document.querySelector(".img3")
up3.addEventListener("click", function() {
    imgup3.classList.toggle("deg-menu-img")
    if(connect.style.display == "block"){
        connect.style.display = "none"
    } else {
        connect.style.display = "block"
    }
})