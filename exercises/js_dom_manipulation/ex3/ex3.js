// https://github.com/public-apis/public-apis? 
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        if (!response.ok) { // Check if the response is OK (status code 200-299)
            throw new Error('Network response was not ok');
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        const advice = data.slip.advice; // Access the advice from the JSON data
        main.textContent = advice; // Display the advice in the paragraph element
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Handle any errors
        adviceDisplay.textContent = 'Sorry, we could not fetch advice at this time.';
    });
})
