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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 이미 기본값으로 설정되어 있어서 건드릴 필요가 없다.
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수// 기본값은 1
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  // autoplay: { //단순 true말고 객체타입으로 옵션을 넣어줄 수 있다.
  //   delay: 5000 //ms단위
  // },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김 처리!
    promotionEl.classList.add('hide');
    // promotionEl로 선택된 요소에 hide라는 이름의 클래스를 추가시키는 코드.
  } else{
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});
// 자바스크립트를 통해서는 프로그래밍적으로의 역할만 수행하여 클래스 추가 삭제만 해주는 것이 좋다.
// 단순한 것이 아닌 자바스크립트와 다른 CSS의 연계로 하는 것이 한계가 있는 경우는 라이브러리를 이용해서
// 자바스크립트 내에서 처리하는 것이다. GSAP과 같이

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size){
  //gsap.tp(요소, 지속시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      // 무한반복을 의미함. 이거는 gsap에서 정의한 것임.
      yoyo: true,
      //실행한 동작의 반대 동작이 일어날 수 있도록 허용함.
      ease: Power1.easeInOut,
      delay: random(0, delay)
      // 동작이 시작되기 전에 멈춰있는 시간
      // 몇 초 뒤에 애니메이션을 시작하겠다.
  });
}
floatingObject('.floating1', 1, 15); 
floatingObject('.floating2', 0.5, 15); 
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
// 해당되는 모든 요소를 찾을 때는 변수 이름에 s를 붙여준다.
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show') //(class를 추가할 요소, 추가할 클래스명)
    .addTo(new ScrollMagic.Controller());
    // 이렇게 작성하는 부분은 공식문서에서 시키는대로 해도 된다... 정확한 로직은 파악 안해도 됨..
  // Scene은 scrollmagic을 통해서 특정한 요소를 감시하는 옵션을 지정하는 메소드
  // setClassToggle는 메소드체이닝을 통해서 연결되고, HTML에 class명을 추가했다 뺏다 하는 기능을 하는 메소드
});