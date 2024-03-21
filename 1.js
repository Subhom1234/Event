
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx6EL6jdLqR9CbgEXxqyVR3Lvgo58UrAu6OMgTY_FVrVBSWxmCRIQRStFegHZ2MrSTVSQ/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
      msg.innerHTML = "Message sent successfully"
      // Open a new window/tab with a specified URL in the current window/tab
window.open('2.html', '_self');
      
      setTimeout(function(){
      msg.innerHtml = ""
      },500)
      form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })