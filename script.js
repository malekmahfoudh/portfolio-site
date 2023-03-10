let aboutButton = document.querySelector('#about-btn');
let portfolioButton = document.querySelector('#portfolio-btn');
let contactButton = document.querySelector('#contact-btn');
let aboutEl = document.querySelector(".about-container");
let portfolioEl = document.querySelector(".portfolio-container")
let contactEl = document.querySelector(".contact-container")

function toggleAboutSection() {
    if(aboutEl.style.display == "grid") {
        aboutEl.style.display = "none";
    } else {
        aboutEl.style.display = "grid";
    }
}

aboutButton.addEventListener('click', () => {
    toggleAboutSection()
    console.log('open about')
})

function togglePortfolioSection() {
    if (portfolioEl.style.display == "grid") {
        portfolioEl.style.display = "none";
    } else {
        portfolioEl.style.display = "grid";
    }
}

portfolioButton.addEventListener('click', () => {
    togglePortfolioSection()
    console.log('open portfolio')
})

function toggleContactSection() {
    if (contactEl.style.display == "flex") {
        contactEl.style.display = "none";
    } else {
        contactEl.style.display = "flex";
    }
}

contactButton.addEventListener('click', () => {
    toggleContactSection()
    console.log('open contact')
})





// drop down funktionalitet på varje knapp. Vid klick aktiveras en drop down med relevant info