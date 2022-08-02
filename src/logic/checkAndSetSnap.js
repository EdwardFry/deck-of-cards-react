export const checkAndSetSnap = (card1, card2, suitMatches, valueMatches, setSuitMatches, setValueMatches, setSnap) => {
    if (card1.suit == card2.suit) {
        setSnap({
        snap: true,
        type: "suit"
    })
        setSuitMatches(suitMatches + 1)
    }
    else if (card1.value == card2.value) {
        setSnap({
        snap: true,
        type: "value"
        })
        setValueMatches(valueMatches + 1)
    }
    else {
        setSnap({
        snap: false,
        type: ""
        })
    }
}
