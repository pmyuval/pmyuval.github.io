const dorothy = document.querySelector('.dorothy');

// Function to move Dorothy to a new position
function moveDorothy() {
    dorothy.style.left = '250px';  // New left position
    dorothy.style.top = '240px';   // New top position
}

// Optional: Trigger the movement after a delay (e.g., 2 seconds)
setTimeout(moveDorothy, 2000);