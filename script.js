$(document).ready(onReady);


let apPoints = 100;
let hpPoints = 100;


// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    //testing the onReady
    console.log('All ready in the console')
    $('.attack-btn.arcane-sceptre').on('click', arcaneButton)
    $('.attack-btn.entangle').on('click', entangleButton)
    $('.attack-btn.dragon-blade').on('click', dragonBladeButton)
    $('.attack-btn.star-fire').on('click', starFireButton)
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


//Button for arcane-sceptre button is clicked
//apPoints decrease, hpPoints increase

//Creating the arcaneButton to decrease points
function arcaneButton() {
    console.log('The arcaneButton is created');
    $('#ap-value').text(apPoints);
    $('#hp-value').text(hpPoints);
    apPoints -= 12;
    hpPoints -= 14; 
}

//Creating entangleButton to decrease points
function entangleButton() {
    console.log('The entangleButton is created');
    $('#ap-value').text(apPoints);
    $('#hp-value').text(hpPoints);
    apPoints -= 23;
    hpPoints -= 9; 
}

//Creating dragonBladeButton to decrease points
function dragonBladeButton() {
    console.log('The dragonBladeButton is created');
    $('#ap-value').text(apPoints);
    $('#hp-value').text(hpPoints);
    apPoints -= 38;
    hpPoints -= 47; 
}

//Creating the starFireButton to decrease points
function starFireButton() {
    console.log('The starFireButton is created');
    $('#ap-value').text(apPoints);
    $('#hp-value').text(hpPoints);
    apPoints -= 33;
    hpPoints -= 25; 
}

