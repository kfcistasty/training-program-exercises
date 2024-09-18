console.log("Yay! The javascript is running");

const nameElement = document.getElementById('name');
nameElement.textContent = "Natalie";

const makeBigger = document.getElementById('bigger');
makeBigger.style.fontSize = "500px" 
makeBigger.style.color = "green";

const imageElement = document.querySelector('img');
imageElement.src = "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

const hiddenSquares = document.getElementsByClassName('hidden');
for (let i = 0; i < hiddenSquares.length; i++) {
    hiddenSquares[i].style.display = 'block'; 
}

// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg
