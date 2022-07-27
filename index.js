let min = 15
let sec = 59
let scoreHome = 0
let scoreGuest = 0
let secEl = document.getElementById("second")
let minEl = document.getElementById("minute")
let counterTime = document.getElementById("watchstop")
let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let startedGame = false
let period = 1
let periodoneEl = document.getElementById("period1")
let periodtwoEl = document.getElementById("period2")
let periodthreeEl = document.getElementById("period3")
let periodfourEl = document.getElementById("period4")

function setNewPeriod() {
    if (startedGame) {
        switch (period) {
            case 1:
                periodoneEl.style.border = "solid green 3px"
                periodoneEl.style.backgroundColor = "yellowgreen"
                if (period == 1) {
                    period += 1
                } else {
                    period = 0
                }
                break;

            case 2:
                periodtwoEl.style.border = "solid green 3px"
                periodtwoEl.style.backgroundColor = "yellowgreen"
                periodoneEl.style.border = "solid black 2px"
                periodoneEl.style.backgroundColor = "coral"
                if (period == 2) {
                    period += 1
                } else {
                    period = 0
                }
                break;

            case 3:
                periodthreeEl.style.border = "solid green 3px"
                periodthreeEl.style.backgroundColor = "yellowgreen"
                periodtwoEl.style.border = "solid black 2px"
                periodtwoEl.style.backgroundColor = "coral"
                if (period == 3) {
                    period += 1
                } else {
                    period = 0
                }
                break;

            case 4:
                periodfourEl.style.border = "solid green 3px"
                periodfourEl.style.backgroundColor = "yellowgreen"
                periodthreeEl.style.border = "solid black 2px"
                periodthreeEl.style.backgroundColor = "coral"
                if (period == 4) {
                    period += 1
                } else {
                    period = 0
                }
                break;
        } {}

    }
}

function startGame() {
    minEl.textContent = min
    counterTime.style.color = "yellowgreen"
    counterTime.style.textShadow = "green"
    homeScoreEl.style.color = "yellowgreen"
    homeScoreEl.style.textShadow = "green"
    guestScoreEl.style.color = "yellowgreen"
    guestScoreEl.style.textShadow = "green"
    startedGame = true
    periodoneEl.style.border = "solid green 3px"
    periodoneEl.style.backgroundColor = "yellowgreen"
}

function addOneHome() {

    if (startedGame) {
        scoreHome += 1
        homeScoreEl.textContent = scoreHome
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid darkorange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid darkorange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }

}

function addTwoHome() {
    if (startedGame) {
        scoreHome += 2
        homeScoreEl.textContent = scoreHome
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid orange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid orange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }

}

function addThreeHome() {
    if (startedGame) {
        scoreHome += 3
        homeScoreEl.textContent = scoreHome
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid orange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid orange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }

}

function addOneGuest() {
    if (startedGame) {
        scoreGuest += 1
        guestScoreEl.textContent = scoreGuest
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid orange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid orange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }

}

function addTwoGuest() {
    if (startedGame) {
        scoreGuest += 2
        guestScoreEl.textContent = scoreGuest
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid orange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid orange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }
}

function addThreeGuest() {
    if (startedGame) {
        scoreGuest += 3
        guestScoreEl.textContent = scoreGuest
        if (scoreHome > scoreGuest) {
            homeScoreEl.style.border = "solid orange 3px"
            guestScoreEl.style.border = "solid coral 3px"
        } else {
            guestScoreEl.style.border = "solid orange 3px"
            homeScoreEl.style.border = "solid coral 3px"
        }
    }

}

function resetAll() {
    secEl.textContent = "00"
    minEl.textContent = "00"
    counterTime.style.color = "lightgrey"
    counterTime.style.textShadow = "slategrey"

    scoreHome = 0
    scoreGuest = 0

    homeScoreEl.textContent = 0
    homeScoreEl.style.color = "lightgrey"
    homeScoreEl.style.textShadow = "slategrey"
    homeScoreEl.style.border = "solid black 3px"

    guestScoreEl.textContent = 0
    guestScoreEl.style.color = "lightgrey"
    guestScoreEl.style.textShadow = "slategrey"
    guestScoreEl.style.border = "solid black 3px"

    periodoneEl.style.border = "solid black 2px"
    periodoneEl.style.backgroundColor = "coral"
    periodtwoEl.style.border = "solid black 2px"
    periodtwoEl.style.backgroundColor = "coral"
    periodthreeEl.style.border = "solid black 2px"
    periodthreeEl.style.backgroundColor = "coral"
    periodfourEl.style.border = "solid black 2px"
    periodfourEl.style.backgroundColor = "coral"
    period = 1 /*cambisr*/
    startedGame = false
}