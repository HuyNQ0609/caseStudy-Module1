let initProduct = [
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s901_galaxys22_front_pinkgold_211122.jpg", "Samsung Galaxy S22(8GB - 128GB)", 21990000, 12990000, "-41%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg", "Samsung Galaxy A73 256GB", 12990000, 10590000, "-18%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg", "Samsung Galaxy S22 Ultra(8GB - 128GB)", 30990000, 20190000, "-35%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg", "Samsung Galaxy Z Flip4 128GB", 23990000, 15990000, "-33%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg", "Samsung Galaxy Z Fold4", 40990000, 31190000, "-24%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg", "Samsung Galaxy Z Fold3 5G", 41990000, 21990000, "-48%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png", "iPhone 14 Pro Max 128GB", 34990000, 31990000, "-9%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg", "iPhone 13 Pro Max 128GB", 34990000, 27790000, "-21%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg", "iPhone 13 128GB", 24990000, 18890000, "-24%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg", "iPhone 14 128GB", 24990000, 20990000, "-16%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/m/pms_1650393946.86423132.png", "Xiaomi Redmi 10A", 2890000, 2300000, "-20%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame37917-640x640_1_.png", "Xiaomi Redmi Note 11S", 6690000, 5790000, "-13%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-redmi-10c-1-002.jpg", "Xiaomi Redmi 10C 4GB 128GB", 3890000, 3330000, "-14%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo_reno6.jpg", "OPPO Reno6 Z 5G", 9490000, 6790000, "-28%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-08-05_09-40-15.jpg", "OPPO Reno8 Z", 10490000, 9190000, "-12%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a95_-_en_-_cmyk.jpg", "OPPO A95 5GB", 6990000, 5390000, "-23%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame3935-640x640.png", "Realme C35 4GB 64GB", 4290000, 3690000, "-14%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_2__3_6.png", "Realme 9i 6GB 128GB", 6490000, 4790000, "-26%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9_ro_plus.png", "Realme 9 Pro Plus", 9900000, 7990000, "-20%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-c30s-den-glr--009.jpg", "Realme C11 (2021)", 2490000, 2090000, "-16%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-xanh_2.jpg", "Xiaomi 12T Pro", 16990000, 16090000, "-5%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12-pro_arenamobiles.jpg", "Xiaomi 12T Pro", 27990000, 20990000, "-25%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_168_1__1.png", "AirPods Pro 2021 MagSafe", 6990000, 4690000, "-33%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_111_5_.png", "AirPods Pro 2022", 6990000, 6290000, "-10%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_182_1.png", "Samsung Galaxy Buds Pro", 4990000, 1990000, "-60%")
];
function showInitProduct() {
    let content = "";
    for (let i = 0; i < initProduct.length; i++) {
        content +=`<div class="product">
                <img class="imgPro" src="${initProduct[i].img}" alt="">
                <div class="productText">
                  <ul>
                    <li class="proName">${initProduct[i].name}</li>
                    <li><a href="">${initProduct[i].priceOrigin}<sup>đ</sup></a><span>${initProduct[i].discount}</span></li>
                    <li><span class="proPrice">${initProduct[i].price}</span><sup>đ</sup></li>
                    <li><button id="btnClick"><i class="fa-solid fa-cart-shopping"></i></button></li>
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
