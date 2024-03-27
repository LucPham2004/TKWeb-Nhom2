document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const newsCards = document.querySelectorAll('.news_card');

    let currentIndex = 0;

    function updateClasses() {
        for (let i = 0; i < newsCards.length; i++) {
            newsCards[i].classList.remove('Show');
        }

        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;

        newsCards[currentFirstIndex].classList.add('Show');
        newsCards[currentSecondIndex].classList.add('Show');

        newsCards[currentFirstIndex].classList.add('fadeout');
        newsCards[currentSecondIndex].classList.add('fadeout');
        
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('fadeout');
            newsCards[currentSecondIndex].classList.remove('fadeout');
            newsCards[currentFirstIndex].classList.add('fadein');
            newsCards[currentSecondIndex].classList.add('fadein');
        }, 1);
        
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('fadein');
            newsCards[currentSecondIndex].classList.remove('fadein');
        }, 1);
    }
    
    let intervalId; // Biến lưu trữ ID của interval
    let isIntervalRunning = false; // Biến kiểm tra xem interval đã được khởi động chưa

    function startInterval() {
        if (!isIntervalRunning) {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex === newsCards.length - 2) ? 0 : newsCards.length - 2;
                setTimeout(updateClasses(), 0.8);
            }, 8000);
            isIntervalRunning = true;
        }
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? newsCards.length - 2 : 0;
        setTimeout(updateClasses(),0.8);
        clearInterval(intervalId);
        isIntervalRunning = false;
        startInterval();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === newsCards.length - 2) ? 0 : newsCards.length - 2;
        setTimeout(updateClasses(),0.8);
        clearInterval(intervalId);
        isIntervalRunning = false;
        startInterval();
    });

    updateClasses();
    startInterval();
})
