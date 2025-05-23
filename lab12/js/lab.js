//Lab 12
// Author: Siyan Li
// Date: 05/22/2025

//Takes a string as an argument
function sortGod(str) {
//Counts the letters in str and assigns it to a variable length
    const length = str.length;
//Get the remainder with 4
    const mod = length % 4;
//Create a conditional that will return one of four gods in Warhammer40k depending on whether the value of mod is 0, 1, 2, or 3
    if (mod === 0) {
        return "Khorne";
    } else if (mod === 1) {
        return "Tzeentch";
    } else if (mod === 2) {
        return "Nurgle";
    } else {
        return "Slaanesh";
    }
}

// Create a button
$(document).ready(function () {
    $("#button").click(function () {
        const name = $("#input").val();
        const god = sortGod(name);
        $("#output").append('<p class=god-energy>The Sorting Pray has sorted you into <strong>' + god + '</strong>!</p>');
    });
});