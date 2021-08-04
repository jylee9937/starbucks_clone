const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //logic..
  searchInputEl.focus();
});
// 원래 input요소만을 focus할 수 있는데, 자바스크립트로 강제로 돋보기를 눌러도 focus가 되도록 바꿈

searchInputEl.addEventListener('focus', function () {
  //Logic..
  searchInputEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  //Logic..
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// 값을 알아내거나 지정하는데 사용할 수 있다.