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

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true, // Tự động chuyển slide
    arrows: true, // Hiển thị các nút điều hướng
    dots: true, // Hiển thị các điểm chuyển đổi
    prevArrow: '<button class="slick-prev">Previous</button>',
    nextArrow: '<button class="slick-next">Next</button>'
  });
});
  
//product details
  // selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}
     



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