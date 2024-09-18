console.log("Exercise 2")

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
text3 = document.getElementById('text3');
button1.addEventListener('mouseleave', () => {
    text1.style.display ="block";
    text2.style.display = "none";
    text3.style.display = "none";
});

button2.addEventListener('mouseleave', () => {
    text1.style.display ="none";
    text2.style.display = "block";
    text3.style.display = "none";
});

button3.addEventListener('mouseleave', () => {
    text1.style.display ="none";
    text2.style.display = "none";
    text3.style.display = "block";
});

const main = document.querySelector("#display-box")