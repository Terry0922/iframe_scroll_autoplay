
    //유튜브 스크롤 자동재생
    let state = true;
    let state2 = true;
    let state3 = true;
    $(document).scroll(function (event) {
      scroll_pos = $(this).scrollTop();
  
      if (scroll_pos > $(".test1").offset().top) {
        if (state == true) {
          console.log(".test1");
          playVideo1();
        }
      }
      if (scroll_pos > $(".test2").offset().top) {
        if (state2 == true) {
          console.log(".test2");
          playVideo2();
        }
        state2 = false;
      }
  
      if (scroll_pos > $(".test3").offset().top) {
        if (state3 == true) {
          console.log(".test3");
          playVideo3();
        }
        state3 = false;
      }
    });
  
    function playVideo1() {
      src = $(".test1").prop("src");
      $(".test1").prop("src", "https://www.youtube.com/embed/yFJTDEuBwYI?controls=0&autoplay=1&mute=1&loop=1&playlist=yFJTDEuBwYI");
      state = false;
    }
    function playVideo2() {
      src = $(".test2").prop("src");
      $(".test2").prop("src", "https://www.youtube.com/embed/1YMFUht3Ohk?controls=0&autoplay=1&mute=1&loop=1&playlist=1YMFUht3Ohk");
      state2 = false;
    }
    function playVideo3() {
      src = $(".test3").prop("src");
      $(".test3").prop("src", "https://www.youtube.com/embed/syc9bxJQFpw?controls=0&autoplay=1&mute=1&loop=1&playlist=syc9bxJQFpw");
      state3 = false;
    }
