let isLocked = true;
let contentCounter = 0;
let colorIndex = 0;
const colors = [
    '#2E7D32', // ירוק כהה
    '#E65100', // כתום כהה
    '#6A1B9A', // סגול כהה
    '#00838F',  // טורקיז כהה
    '#2980b9'  // כחול כהה
];

//פונקציה שמחזירה מחרוזת, לשימוש בדוגמאות: 1, 2, 3, 5, 7
function textExample(moreText) {
    return "מחרוזת עליזה " + moreText;
}

// פונקציה שמקפיצה התראה עבור דוגמאות: 1, 3
function showAlert() {
    alert(textExample("התראה! "));
}

// פונקציה שמדפיסה ללוג עבור דוגמאות: 2
function logMessage() {
    console.log(textExample("div2"));
}


// פונקציה שמציגה תאריך עבור דוגמא 4
function showDate() {
    
    console.log("div4: זה התאריך" + Date());
}

// פונקציה שמשנה תוכן של אלמנט עבור דוגמא 5
function changeContent() {
    
    document.getElementById("div5").innerHTML = textExample("div5");
}

// פונקציה שמשנה את הצבע של כפתור עבור דוגמא 6
function changeColor() {
    const button = document.getElementById("change-color-button");
    button.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
}

// פונקציה שמציגה אלמנטים נוספים עבור דוגמא 7
function showElements() {
    const container = document.getElementById('door-lock-container');
    container.style.display = 'flex';  // מציג את הדלת והמנעול
}


//פונקציה שלא עושה כלום
function doNothing() {
    console.log("לא קורה כלום");
}

//פונקציה שמשנה צבע וטקסט של הדלת כדי ליצור אשליה שהיא נפתחה, וגם כותבת בקונסול שהדלת נפתחה

function openDoor(){
    door = document.getElementById("div8");
    door.classList.add("open");
    door.innerText = "הדלת נפתחה!";
    console.log("הדלת נפתחה!");
}

// פונקציה שמוסיפה לדלת פונקציה שמאפשרת לה להיפתח. היא גם צובעת את המנעול וכותבת לקונסול שהמנעול נפתח
function unLock(){
    document.getElementById("div8").onclick = openDoor;
    document.getElementById("div9").style.backgroundColor = "#BBB";
    console.log("המנעול נפתח!");

}
