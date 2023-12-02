// script.js

function showAlert(message){
    alert(message);
}

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

showSlides();

document.querySelector('.bottom-up a').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
});

let selectedPlan = '';
        let planPrice = 0;

        function selectPlan(plan, price) {
            selectedPlan = plan;
            planPrice = price;
            const selectedPlanInfo = document.getElementById('selected-plan-info');
            selectedPlanInfo.style.display = 'block';
        }

        function showCheckoutPage() {
            const checkoutPage = document.getElementById('checkout-page');
            const participantsQuantity = document.getElementById('participants').value;
            const totalAmount = participantsQuantity * planPrice;

            document.getElementById('selected-plan').textContent = selectedPlan;
            document.getElementById('participants-quantity').textContent = participantsQuantity;
            document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

            checkoutPage.style.display = 'block';
        }

        function editBooking() {
            const checkoutPage = document.getElementById('checkout-page');
            checkoutPage.style.display = 'none';
        }

        function proceedToPayment() {
            alert('Redirecting to payment page...');
            // You can add logic to redirect to a payment page here
        }

    function rateStar(star) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((s, index) => {
            s.classList.toggle('active', index < star);
        });
    }

    function submitReview() {
        const reviewText = document.getElementById('review-text').value;
        const stars = document.querySelectorAll('.star.active').length;

        if (reviewText.trim() === '' || stars === 0) {
            alert('Please provide both a review and a star rating.');
        } else {
            // You can add logic to submit the review to a backend or display it on the page
            alert(`Review submitted with ${stars} star(s): ${reviewText}`);
        }
    }

let reviewsExpanded = false;

        function toggleReviews() {
            const reviewsSection = document.getElementById('reviews');
            const expandButton = document.querySelector('.expand-button');

            if (reviewsExpanded) {
                reviewsSection.style.maxHeight = '300px';
                expandButton.textContent = 'See More Reviews';
            } else {
                reviewsSection.style.maxHeight = reviewsSection.scrollHeight + 'px';
                expandButton.textContent = 'See Less Reviews';
            }

            reviewsExpanded = !reviewsExpanded;
        }

        document.querySelector('.bottom-up a').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
        });