let initProduct = [
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png", "iPhone 14 Pro Max 256GB", 42000000, 21000000, -19),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png", "iPhone 14 Pro Max 256GB", 42000000, 21000000, -19),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png", "iPhone 14 Pro Max 256GB", 42000000, 21000000, -19),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png", "iPhone 14 Pro Max 256GB", 42000000, 21000000, -19),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png", "iPhone 14 Pro Max 256GB", 42000000, 21000000, -19)
];
function showInitProduct() {
    let content = "";
    for (let i = 0; i < initProduct.length; i++) {
        content +=`<div class="product">
                <img src="${initProduct[i].img}" alt="">
                <div class="productText">
                  <ul>
                    <li>${initProduct[i].name}</li>
                    <li><a href="">${initProduct[i].priceOrigin}<sup>đ</sup></a><span>${initProduct[i].discount}</span></li>
                    <li>${initProduct[i].price}<sup>đ</sup></li>
                    <li>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </li>
                  </ul>  
                </div>
            </div>`
    }
    document.getElementById("displayProduct").innerHTML = content;
}
showInitProduct();
