$(window).on("load scroll", function () {
  $(".ten-02").each(function () {
    var scrollItem = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > scrollItem - windowHeight + 200) {
      $(this).addClass("js-ten-02");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".ten-03", {
    scrollTrigger: {
      trigger: ".trigger-01",
      start: "top center",
      toggleActions: "play pause resume reset", // スクロールを戻したらもう一度開始させる
      markers: true,
    },
    left: "100%",
    rotation: 360,
    duration: 2,
  });

  const tl = gsap.timeline();
  tl.from(".kiro-04", { xPercent: -1000 })
    .from(".ten-04", { xPercent: -1000 })
    .from(".mainasu-04", { xPercent: -1000 });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".trigger-02",
    start: "top",
    scrub: 0.7, // .7秒遅れて追従させる
    pin: true, // 要素を固定表示させる
    anticipatePin: 5, // ピン留めをどのくらい早く行うかを制御
  });
});
