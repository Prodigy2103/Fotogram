const path = "./img/pictures/";

const pictureCollection = [
    {
        id: "01",
        name: "Basketball-Stapel",
        path: `${path}/basketball01.jpg`,
        alt: "Ein Stapel orangefarbener Basketbälle mit Spalding-Logo.",
    },
    {
        id: "02",
        name: "Spieler mit Molten Basketball",
        path: `${path}/basketball02.jpg`,
        alt: "Ein Spieler hält einen Molten-Basketball.",
    },
    {
        id: "03",
        name: "Basketball-Spielszene",
        path: `${path}/basketball03.jpg`,
        alt: "Basketballspieler in Aktion auf dem Feld.",
    },
    {
        id: "04",
        name: "Basketballarena gefüllt",
        path: `${path}/basketball04.jpg`,
        alt: "Eine Basketballarena während eines Spiels.",
    },
    {
        id: "05",
        name: "Spieler dribbelt",
        path: `${path}/basketball05.jpg`,
        alt: "Ein Basketballspieler dribbelt mit dem Ball.",
    },
    {
        id: "06",
        name: "Spieler wirft Ball",
        path: `${path}/basketball06.jpg`,
        alt: "Ein Basketballspieler wirft den Ball, umgeben von orangen Lichteffekten.",
    },
    {
        id: "07",
        name: "Korbwurf auf Freiplatz",
        path: `${path}/basketball07.jpg`,
        alt: "Eine Person wirft einen Basketball auf einem roten Außenplatz.",
    },
    {
        id: "08",
        name: "Ball im Korb",
        path: `${path}/basketball08.jpg`,
        alt: "Ein Basketball im Netz eines Korbes.",
    },
    {
        id: "09",
        name: "Brennender Basketball",
        path: `${path}/basketball09.jpg`,
        alt: "Ein Basketball in Flammen.",
    },
    {
        id: "10",
        name: "Basketball auf Bank",
        path: `${path}/basketball10.jpg`,
        alt: "Ein Basketball liegt auf einer Parkbank.",
    },
    {
        id: "11",
        name: "Streetballplatz mit Wandgemälde",
        path: `${path}/basketball11.jpg`,
        alt: "Ein Mann spielt Basketball auf einem Freiplatz mit großem Wandgemälde.",
    },
    {
        id: "12",
        name: "Rollstuhlbasketballspiel",
        path: `${path}/basketball12.jpg`,
        alt: "Rollstuhlbasketballspieler in Aktion während eines Spiels.",
    },
    {
        id: "13",
        name: "Basketballspieler in Bewegung",
        path: `${path}/basketball13.jpg`,
        alt: " Basketballspieler dribbelt Ball, Mixed-Media-Stil.",
    },
    {
        id: "14",
        name: "Basketballspieler im roten Trikot",
        path: `${path}/basketball14.jpg`,
        alt: "Basketballspieler in Rot auf dem Feld.",
    },
    {
        id: "15",
        name: "Basketball-Wurf",
        path: `${path}/basketball15.jpg`,
        alt: "Basketballspieler im Sprung beim Wurf zum Korb.",
    },
];

function galleryImage() {
    const imgContainer = document.getElementById("imageGallery");
    imgContainer.innerHTML = "";

    for (let i = 0; i < pictureCollection.length; i++) {
        const element = pictureCollection[i];

        imgContainer.innerHTML += renderSinglePicture(i, element);
    }
}

function openViewCard(i) {
    const toggleOverlay = document.getElementById("cardView-Bg");
    toggleOverlay.classList.remove("d_none");

    toggleOverlay.innerHTML = "";
    toggleOverlay.innerHTML = addView(pictureCollection[i]);
    addDialogEventListener(i);
}

function addDialogEventListener(i) {
    document.getElementById("closeBtn").addEventListener("click", closeViewCard);
    document.getElementById("previousBtn").addEventListener("click", () => previousImg(i));
    document.getElementById("nextBtn").addEventListener("click", () => nextImg(i));
}

function closeViewCard() {
    document.getElementById("cardView-Bg").classList.add("d_none");
}

function updateAddView(i) {
    let nextIndex = i + 1;
    if (nextIndex >= pictureCollection.length - 1) {
        nextIndex = 0;
    }
    const element = pictureCollection[nextIndex];

    document.getElementById("currentImage").src = element.path;
    document.getElementById("title").innerText = element.name;
    document.getElementById("cardId").innerText = element.id;

    setBtns(nextIndex);
}

function updateAddView(i) {
    let prevIndex = i - 1;
    if (prevIndex < 0) {
        prevIndex >= pictureCollection.length - 1;
    }
    const element = pictureCollection[prevIndex];

    document.getElementById("currentImage").src = element.path;
    document.getElementById("title").innerText = element.name;
    document.getElementById("cardId").innerText = element.id;

    setBtns(prevIndex);
}

function getEndBtn(i) {
    const imageCounter = document.getElementById("imageCounter");
    if (imageCounter) {
        imageCounter.innerHTML = i + 1 + " / " + pictureCollection.length;
    }
    setBtns(i);
}

function setBtns(i) {
    let backBtn = document.getElementById("previousBtn");
    let forBtn = document.getElementById("nextBtn");

    forBtn.replaceWith(forBtn.cloneNode(true));
    backBtn.replaceWith(backBtn.cloneNode(true));

    backBtn = document.getElementById("previousBtn");
    forBtn = document.getElementById("nextBtn");

    backBtn.addEventListener("click", () => previousImg(i));
    forBtn.addEventListener("click", () => nextImg(i));
}

function nextImg(i) {
    let nextIndex = ++i;
    if (nextIndex > pictureCollection.length - 1) {
        nextIndex = 0;
    }
    const element = pictureCollection[nextIndex];

    document.getElementById("currentImage").src = element.path;
    document.getElementById("title").innerText = element.name;
    document.getElementById("cardId").innerText = element.id;

    setBtns(nextIndex);
}

function previousImg(i) {
    let prevIndex = --i;
    if (prevIndex < 0) {
        prevIndex = pictureCollection.length - 1;
    }
    const element = pictureCollection[prevIndex];

    document.getElementById("currentImage").src = element.path;
    document.getElementById("title").innerText = element.name;
    document.getElementById("cardId").innerText = element.id;

    setBtns(prevIndex);
}

galleryImage();
