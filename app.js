'use strict';


// navbar toggle


const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


// add active class on header when scrolled 200px from top


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


/**
 * product hover image scale and text popup
 */
document.addEventListener('DOMContentLoaded', function () {

  // theme toggle

  const themeToggle = document.getElementById('themeToggle');


  // Check and set the theme on page load

  const savedTheme = localStorage.getItem('themePreference'); // get theme from local storage
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerText = savedTheme === 'dark' ? 'Light Theme' : 'Dark Theme'; // set the button text based on the theme
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.innerText = 'Dark Theme';
      localStorage.setItem('themePreference', 'light'); // save light theme to local storage
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerText = 'Light Theme';
      localStorage.setItem('themePreference', 'dark'); // save dark theme to local storage
    }
  });


  // hover scale and text popup effect for product cards

  const images = document.querySelectorAll('.image');
  images.forEach(function (image) {
    image.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
    });

    image.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  });

  const imageContainers = document.querySelectorAll('.card-image-container');
  imageContainers.forEach(function (imageContainer) {

    imageContainer.addEventListener('mouseover', function () {
      this.classList.add('show-text');
    });
    imageContainer.addEventListener('mouseout', function () {
      this.classList.remove('show-text');
    });
  });



  // Review Read More toggle
  const reviewTextContainer = document.querySelector('.user-review_text');
  const reviewText = reviewTextContainer.querySelector('p');
  const readMoreLink = document.querySelector('.read-more');

  let fullText = reviewText.textContent;
  let halfTextLength = Math.ceil(fullText.length / 2);
  let firstHalf = fullText.slice(0, halfTextLength) + "...";
  let secondHalf = fullText.slice(halfTextLength);

  if (reviewText.textContent.length < 150) {
    readMoreLink.style.display = 'none';
  } else {
    reviewText.textContent = firstHalf;
  }

  readMoreLink.addEventListener('click', function (e) {
    e.preventDefault();
    if (this.textContent === "Read More") {
      this.textContent = "Read Less";
      reviewText.textContent = fullText;
    } else {
      this.textContent = "Read More";
      reviewText.textContent = firstHalf;
    }
  });



  // User Profile card, followers modal toggle

  const followersDiv = document.getElementById("followers");

  // Error handling for missing elements
  if (!followersDiv) {
    console.error("Element with id 'followers' not found.");
    return;
  }

  const modal = document.getElementById("followersModal");
  if (!modal) {
    console.error("Element with id 'followersModal' not found.");
    return;
  }

  const closeBtn = document.querySelector(".close-btn");
  if (!closeBtn) {
    console.error("Element with class 'close-btn' not found.");
    return;
  }

  const followers = [
    "John Doe",
    "Jane Smith",
    "Alex Brown",
    "Emma White",
    "Chris Johnson",
    "Ella Martinez",
    "Ryan Adams",
    "Sophia Lewis",
    "Lucas Grant",
    "Lily Turner",
    "Ethan Carter",
    "Olivia Lee",
    "Mason Walker",
    "Ava Allen",
    "Liam Rogers",
    "Mia Clark"
  ];

  followersDiv.addEventListener('click', () => {
    modal.style.display = "block";
    const followerList = document.getElementById("followerList");
    followerList.innerHTML = ""; // Clear existing list

    if (followers.length === 0) {
      followerList.textContent = "No users found";
    } else {
      followers.forEach(follower => {
        const listItem = document.createElement("li");
        listItem.textContent = follower;
        followerList.appendChild(listItem);
      });
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });




  // cart amount number increment 

  const cartCountElement = document.querySelector('.btn-badge');
  let cartCount = parseInt(cartCountElement.textContent, 10);

  function increaseCartCount() {
    cartCount++;
    cartCountElement.textContent = cartCount;
  }

  const addToCartButtons = document.querySelectorAll('.card-action-btn.cart-btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', increaseCartCount);
  });

});