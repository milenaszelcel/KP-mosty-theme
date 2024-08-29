// Toggle the menu open and close when on mobile
export default function menuOpen() {
  const burgerButton = document.querySelector('.burger-button')
  burgerButton.addEventListener('click', function () {
    document.body.classList.toggle('head-open')
  })
}
