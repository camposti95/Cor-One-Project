const form = document.getElementById('contact-form')
const sentMessage = document.getElementById('sent-message')
const errorMessage = document.getElementById('error-message')

const fName = document.getElementById('fname')
const fNameLabel = document.getElementById('fname-label')
const lName = document.getElementById('lname')
const lNameLabel = document.getElementById('lname-label')
const email = document.getElementById('email')
const emailLabel = document.getElementById('email-label')
const mobile = document.getElementById('mobile')
const button = document.querySelector('.submit-button')
const textArea = document.getElementById('message')
const textAreaLabel = document.getElementById('textarea-label')

let messages = []

form.addEventListener('submit', function(e) {
    e.preventDefault

    const firstName = fName.value
    const lastName = lName.value
    const userEmail = email.value
    const textAreaValue = textArea.value

    if(firstName == "") {
        fName.style.borderColor = '#FB743E'
        fNameLabel.style.color = '#FB743E'
        messages.push('First Name is required')
    } else if (firstName.length > 0){
        fName.style.borderColor = 'black'
        fNameLabel.style.color = 'white'
        messages = []
    }
    if(lastName == "") {
        lName.style.borderColor = "#FB743E"
        lNameLabel.style.color = "#FB743E"
        messages.push('Last Name is required')
    } else if (lastName.length > 0){
        lName.style.borderColor = "black"
        lNameLabel.style.color = "white"
        messages = []
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        email.style.borderColor = "#FB743E"
        emailLabel.style.color = "#FB743E"
        messages.push('Email is required')
    } else {
        email.style.borderColor = "black"
        emailLabel.style.color = "white"
        messages = []
    }
    if(textAreaValue == "") {
        textArea.style.borderColor = "#FB743E"
        textAreaLabel.style.color = "#FB743E"
        messages.push('Message is required')
    } else {
        textArea.style.borderColor = "black"
        textAreaLabel.style.color = "white"
        messages = []
    }


    if(messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(' | ')
        setTimeout(() => {
            errorMessage.style.display = 'none'
        }, 3000);
    } else {
        e.preventDefault()
        sentMessage.style.display = 'block'
        setTimeout(() => {
            sentMessage.style.display = 'none'
        }, 5000);
    }
})