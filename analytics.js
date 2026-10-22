/* 방문 분석: 아래 두 아이디를 채우면 모든 페이지에서 켜진다.
   미리보기(로컬 주소)에서는 집계하지 않는다. */
(function () {
  var GA_ID = 'G-BFNLZQYCGX';  // 구글 애널리틱스 측정 ID (김가경 국어 MEXX > 한티 MEXX 사이트)
  var NAVER_ID = '';  // 네이버 애널리틱스 사이트 ID (wcs_add["wa"] 값)

  if (location.hostname !== 'hanti.oreumyak.com') return;

  function load(src, onload) {
    var s = document.createElement('script');
    s.async = true; s.src = src;
    if (onload) s.onload = onload;
    document.head.appendChild(s);
  }

  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    load('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID));
  }

  if (NAVER_ID) {
    load('https://wcs.naver.net/wcslog.js', function () {
      window.wcs_add = window.wcs_add || {};
      window.wcs_add.wa = NAVER_ID;
      if (window.wcs) window.wcs_do();
    });
  }
})();
