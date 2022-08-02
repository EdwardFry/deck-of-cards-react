export const apiCall = (deckMetaData, cards, setCards, setDeckMetaData, handleCheckAndSetSnap) => {
    var deck_id = deckMetaData.deck_id
    var newCards = cards

    if (deckMetaData.remaining == 0) {
      deck_id = "new"
      newCards = []
    }

    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then(data => {
          const newCard = data.cards[0]
          if (cards.length > 1) {
            handleCheckAndSetSnap(newCard, cards[cards.length - 1])
          }
          setCards([...newCards, newCard])
          setDeckMetaData({
            deck_id: data.deck_id,
            remaining: data.remaining
          })
        })
        .catch(err => {
          console.log("Unable to GET data from API, ", err)
        })
}

