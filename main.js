var calltoaction = document.getElementById("cta");
var form = document.getElementById("form");
var img = document.getElementById("banner");


function call() {
    form.style.display = "block";
    img.style.display = "none"
}
function cancel() {
    form.style.display = "none";
    img.style.display = "block";
}

function sub() {
    alert("Thank you for the message")
}

var i = 0;
var txt = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptas, error, dolorem est exercitationem neque minus temporibus fugit quaerat distinctio ducimus ipsum beatae id? Et illo possimus aliquam quisquam, aut, deleniti laudantium optio itaque minus necessitatibus impedit. Nihil, quo aperiam pariatur accusantium cum molestias velit maxime consectetur quia ullam sunt! Odit excepturi distinctio enim iure fugit illo hic harum modi, itaque nemo nam sequi aut dolor blanditiis in mollitia sed autem. Adipisci unde, nostrum voluptatem, possimus eum iusto cum, quae laborum iste facilis eligendi rem? Harum eligendi reprehenderit culpa quos reiciendis illum, a molestias asperiores magni distinctio cumque iusto nihil?";
var speed = 30;

function typewriter() {
    if (1 < txt.length) {
        document.getElementById("txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}
typewriter()

