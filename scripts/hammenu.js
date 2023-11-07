const hamButton = document.querySelector("#hamButton");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
})