window.onload = function () {
  if (window.innerWidth < 470) {
    document
      .getElementsByClassName("content__title")[0]
      .innerHTML = 'Hadley James <br> &amp; CO. <div class="content__subTitle">— Lighting —</div>';
  }
}

window.addEventListener("resize", function(event) {
  if (window.innerWidth < 470) {
    document
      .getElementsByClassName("content__title")[0]
      .innerHTML = 'Hadley James <br> &amp; CO. <div class="content__subTitle">— Lighting —</div>';
  } else {
    document
      .getElementsByClassName("content__title")[0]
      .innerHTML = 'Hadley James &amp; CO. <div class="content__subTitle">— Lighting —</div>';
  }
})
