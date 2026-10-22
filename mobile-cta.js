/* 휴대폰 화면에서 스크롤하면 아래쪽에 붙어 따라오는 카카오톡 상담 버튼.
   첫 화면을 지나면 나타나고, 페이지 맨 아래 상담 영역(#contact)이 보이면 숨는다. */
(function () {
  var URL = 'https://pf.kakao.com/_xlgSXX/chat';
  var css = '' +
    '.mcta{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:60;' +
    'transform:translate(-50%,140%);transition:transform .35s cubic-bezier(.2,.8,.2,1);' +
    'display:flex;align-items:center;gap:8px;padding:13px 22px;border-radius:999px;' +
    'background:#FEE500;color:#191600;font:700 15px/1 "Noto Sans KR",sans-serif;text-decoration:none;' +
    'box-shadow:0 10px 30px rgba(0,0,0,.35);white-space:nowrap}' +
    '.mcta.on{transform:translate(-50%,0)}' +
    '.mcta svg{width:18px;height:18px;flex:none}' +
    '@media (min-width:768px){.mcta{display:none}}' +
    '@media (prefers-reduced-motion:reduce){.mcta{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var a = document.createElement('a');
  a.className = 'mcta'; a.href = URL; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', '카카오톡으로 수강 상담하기');
  a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.35 4.66 6.77l-.95 3.48c-.08.3.26.54.52.37l4.13-2.74c.54.06 1.09.1 1.64.1 5.52 0 10-3.58 10-8S17.52 3 12 3z"/></svg>카카오톡 상담';

  function ready() {
    document.body.appendChild(a);
    var contact = document.getElementById('contact');
    var contactSeen = false;
    if (contact && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { contactSeen = es[0].isIntersecting; update(); }, { threshold: 0.2 }).observe(contact);
    }
    function update() { a.classList.toggle('on', window.scrollY > 480 && !contactSeen); }
    addEventListener('scroll', update, { passive: true });
    update();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
