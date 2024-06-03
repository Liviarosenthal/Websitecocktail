console.log("cocktail");
// Check of js werkt in de console 

// Const
const cocktails = {
    'Margarita': {
        image: 'images/icons8-cocktail-48.png',
        voedingswaarde: {
            alcohol: '10%',
            calorieën: '168',
            suiker: '10g'
        }
    },
    'Martini': {
        image: 'images/martini.png',
        voedingswaarde: {
            alcohol: '15%',
            calorieën: '160 kcal',
            suiker: '0,1g'
        }
    },
    'Pornstar Martini': {
        image: 'images/pornstar martini.png',
        voedingswaarde: {
            alcohol: '15%',
            calorieën: '200 kcal',
            suiker: '8g'
        }
    },
    'Mojito': {
        image: 'images/mojito.png',
        voedingswaarde: {
            alcohol: '15%',
            calorieën: '217 kcal',
            suiker: '23g'
        }
    },
};


// Functies
function showCocktail(cocktailName) {
    const infoDiv = document.getElementById('cocktail-info');
    const cocktail = cocktails[cocktailName];
    if (cocktail) {
        infoDiv.innerHTML =
            '<img src="' + cocktail.image + '" alt="' + cocktailName + '" width="100" height="100">' +
            '<h3>' + cocktailName + '</h3>' +
            '<p>Alcohol: ' + cocktail.voedingswaarde.alcohol + '</p>' +
            '<p>Calorieën: ' + cocktail.voedingswaarde.calorieën + '</p>' +
            '<p>Suiker: ' + cocktail.voedingswaarde.suiker + '</p>';
    }
}

// Event Listeners voor cocktails
document.getElementById('margarita').addEventListener('click', () => showCocktail('Margarita'));
document.getElementById('martini').addEventListener('click', () => showCocktail('Martini'));
document.getElementById('pornstar-martini').addEventListener('click', () => showCocktail('Pornstar Martini'));
document.getElementById('mojito').addEventListener('click', () => showCocktail('Mojito'));

// Sound effect als er geklikt wordt op een cocktail
const cocktailButtons = ['margarita', 'martini', 'pornstar-martini', 'mojito'];
cocktailButtons.forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        const sound = new Audio('images/achtergrondmuziek.mp3');
        sound.loop = true;
        sound.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    });
});
//for eacht > bron: https://www.w3schools.com/jsref/jsref_foreach.asp
//sound > bron: https://dev.to/colin-williams-dev/adding-sound-to-js-b3i





