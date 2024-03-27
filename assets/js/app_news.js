document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const newsCards = document.querySelectorAll('.news_card');

    let currentIndex = 0;

    function updateClasses() {
        for (let i = 0; i < newsCards.length; i++) {
            newsCards[i].classList.remove('Trước', 'Đang', 'Tiếp_theo');
        }

        // Calculate indexes for current, previous, and next cards
        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;
        const prevIndex = (currentIndex === 0) ? newsCards.length - 1 : currentIndex - 1;
        const nextIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 2) % newsCards.length;

        // Add appropriate classes to cards
        newsCards[currentFirstIndex].classList.add('Đang');
        newsCards[currentSecondIndex].classList.add('Đang');
        newsCards[prevIndex].classList.add('Trước');
        newsCards[nextIndex].classList.add('Tiếp_theo');
    }

    function toTheLeft(){
        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;
        const prevIndex = (currentIndex === 0) ? newsCards.length - 1 : currentIndex - 1;
        newsCards[currentFirstIndex].classList.add('Đang');
        newsCards[currentFirstIndex].classList.add('moveToRight');
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('moveToRight')
        }, 1);
        newsCards[currentSecondIndex].classList.add('Đang');
        newsCards[currentSecondIndex].classList.add('moveToRight');
        setTimeout(() => {
            newsCards[currentSecondIndex].classList.remove('moveToRight')
        }, 1);
        newsCards[prevIndex].classList.add('Trước');
        newsCards[prevIndex].classList.add('movetoRight');
        setTimeout(() => {
            newsCards[prevIndex].classList.remove('movetoRight')
        }, 1);
    }

    function toTheRight()
    {
        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;
        const prevIndex = (currentIndex === 0) ? newsCards.length - 1 : currentIndex - 1;
        newsCards[currentFirstIndex].classList.add('Đang');
        newsCards[currentFirstIndex].classList.add('moveToLeft');
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('moveToLeft')
        }, 1);
        newsCards[currentSecondIndex].classList.add('Đang');
        newsCards[currentSecondIndex].classList.add('moveToLeft');
        setTimeout(() => {
            newsCards[currentSecondIndex].classList.remove('moveToLeft')
        }, 1);
        newsCards[prevIndex].classList.add('Tiếp_theo');
        newsCards[prevIndex].classList.add('movetoLeft');
        setTimeout(() => {
            newsCards[prevIndex].classList.remove('movetoLeft')
        }, 1);
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? newsCards.length - 2 : (currentIndex - 1) % newsCards.length;
        toTheLeft();
        updateClasses();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 1) % newsCards.length;
        toTheRight();
        updateClasses();
    });

    updateClasses();
    setInterval(() =>{currentIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 1) % newsCards.length;
        updateClasses();}, 7000)
});
