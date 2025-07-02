function renderSinglePicture(i, element) {
    return /*html*/ `
    <img class="balls" src='${element.path}' alt='${element.alt}' onclick="openViewCard('${i}')">
    `;
}

function addView(element) {
    return /*html*/ `
    
    <div id="pictureDetails">
        <div class="content">
            <div class="headline">
                <h2 id="title">'${element.name}'</h2>
                <button id="closeBtn">X</button>
            </div>
        
            <img id="currentImage" class="cardViewImg" src='${element.path}' alt='${element.alt}'>

            <div class="endBtn">
                <button id="previousBtn">prev</button>

                <p>ID:<span id="cardId">${element.id}</span></p>

                <button id="nextBtn">next</button>
            </div>
        </div>
    </div>
`;
}
