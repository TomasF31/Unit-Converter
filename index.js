const metersToFeetResults = document.getElementById("metersToFeet-el")
const feetToMetersResults = document.getElementById("feetToMeters-el")
const litersToGallonsResults = document.getElementById("litersToGallons-el")
const gallonsToLitersResults = document.getElementById("gallonsToLiters-el")
const kilosToPoundsResults = document.getElementById("kilosToPounds-el")
const poundsToKilosResults = document.getElementById("poundsToKilos-el")

let input = document.getElementById("input-box")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
        convertFunction()
})

function convertFunction() {
        metersToFeet()
        feetToMeters()
        litersToGallons()
        gallonsToLiters()
        kilosToPounds()
        poundsToKilos()
}

const equals = "="

function metersToFeet() {
        let feet = input.value * 3.281
        metersToFeetResults.textContent = 
        `${input.value} meters ${equals} ${feet.toFixed(3)} feet`
}

function feetToMeters() {
        let meters = input.value / 3.281
        feetToMetersResults.textContent = 
        `${input.value} feet ${equals} ${meters.toFixed(3)} meters`
}

function litersToGallons() {
        let gallons = input.value * 0.264
        litersToGallonsResults.textContent = 
        `${input.value} liters ${equals} ${gallons.toFixed(3)} gallons`
}

function gallonsToLiters() {
        let liters = input.value / 0.264
        gallonsToLitersResults.textContent = 
        `${input.value} gallons ${equals} ${liters.toFixed(3)} liters`
}

function kilosToPounds() {
        let pounds = input.value * 2.204
        kilosToPoundsResults.textContent = 
        `${input.value} kilos ${equals} ${pounds.toFixed(3)} pounds`
}

function poundsToKilos() {
        let kilos = input.value / 2.204
        poundsToKilosResults.textContent = 
        `${input.value} pounds ${equals} ${kilos.toFixed(3)} kilos`
}