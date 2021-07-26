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

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.tp(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}), 300);

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.tp(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // 각각에 순차적으로 나오게 하려면 이런 로직을 적용해주면 된다.
    // 반복적으로 처리할 때 자바스크립트를 사용하는 경우가 많다.
    opacity: 1
  });
});