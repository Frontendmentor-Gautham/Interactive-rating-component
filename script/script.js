const button = document.querySelectorAll('.btn');
const submitButton = document.querySelector('.submit-btn');
const rate = document.getElementById('rate');
const ratingContainer = document.querySelector('.rating');
const thankYouContainer = document.querySelector('.thank-you');



submitButton.addEventListener('click',()=>{
    
   thankYouContainer.classList.remove('hidden')
   ratingContainer.classList.add('hidden')
})

button.forEach((rating) => {
    rating.addEventListener("click",()=>{
        rate.innerHTML = rating.innerHTML
    })
})