function writeCards(list, word) {
    let cards = []
    for (let i = 0; i < list.length; i++) {
        cards.push("Thank you, " + list[i] + ", for the wonderful " + word + " gift!")
    }
    return cards
}

function countDown(number){
    for (let i = number; i >= 0; i--) { 
        console.log(i)
     }
}