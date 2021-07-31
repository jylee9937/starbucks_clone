// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 함수명은 외부에서 참조하는 라이브러리에서 사용하는 것이기에 우리가 임의로 정하면 안된다.
  // <div id="player"></div>
  new YT.Player('player', {
    // 특별히 여기서는 id요소를 가리키는 #을 넣으면 안된다.
    // 유튜브에서 함수를 #없이 찾도록 만들었기 때문이다.
    videoId: 'An6LvWQuj_8',
    // 우리가 재생하고자 하는 유튜브 비디오ID를 넣으면 된다.
    // 최초 재생할 유튜브 영상 ID
    playerVar:{
      autoplay: true, //자동 재생 유무
      loop: true, // 반복 재생 유무
      // 반복재생할 때에는 재생할 목록을 주어야 한다.
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events:{
      onReady: function(event){
        // 이렇게 객체 데이터 안에 넣는 함수를 메소드라고 하고, onReady메소드라고 부르면 된다.
        event.target.mute() //음소거
        // 여기서의 target은 재생되는 영상이다.
      }
    }
  });
}