let value = document.getElementById("value")
let counterValue = parseInt(value.textContent)
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const decrease = document.querySelector(".decrease")



increase.addEventListener('click', function () {
    counterValue += 1
    value.textContent = counterValue
    if (counterValue > 0) {
        value.style.color = 'blue'
    }
})


decrease.addEventListener('click', function () {
    counterValue -= 1
    value.textContent = counterValue
    if (counterValue < 0) {
        value.style.color = 'red'
    }
})

reset.addEventListener('click', function () {
    counterValue = 0
    value.textContent = counterValue
    value.style.color = '#000'
})