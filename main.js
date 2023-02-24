function getAPlayer() {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (this.status === 200) {

            const res = JSON.parse(this.responseText);

            let response = '';

            for (var i=1; i<=5; i++) {
                let id = getRandomID();
                let deck = getRandomDeck()
                if ( deck == "trefl") {
                    response += getTreflCards(res, id);
                } else if (deck == "karo") {
                    response += getKaroCards(res, id);
                } else if (deck == "kier") {
                    response += getKierCards(res, id);
                } else if (deck == "pik") {
                    response += getPikCards(res, id);
                }
            }

            document.querySelector('.response_a').innerHTML = response; 
        }
    }

    xhr.open('GET', 'data_02_01.json', true);
    xhr.send();
}
function getBPlayer() {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (this.status === 200) {

            const res = JSON.parse(this.responseText);

            let response = '';

            for (var i=1; i<=5; i++) {
                let id = getRandomID();
                let deck = getRandomDeck()
                if ( deck == "trefl") {
                    response += getTreflCards(res, id);
                } else if (deck == "karo") {
                    response += getKaroCards(res, id);
                } else if (deck == "kier") {
                    response += getKierCards(res, id);
                } else if (deck == "pik") {
                    response += getPikCards(res, id);
                }
            }

            document.querySelector('.response_b').innerHTML = response; 
        }
    }

    xhr.open('GET', 'data_02_01.json', true);
    xhr.send();
}

function getRandomID() {
    let x = Math.round(Math.random()*12);
    return  x;
    
}

function getRandomDeck() {
    let items = ["trefl", "karo", "kier", "pik"];
    let rand = Math.round(Math.random()*3);
    return items[rand];
}

function getTreflCards(res, id) {
    let response = "";
    let item = res.trefl[id];
    response += `
        <div class="outline">
            <div class="top">
                <span>${item.value}</span>
                <span>&clubs;</span>
            </div>
        <h1>&clubs;</h1>
        <div class="bottom">
            <span>&clubs;</span>
            <span>${item.value}</span></div>
        </div>`;
    return response;
}

function getKaroCards(res, id) {
    let response = "";
    let item = res.karo[id];
    response += `
        <div class="outline karo">
            <div class="top">
                <span>${item.value}</span>
                <span>&diams;</span>
            </div>
        <h1>&diams;</h1>
        <div class="bottom">
            <span>&diams;</span>
            <span>${item.value}</span></div>
        </div>`;
    return response;
}
function getKierCards(res, id) {
    let response = "";
    let item = res.kier[id];
    response += `
    <div class="outline kier">
    <div class="top">
        <span>${item.value}</span>
        <span>&hearts;</span>
    </div>
    <h1>&hearts;</h1>
    <div class="bottom">
        <span>&hearts;</span>
        <span>${item.value}</span></div>
    </div>`;
    return response;
}
function getPikCards(res, id) {
    let response = "";
    let item = res.pik[id];
    response += `
    <div class="outline pik">
    <div class="top">
        <span>${item.value}</span>
        <span>&spades;</span>
    </div>
    <h1>&spades;</h1>
    <div class="bottom">
        <span>&spades;</span>
        <span>${item.value}</span></div>
    </div>`;
    return response;
}