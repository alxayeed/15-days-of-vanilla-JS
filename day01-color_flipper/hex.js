const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    let colorValue = "#"
    for (i = 0; i <= 5; i++) {
        const randomNumber = getRandomNumber()
        colorValue = colorValue + hex[randomNumber]
    }
    document.body.style.backgroundColor = colorValue
    color.textContent = colorValue
    color.style.color = colorValue
})

getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}