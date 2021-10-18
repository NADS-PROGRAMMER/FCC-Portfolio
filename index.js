"use strict"

const navLink = document.getElementsByClassName('nav-link');

navLink.item(0).addEventListener('click', (evt) => {

    evt.preventDefault()

    document.querySelector('#welcome-section').scrollIntoView({behavior: "smooth"})
})

navLink.item(1).addEventListener('click', (evt) => {

    evt.preventDefault()

    document.querySelector('#projects').scrollIntoView({behavior: "smooth"})
})

navLink.item(2).addEventListener('click', (evt) => {

    evt.preventDefault()

    document.querySelector('#contacts').scrollIntoView({behavior: "smooth"})
})