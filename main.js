function showPopup(src, description) {
    const popup = document.getElementById('popup');
    const popupImg = popup.querySelector('img');
    const popupText = popup.querySelector('p');
    popupImg.src = src;
    popupText.innerHTML = description; // テキストをクリア
    popup.style.display = 'flex';
  
  // フェードインアニメーションを適用
  popupText.style.opacity = 0;
  setTimeout(() => {
    popupText.style.transition = 'opacity 2s';
    popupText.style.opacity = 1;
  }, 0);
}
  
  // ポップアップを非表示にするイベントリスナーを追加
  document.getElementById('popup').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  // 画像にクリックイベントを追加
  document.querySelectorAll('#works img').forEach(img => {
    img.addEventListener('click', function() {
      showPopup(this.src, this.dataset.description);
    });
  });

  function typeWriter(element, text, delay = 100) {
    element.innerHTML = ''; // テキストをクリア
    let i = 0;
    function type() {
      if (i < text.length) {
        if (text.substring(i, i + 4) === '<br>') {
          element.innerHTML += '<br>';
          i += 4;
        } else {
          element.innerHTML += text.charAt(i);
          i++;
        }
        setTimeout(type, delay);
      }
    }
    type();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = [
      { selector: '.p1', text: 'Here is my portfolio.' },
      { selector: '.p2', text: 'ここは私のポートフォリオです。' },
      { selector: '.p3', text: '这是我的投资组合。' },
      { selector: '.p4', text: 'Este es mi portafolio.' },
      { selector: '.p5', text: 'Voici mon portfolio.' },
      { selector: '.p6', text: 'यहाँ मेरा पोफोलियो है.' },
      { selector: '.p7', text: '여기가 제 포트폴리오입니다.' },
      { selector: '.p8', text: '絵を描きます。' },
      { selector: '.p9', text: '使用ソフトはCLIP STUDIO PAINTです。' }
    ];

      // 最初にパラグラフ内の文字をクリア
  paragraphs.forEach(p => {
    const element = document.querySelector(p.selector);
    if (element) {
      element.innerHTML = '';
    }
  });
  
    paragraphs.forEach((p, index) => {
      const element = document.querySelector(p.selector);
      if (element) {
        setTimeout(() => {
          typeWriter(element, p.text);
        }, index * 2000); // 各段落の表示を遅らせる
      }
    });
  });
