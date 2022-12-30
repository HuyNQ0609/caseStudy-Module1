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
    addTr.innerHTML = '<tr><td style="display: flex; align-items: center"><img style="width: 70px" src="' + productImg + '" alt=""><span class="cartTitleName">' + productName + '</span></td><td><p><span class="cartPrice">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none" type="number" value="1" min="1"></td><td style="cursor: pointer"><span class="delete">Hủy</span></td></tr>';
    let cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
}
cartTotal();
function cartTotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let priceT = document.querySelector(".cartPriceT");
    let total = 0;
    let sumAll = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("tbody input").value;
        let productPrice = cartItem[i].querySelector(".cartPrice").innerHTML;
        sumAll = inputValue * productPrice;
        total = Math.round(sumAll);
    }
    priceT.innerHTML = (total * 1000).toLocaleString("de-DE");
    let cartTotalX = document.querySelector(".resultTotal");
    cartTotalX.innerHTML = (total * 1000).toLocaleString("de-DE");
    deleteCartItem();
    inputChange();
}
function deleteCartItem() {
    let btnItem = document.querySelectorAll(".delete");
    for (let i = 0; i < btnItem.length; i++) {
        btnItem.addEventListener("click",function(event) {
            let deleteBtn = event.target;
            let cartParent = deleteBtn.parentElement;
            cartParent.remove();
            cartTotal()
        })
    }
}
function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change",function (){
            cartTotal();
        })
    }
}
