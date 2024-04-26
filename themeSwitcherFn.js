let bgContainerElement = document.getElementById("bgContainer");
let headingElement = document.getElementById("heading");
let themeUserInputElement = document.getElementById("themeUserInput");
let themeUserValue = themeUserInputElement.value;
let darkTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
let lightTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserValue = themeUserInputElement.value;
        if (themeUserValue === "Dark") {
            bgContainerElement.style.backgroundImage = darkTheme;
            headingElement.style.color = "#FFF7F7";
        }
        else if (themeUserValue === "Light") {
            bgContainerElement.style.backgroundImage = lightTheme;
            headingElement.style.color = "#014d40";
        }
        else {
            alert("Please enter appropriate value");
        }
    }
}

themeUserInputElement.addEventListener("keydown", changeTheme);