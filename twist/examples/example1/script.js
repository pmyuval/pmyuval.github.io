let currentParagraph = 1;
const totalParagraphs = 3;

// פעולות שקורות מיד כשהקובץ נטען (רק ב-page3.html)
// 1. הסתרת כל הפסקאות למעט הראשונה
document.getElementById('p2').style.display = 'none';
document.getElementById('p3').style.display = 'none';

// 2. כיבוי כפתור "הקודם" כי אנחנו בהתחלה
document.getElementById('btn-prev').disabled = true;

// הפונקציה שמופעלת בלחיצה על הכפתורים
function changeSlide(direction) {
  const nextVal = currentParagraph + direction;
  
  // מוודאים שאנחנו בטווח החוקי (בין 1 ל-3)
  if (nextVal >= 1 && nextVal <= totalParagraphs) {
    // מסתירים את הפסקה הנוכחית
    document.getElementById(`p${currentParagraph}`).style.display = 'none';
    
    // מעדכנים את המספר ומציגים את הפסקה החדשה
    currentParagraph = nextVal;
    document.getElementById(`p${currentParagraph}`).style.display = 'block';

    // מדליקים ומכבים כפתורים לפי המיקום
    document.getElementById('btn-prev').disabled = (currentParagraph === 1);
    document.getElementById('btn-next').disabled = (currentParagraph === totalParagraphs);
  }
}