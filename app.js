const input = document.getElementById("input");
const btn = document.getElementById("btn");
const message = document.getElementById("message");


btn.addEventListener("click", () => {
    if(input.value === "") {
        message.innerText = "Please enter a value";
        set();
    } else {
        message.innerText = input.value;
    }
})

function set() {
    const name = setInterval(() => {
        message.innerText = "";
    }, 2000);
    setInterval(() => {
        clearInterval(name);
    }, 2000)
}
