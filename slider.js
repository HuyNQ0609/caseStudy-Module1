let imageFeature = document.querySelector(".imgFeature");
let listImg = document.querySelectorAll(".listImage img");
let returnButton = document.querySelector(".return");
let nextButton = document.querySelector(".next");
let currentIndex = 0;
function updateImgByIndex(index) {
    document.querySelectorAll(".listImage div").forEach(item=>{
        item.classList.remove("active");
    })
    currentIndex = index;
    imageFeature.src = listImg[index].getAttribute("src");
    listImg[index].parentElement.classList.add("active");
}
listImg.forEach((imgElement, index) => {
    imgElement.addEventListener("click", () =>{
        imageFeature.style.opacity = '0';
        setTimeout(()=>{
            updateImgByIndex(index);
            imageFeature.style.opacity = '1';
        }, 400)
    })
})
returnButton.addEventListener("click", () =>{
    if(currentIndex === 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }
    imageFeature.style.animation = ''
    setTimeout(()=>{
        updateImgByIndex(currentIndex);
        imageFeature.style.animation = 'slideLeft 1s ease-in-out forward'}, 200);
})
nextButton.addEventListener("click", () =>{
    imageFeature.style.animation = ''
    if(currentIndex === listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    imageFeature.style.animation = ''
    setTimeout(()=>{
        updateImgByIndex(currentIndex);
        imageFeature.style.animation = 'slideRight 1s ease-in-out forward'}, 200);
})
updateImgByIndex(0);