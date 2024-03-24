
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx6EL6jdLqR9CbgEXxqyVR3Lvgo58UrAu6OMgTY_FVrVBSWxmCRIQRStFegHZ2MrSTVSQ/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
      msg.innerHTML = "Registration successful"
      // Open a new window/tab with a specified URL in the current window/tab
document.getElementById('cover').style.display='none';
document.getElementById('link').style.display='block';
      
      setTimeout(function(){
      msg.innerHtml = ""
      },500)
      form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
