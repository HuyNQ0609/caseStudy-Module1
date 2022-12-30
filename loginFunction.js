$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass("open")
        $(this).children("i").toggleClass("fa-regular fa-eye-slash fa-regular fa-eye");
        if($(this).hasClass("open")) {
            $(this).prev().attr("type", "text");
        } else {
            $(this).prev().attr("type", "password");
        }
    });
})

function changeWeb() {
    let name = document.getElementById("loginName").value;
    let email = document.getElementById("loginEmail").value;
    let phone = document.getElementById("loginPhone").value;
    let password = document.getElementById("loginPassword").value;
    if(name ==="Admin" && email ==="admin@gmail.com" && phone ==="123456" && password === "123456") {
        alert("Bạn đã đăng nhập thành công!");
        window.location.href = "webSellPhone.html";
    } else {
        alert("Đăng nhập không thành công!")
    }
}