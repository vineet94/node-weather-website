const form = document.querySelector('form')
const formInput = document.querySelector('input')
const errorMsg = document.querySelector('#errorMessage')
const responseMessage = document.querySelector('#response')

form.addEventListener('submit', (e) => {
    errorMsg.textContent = `Loading...`
    responseMessage.textContent = ``
    e.preventDefault()
    fetch(`http://localhost:3000/weather?address=${formInput.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorMsg.textContent = data.error
            }
            else {
                errorMsg.textContent = data.location
                responseMessage.textContent = data.forecast
            }
        })
    })
})