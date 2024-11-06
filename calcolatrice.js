$(document).ready(function() {
    $("#somma").on("click", function(){
        // Ottieni i valori aggiornati degli input
        var a = parseFloat(document.getElementById("n1").value); // Converti in numero
        var b = parseFloat(document.getElementById("n2").value); // Converti in numero

        $("#risultato").text(`${a}+${b} = `)

        // Calcola la somma
        var somma = a + b;

        // Aggiungi il risultato al paragrafo
        $('#risultato').append(somma);
    })
})


$("#sottrazione").on("click", function(){
    // Ottieni i valori aggiornati degli input
    var a = parseFloat(document.getElementById("n1").value); // Converti in numero
    var b = parseFloat(document.getElementById("n2").value); // Converti in numero
    $('#risultato').text(`${a}-${b} = `)

    // Calcola la somma
    var sottrazione = a - b;

    // Aggiungi il risultato al paragrafo
    $('#risultato').append(sottrazione);
})

$("#divisione").on("click", function(){
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    $('#risultato').text(`${a}:${b} = `)
    var divisione = a/b;

    $('#risultato').append(divisione);
})

$("#moltiplicazione").on("click", function(){
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);

    $("#risultato").text(`${a}*${b} = `)

    var moltiplicazione = a*b;
    $("#risultato").append(moltiplicazione);
})

$("#sus").on("click", function(){
    var color = "#";
    var colorselection = ["A","B","C","D","E","F",1,2,3,4,5,6,7,8,9,0];

    for(let i = 0; i<6; i++){
        var j = Math.floor(Math.random()*colorselection.length)
        color += colorselection[j]
    }

    $("body").css("background-color", color)
})
function changecolor(){ 
    let color = document.getElementById('input').value;
    document.body.style.backgroundColor = color;
}
