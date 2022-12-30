const btn = document.querySelectorAll("#btnClick")
btn.forEach(function(button) {
    button.addEventListener("click", function(event) {
        let btnItem = event.target;
        let product = btnItem.parentElement.parentElement.parentElement.parentElement.parentElement;
        let productImg = product.querySelector(".imgPro").src;
        let productName = product.querySelector(".proName").innerText;
        let productPrice = product.querySelector(".proPrice").innerText;
        addCart(productImg, productName, productPrice);
    })
});
function addCart(productImg, productName, productPrice) {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productCart = document.querySelectorAll(".cartTitleName");
        if (productCart[i].innerHTML === productName) {
            alert("Sản phẩm bạn vừa chọn đã có trong giỏ hàng");
            return;
        }
    }
    let addTr = document.createElement("tr");
    addTr.innerHTML = `<tr>
                            <td style="display: flex; align-items: center"><img style="width: 70px" src="${productImg}" alt=""><span class="cartTitleName">${productName}</span></td>
                            <td><p><span class="cartPrice">${productPrice}</span><sup>đ</sup></p></td>
                            <td><input class="totalInput" style="width: 30px; outline: none" type="number" value="1" min="1"></td>
                            <td style="cursor: pointer"><span class="delete">Hủy</span></td>
                       </tr>`;
    let cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
    cartTotal();
    deleteCartItem();
    inputChange()
}

function cartTotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let sumAll = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector(".totalInput").value;
        let productPrice = cartItem[i].querySelector(".cartPrice").innerHTML;
        sumAll += Number(inputValue) * Number(productPrice);
    }
    let cartTotal = document.querySelector("form div span");
    cartTotal.innerHTML = sumAll.toLocaleString("de-DE");
}
function deleteCartItem() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let deleteCart = document.querySelectorAll(".delete");
        deleteCart[i].addEventListener("click",function(event) {
            let deleteBtn = event.target;
            let cartParent = deleteBtn.parentElement.parentElement;
            cartParent.remove();
            cartTotal()
        })
    }
}
function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector(".totalInput");
        inputValue.addEventListener("change",function (){
            cartTotal();
        })
    }
}
let cartTimes = document.querySelectorAll(".fa-circle-xmark");
let cartShow = document.querySelector(".fa-shopping-cart");
cartShow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0";
})
