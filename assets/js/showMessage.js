export default function checkStatus() {
  const url = new URLSearchParams(window.location.search)
  const button = document.getElementsByClassName('close-button')[0]

  const isSend = url.get('send')

  const elements = document.getElementsByClassName('notification')
  if (isSend === 'true') {
    setTimeout(() => elements[0].classList.add('show'), 100)
  }
  button.addEventListener('click', function () {
    elements[0].classList.remove('show')
    url.remove('send')
  })
}
