var hitrn = 0;

function bubbles() {
    var clutter = '';

    

    // Generate random bubbles
    for (var i = 1; i <=65; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 60;
function time() {
    var interval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector('#Timer').textContent = timer;
        } else {
            clearInterval(interval);
            document.querySelector('#pbtm').innerHTML = `<h1 class='Message-Win'>GAME END</h1>`;
        }
    }, 1000);
}

function hit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#Hit').textContent = hitrn;
}

var scores = 0;
function score() {
    scores += 10;
    document.querySelector('#Score').textContent = scores;
}

// Handling click events on bubbles
document.querySelector('#pbtm').addEventListener("click", function(dets) {
    var a = Number(dets.target.textContent);

    // Only increment score if a bubble is clicked and the number matches 'Hit'
    if (a === hitrn && dets.target.classList.contains('bubble')) {
        score();
        hit();
        bubbles(); // Refresh bubbles
        dets.target.style.visibility = 'hidden'; // Hide clicked bubble
    }
});

time();
bubbles();
hit();


