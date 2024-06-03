document.getElementById('leeftijdchecken').addEventListener('click', () => {
    let toegangsleeftijd = 18;
    let leeftijd = parseInt(document.getElementById('leeftijdinvullen').value);

    if (!leeftijd || isNaN(leeftijd)) {
        document.getElementById('bericht').textContent = 'Voer een geldige leeftijd in.';
    } else if (leeftijd >= toegangsleeftijd) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('bericht').textContent = 'Helaas, je bent nog niet oud genoeg.';
    }
});
//isNAN > bron:https://www.w3schools.com/jsref/jsref_isnan.asp
//parseInt > bron: https://www.w3schools.com/jsref/jsref_parseint.asp
