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
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


//Button for arcane-sceptre button is clicked
//apPoints decrease, hpPoints increase

function arcaneButton() {
    console.log('The arcaneButton is created');
    $('#ap-value').text(apPoints);
    $('#hp-value').text(hpPoints);
    apPoints -= 12;
    hpPoints -= 14; 
}

