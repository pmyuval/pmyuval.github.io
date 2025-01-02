
function calculateScore(score, points) {
    return parseInt(score) + parseInt(points);
}



function updateScore(points) {
    let score = document.getElementById("score").innerText;
    let newScore = calculateScore(score, points);
    document.getElementById("score").innerText = newScore;
}

