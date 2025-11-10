function displayDate() {
    let z = new Date();
    let x = document.querySelector("p");
    x.textContent = z;
}
setInterval(displayDate,1000);
displayDate();