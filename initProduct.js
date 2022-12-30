let initProduct = [
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s901_galaxys22_front_pinkgold_211122.jpg", "Samsung Galaxy S22(8GB - 128GB)", "21.990.000", "12.990.000", "-41%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg", "Samsung Galaxy A73 256GB", "12.990.000", "10.590.000", "-18%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg", "Samsung Galaxy S22 Ultra(8GB - 128GB)", "30.990.000", "20.190.000", "-35%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg", "Samsung Galaxy Z Flip4 128GB", "23.990.000", "15.990.000", "-33%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg", "Samsung Galaxy Z Fold4", "40.990.000", "31.190.000", "-24%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg", "Samsung Galaxy Z Fold3 5G", "41.990.000", "21.990.000", "-48%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png", "iPhone 14 Pro Max 128GB", "34.990.000", "31.990.000", "-9%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg", "iPhone 13 Pro Max 128GB", "34.990.000", "27.790.000", "-21%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg", "iPhone 13 128GB", "24.990.000", "18.890.000", "-24%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg", "iPhone 14 128GB", "24.990.000", "20.990.000", "-16%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/m/pms_1650393946.86423132.png", "Xiaomi Redmi 10A", "2.890.000", "2.300.000", "-20%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame37917-640x640_1_.png", "Xiaomi Redmi Note 11S", "6.690.000", "5.790.000", "-13%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-redmi-10c-1-002.jpg", "Xiaomi Redmi 10C 4GB 128GB", "3.890.000", "3.330.000", "-14%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo_reno6.jpg", "OPPO Reno6 Z 5G", "9.490.000", "6.790.000", "-28%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-08-05_09-40-15.jpg", "OPPO Reno8 Z", "10.490.000", "9.190.000", "-12%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a95_-_en_-_cmyk.jpg", "6.990.000", "5.390.000", "", "-23%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame3935-640x640.png", "Realme C35 4GB 64GB", "4.290.000", "3.690.000", "-14%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_2__3_6.png", "Realme 9i 6GB 128GB", "6.490.000", "4.790.000", "-26%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9_ro_plus.png", "Realme 9 Pro Plus", "9.900.000", "7.990.000", "-20%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-c30s-den-glr--009.jpg", "Realme C11 (2021)", "2.490.000", "2.090.000", "-16%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-xanh_2.jpg", "Xiaomi 12T Pro", "16.990.000", "16.090.000", "-5%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12-pro_arenamobiles.jpg", "Xiaomi 12T Pro", "27.990.000", "20.990.000", "-25%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_168_1__1.png", "AirPods Pro 2021 MagSafe", "6.990.000", "4.690.000", "-33%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_111_5_.png", "AirPods Pro 2022", "6.990.000", "6.290.000", "-10%"),
    new Product("https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_182_1.png", "Samsung Galaxy Buds Pro", "4.990.000", "1.990.000", "-60%"),
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
