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
        //const prevIndex = (currentIndex === 0) ? newsCards.length - 1 : currentIndex - 1;
        //const nextIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 2) % newsCards.length;

        newsCards[currentFirstIndex].classList.add('Show');
        newsCards[currentSecondIndex].classList.add('Show');
    }

    function toTheLeft(){
        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;
        
        newsCards[currentFirstIndex].classList.add('slideLeft');
        newsCards[currentSecondIndex].classList.add('slideLeft');
        
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('slideLeft');
            newsCards[currentSecondIndex].classList.remove('slideLeft');
        }, 1);
        
        setTimeout(() => {
            updateClasses();
        }, 800);
        
    }

    function toTheRight()
    {
        const currentFirstIndex = currentIndex % newsCards.length;
        const currentSecondIndex = (currentIndex + 1) % newsCards.length;
        
        newsCards[currentFirstIndex].classList.add('slideRight');
        newsCards[currentSecondIndex].classList.add('slideRight');
        
        setTimeout(() => {
            newsCards[currentFirstIndex].classList.remove('slideRight');
            newsCards[currentSecondIndex].classList.remove('slideRight');
        }, 1);
        
        setTimeout(() => {
            updateClasses();
        }, 800);
        
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? newsCards.length - 2 : (currentIndex - 1) % newsCards.length;
        toTheLeft();
        setTimeout(updateClasses(),0.8);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 1) % newsCards.length;
        toTheRight();
        setTimeout(updateClasses(),0.8);
    });

    updateClasses();
    setInterval(() =>{currentIndex = (currentIndex === newsCards.length - 2) ? 0 : (currentIndex + 1) % newsCards.length;
        toTheRight();
        setTimeout(updateClasses(),0.8);
    }, 7000)
});
