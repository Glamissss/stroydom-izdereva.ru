// Скрипт для отображения времени
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('ru-RU');
}
setInterval(updateClock, 1000);
updateClock();

// Скрипт счетчика посетителей (простая реализация)
if (!localStorage.visitorCount) {
    localStorage.visitorCount = 0;
}
localStorage.visitorCount = parseInt(localStorage.visitorCount) + 1;
console.log('Посетителей: ' + localStorage.visitorCount);