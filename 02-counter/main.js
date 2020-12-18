const value = document.getElementById("value")
const btns = document.querySelectorAll('.btn')
let count = 0

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            count++
            value.textContent = count
            if (count > 0) {
                value.style.color = "green"
            }
        }
        else if (styles.contains("decrease")) {
            count--
            value.textContent = count
            if (count < 0) {
                value.style.color = "red"
            }
        }
        else {
            count = 0
            value.textContent = count
            if (count == 0) {
                value.style.color = "black"
            }
        }

    })

})



// increase.addEventListener('click', function () {
//     counterValue += 1
//     value.textContent = counterValue
//     if (counterValue > 0) {
//         value.style.color = 'blue'
//     }
// })


// decrease.addEventListener('click', function () {
//     counterValue -= 1
//     value.textContent = counterValue
//     if (counterValue < 0) {
//         value.style.color = 'red'
//     }
// })

// reset.addEventListener('click', function () {
//     counterValue = 0
//     value.textContent = counterValue
//     value.style.color = '#000'
// })