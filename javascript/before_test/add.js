// BUTINAI ISIMK ENDPOINT REIKSMES
const END_POINT = "https://6342e230ba4478d478446685.mockapi.io/test"

const submitForm = document.querySelector("form");
const objectName = document.getElementById("name");
const objectImage = document.getElementById("image");
const statusMsg = document.getElementById("status-msg");

const clickToHome = () => {
  window.location = "./index.html";
};

const postData = async (object) => {
    try {
        const response = await fetch(END_POINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        });
        if (response.status === 500) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "#03d3b2";
            statusMsg.innerHTML = `Please check if all mandatory data provided. Here is response status code: ${response.status}`;
        } else if (response.ok) {
            statusMsg.innerHTML = "";
            statusMsg.style.color = "black";
            statusMsg.innerHTML = "Data successfully sent! Returning to home page...";
            setTimeout(clickToHome, 2000);
        }
    } catch (error) {
        statusMsg.innerHTML = "";
        statusMsg.style.color = "red";
        statusMsg.innerHTML = `There was an error: ${error}`;
    }
};

const validateForm = () => {
    let validationOk = true;
    const nameErrElement = document.querySelector("#name-block span");
    const imageErrElement = document.querySelector("#image-block span");
    
    if (objectName.value == "") {
        nameErrElement.innerHTML = "Name field must be correctly filled";
        nameErrElement.style.visibility = "visible";
        validationOk = false;
    } else {
        nameErrElement.style.visibility = "hidden";
    }
    if (objectImage.value == "" || !objectImage.value.includes("http")) {
        imageErrElement.innerHTML = "Image URL field must be correctly filled";
        imageErrElement.style.visibility = "visible";
        validationOk = false;
    }
    else {
        imageErrElement.style.visibility = "hidden";
    }
    return validationOk;
};

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
    let newObject = {
        name: objectName.value,
        image: objectImage.value,
    };
    postData(newObject);
    }
});
