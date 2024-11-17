const submitButton = document.querySelector("button");
submitButton.addEventListener("click", generateString);

function generateString(event) {
    event.preventDefault()
    const minprice = document.getElementById("min").value;
    const maxprice = document.getElementById("max").value;
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
    const colors = [];
    const types = [];
    if(electric||gas||hybrid)
    {
        if(electric)
            types.push("Electric");
        if(gas)
            types.push("Gas");
        if(hybrid)
            types.push("Hybrid");
    }
    if(red||black||white||grey||brown)
    {
        if(red)
            colors.push("Red");
        if(black)
            colors.push("black");
        if(white)
            colors.push("White");
        if(grey)
            colors.push("Grey");
        if(brown)
            colors.push("Brown");
    }
    console.log(output);
    return output;
    
} 
