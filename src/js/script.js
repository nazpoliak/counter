let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('span');


btns.forEach(btn => {
    btn.addEventListener('click', function() {
        if(btn.classList.contains('decrease')) {
            --count;
            value.textContent = count;
            setColor(count);
        } else if (btn.classList.contains('increase')) {
            ++count;
            value.textContent = count;
            setColor(count);
        } else {
            count = 0;
            value.textContent = count;
            setColor(count);
        }
    })
})

function setColor(count) {
    if (count > 0) {
        value.style.color = 'green';
    } else if (count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = 'black';
    }
}