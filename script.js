const submitButton = document.querySelector("button");
submitButton.addEventListener("click", generateString);

function generateString(event) {
    event.preventDefault()
    const price = document.getElementById("price").value;
    const mpg = document.getElementById("mpg").value;
    const electric = document.getElementById("Electric").checked;
    const gas = document.getElementById("Gas").checked;
    const hybrid = document.getElementById("Hybrid").checked;
    const brand = document.getElementById("Brand").value;
    const red = document.getElementById("Red").checked;
    const black = document.getElementById("Black").checked;
    const white = document.getElementById("White").checked;
    const grey = document.getElementById("Grey").checked;
    const brown = document.getElementById("Brown").checked;
    let output = "Price: $ " + price + " " + "Mpg: " + mpg + " " + "Brand: " + brand + " ";
    if(electric||gas||hybrid)
    {
        output += "Types: ";
        if(electric)
            output += "electric, ";
        if(gas)
            output += "gas, ";
        if(hybrid)
            output += "hybrid ";
    }
    if(red||black||white||grey||brown)
    {
        output += "Colors: ";
        if(red)
            output += "red, ";
        if(black)
            output += "black, ";
        if(white)
            output += "white, ";
        if(grey)
            output += "grey, ";
        if(brown)
            output += "brown ";
    }
    console.log(output);
    return output;
    
} 