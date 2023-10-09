'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

//cart



// categories
const dropdownPanel = document.querySelector('.dropdown-panel');

        // Thêm danh mục và nội dung liên quan
        function addCategory(title, items, bannerSrc) {
            const categoryList = document.createElement('ul');
            categoryList.classList.add('dropdown-panel-list');

            // Thêm tiêu đề danh mục
            const titleItem = document.createElement('li');
            titleItem.classList.add('menu-title');
            titleItem.innerHTML = `<a href="#">${title}</a>`;
            categoryList.appendChild(titleItem);

            // Thêm các mục
            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('panel-list-item');
                listItem.innerHTML = `<a href="#">${item}</a>`;
                categoryList.appendChild(listItem);
            });

            // Thêm banner nếu có
            if (bannerSrc) {
                const bannerItem = document.createElement('li');
                bannerItem.classList.add('panel-list-item');
                bannerItem.innerHTML = `<a href="#"><img src="${bannerSrc}" alt="${title}" width="250" height="119"></a>`;
                categoryList.appendChild(bannerItem);
            }

            dropdownPanel.appendChild(categoryList);
        }

        // Thêm danh mục và nội dung liên quan
        addCategory("Electronics", ["Desktop", "Laptop", "Camera", "Tablet", "Headphone"], "./assets/images/electronics-banner-1.jpg");
        addCategory("Men's", ["Formal", "Casual", "Sports", "Jacket", "Sunglasses"], "./assets/images/mens-banner.jpg");
        addCategory("Women's", ["Formal", "Casual", "Perfume", "Cosmetics", "Bags"], "./assets/images/womens-banner.jpg");
        addCategory("Electronics", ["Smart Watch", "Smart TV", "Keyboard", "Mouse", "Microphone"], "./assets/images/electronics-banner-2.jpg");

// footer