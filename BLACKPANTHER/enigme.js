const envoyer = document.getElementById ('envoyer')
const popUp = document.getElementById ('popUp')
const conteneur = document.getElementById ('conteneur')
const suivant = document.getElementById ('conteneur').querySelector ('button')
const numEnigme = document.getElementById ('numEnigme').querySelector ('span')
const question = document.getElementById ('question')
const ennonce = document.getElementById ('ennonce')
const titreIndice = document.getElementById ('titreIndice')
const ennonceIndice = document.getElementById ('ennonceIndice')

envoyer.addEventListener ('click', function (){
    popUp.style.display = "block"
    conteneur.style.display = "flex"
})

suivant.addEventListener ('click', questionSuivant);

let etape = 2
function questionSuivant (){
numEnigme.textContent = etape
if (etape == 2) {
    question.textContent = "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :"
    ennonce.textContent = "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza"
    titreIndice.textContent = "Le savais-tu"
    ennonceIndice.classList.add ('verdana')
    ennonceIndice.innerHTML = "Plusieurs sources s\’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l\’alphabet ? "
    ennonce.classList.remove ('wakanda', 'pinky', 'large')
    popUp.style.display = "none"
    conteneur.style.display = "none"
}
if (etape == 3) {
    popUp.style.display = "none"
    conteneur.style.display = "none"
    question.textContent = "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?"
    ennonce.textContent = "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010"

    ennonceIndice.innerHTML = "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."

    document.getElementById ('conteneur').querySelector ('p').innerHTML = "TON INITIATION EST TERMINE"
    suivant.textContent = "Revenir à l'acceuil"
    suivant.addEventListener ('click', function(){
        window.location.href = "home.html"
    })
}

etape ++;
}