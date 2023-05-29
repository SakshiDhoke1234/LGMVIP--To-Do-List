const input = document.getElementById("inp1")
const list = document.getElementById("list")
function addTask() {
    if (input.value === '') {
        alert("Write something")
    }
    else {
        var li = document.createElement("Li")
        li.innerHTML = input.value
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        li.addEventListener('click', function () {
            li.style.textDecoration = "line-through";
        })
    }
    input.value = "";
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();






