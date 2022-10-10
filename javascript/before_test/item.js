const itemId = localStorage.getItem("itemId");
const END_POINT = `https://6342e230ba4478d478446685.mockapi.io/test/${itemId}`
const dataArr = {};


const setId = (id) => {
    localStorage.setItem("itemId", id);
};

const createCard = (object) => {
    // defining wrappers
    const cardWrapper = document.getElementById("cardWrapper");

    // defining elements
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h5");
    const cardButton = document.createElement("button")
    // const cardText = document.createElement("p");
    // const cardId = document.createElement("p");
    // const cardYear = document.createElement("p");
    // const cardButton = document.createElement("a");

    // adding styles to the elements
    card.classList.add("card");
    card.style.width = "18rem"
    // card.style.marginRight = "1rem"
    // card.style.marginBottom = "1rem"

    cardButton.classList.add("btn")
    cardButton.classList.add("btn-primary")
    
    cardImage.classList.add("card-img-top")
    cardImage.setAttribute("src", object.image)
    cardImage.style.height = "200px"
    
    cardBody.classList.add("card-body")
    
    cardTitle.classList.add("card-title")
    cardTitle.style.color = "red"
    cardTitle.style.fontWeight = "800"
    
    // cardYear.classList.add("card-text")
    // cardText.classList.add("card-text")
    
    // cardButton.classList.add("btn")
    // cardButton.classList.add("btn-primary")
    // cardButton.innerHTML = "Go somewhere"

    // adding content
    cardTitle.innerHTML = "title: " + object.name
    // cardText.innerText = "text: " + object.price
    // cardId.innerText = "id: " + object.id
    cardButton.innerHTML = "blet";

    // appending
    cardWrapper.append(card);
    // card.append(cardImage, cardBody);
    card.append(cardImage, cardBody);
    // cardBody.append(cardId, cardText, cardTitle, cardYear, cardButton);
    cardBody.append(cardTitle);

    // on button click add its id to localstorage
    cardButton.addEventListener("click", () => {
        setId(object.id);
    });
};    


const fetchData = async () => {
    try {
        const response = await fetch(END_POINT);
        if (response.ok) {
            dataArr.blet = await response.json();
            console.log(dataArr)
            createCard(dataArr.blet)
        }
    } catch (error) {
        console.error(error);
    }
};

fetchData()
