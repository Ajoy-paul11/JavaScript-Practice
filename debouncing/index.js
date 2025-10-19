// Notes:
// In JavaScript, debouncing is a technique used to ensure that a function is not called too frequently. It is commonly used in scenarios where events are triggered rapidly, such as typing in an input field or resizing a window. Without debouncing, functions might be executed many times in quick succession, causing performance issues or unwanted behaviour.


let count = 1;
const checkDebounce = () => {
    console.log(`Each type count `, count++);
}

function typingDebounce(fn, del) {
    let timer;
    return (...arg) => {
        clearInterval(timer)
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, del)
    }
}

const inputDebounce = typingDebounce(checkDebounce, 400)

let clickCount = 1;
const buttonDebounce = () => {
    console.log(`Clicking the button`, clickCount++);

}

const clickingDebounce = (func, timeDel) => {
    let timer;
    return (...arg) => {
        if (!timer) {
            func.apply(this, arg)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = undefined
        }, timeDel)
    }
}

const onClickBounce = clickingDebounce(buttonDebounce, 400)