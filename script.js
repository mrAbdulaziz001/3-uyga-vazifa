// console.log("Olg'a setTimeout");

// setTimeout(() => {
//     console.log("3 sekund davom etadi");

// }, 3000);

// console.log("setTimeout dan keyin");

// let count = 0;
  
// let interval = setInterval(() => {
//     count++;
//     console.log(o'tdi ${count} sekund);

//     if (count === 5) {
//         clearInterval(interval);
//         console.log("interval to'xtadi");
//     }

// }, 1000);

// let date = new Date();
// console.log(date);

// console.log("Yil:", date.getFullYear());
// console.log("Oy:", date.getMonth());
// console.log("Kun:", date.getDay());
// console.log("Sog'ot:", date.getHours());
// console.log("Minut:", date.getMinutes());
// console.log("Sekund:", date.getSeconds());

// let myDate = new Date();
// myDate.setFullYear(2025);
// myDate.setMonth(25);

// console.log(myDate);

function startClock() {
    function updateClock() {
      const now = new Date();
  
      // Soat, daqiqa va soniyalarni oling
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      // HTML elementlarga soatni yozing
      document.getElementById("hours").textContent = String(hours).padStart(
        2,
        "0"
      );
      document.getElementById("minutes").textContent = String(minutes).padStart(
        2,
        "0"
      );
      document.getElementById("seconds").textContent = String(seconds).padStart(
        2,
        "0"
      );
    }
  
    // Har soniyada soatni yangilang
    setInterval(updateClock, 1000);
  
    // Dastlabki yangilanish
    updateClock();
  }
  
  startClock();