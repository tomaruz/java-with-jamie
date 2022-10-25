console.log("Hey")
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const submitButton = document.getElementById("submit");
submitButton.onclick = function () {
    if (firstName.value == "" || secondName.value == "") {
        console.log("Make sure the form is complete...")
    } else {
        console.log("Well done, you've done it!")
    }
}