// Numeroloji Hesaplama Fonksiyonu
const calculateNumerology = (name) => {
  const numerologyMap = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  };

  let total = [...name.toUpperCase()].reduce((acc, char) => acc + (numerologyMap[char] || 0), 0);

  while (total > 9 && ![11, 22, 33].includes(total)) {
    total = [...String(total)].reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return total;
};

// Burç Hesaplama Fonksiyonu
const getZodiacSign = (day, month) => {
  const cutoffs = [120, 219, 320, 420, 521, 621, 722, 823, 923, 1023, 1122, 1222, 1231];
  const signs = ['Oğlak', 'Kova', 'Balık', 'Koç', 'Boğa', 'İkizler', 'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak'];

  const dateNumber = month * 100 + day;
  return signs[cutoffs.findIndex(cutoff => dateNumber <= cutoff)];
};

// Gezegen ve Şanslı Numarası
const getPlanetAndLuckyNumber = (zodiac) => {
  const zodiacData = {
    Koç: ['Mars', 9], Boğa: ['Venüs', 6], İkizler: ['Merkür', 5], Yengeç: ['Ay', 2], Aslan: ['Güneş', 1], Başak: ['Merkür', 5], Terazi: ['Venüs', 6], Akrep: ['Mars', 9], Yay: ['Jüpiter', 3], Oğlak: ['Satürn', 8], Kova: ['Uranüs', 4], Balık: ['Neptün', 7],
  };
  return zodiacData[zodiac] || ['Bilinmiyor', 0];
};

// Doğal Taş Önerileri
const suggestNaturalStones = (numerology, zodiac) => {
  const stoneData = {
    1: ['Elmas', 'Yakut', 'Kuvars'], 2: ['Ay Taşı', 'İnci', 'Akuamarin'], 3: ['Ametist', 'Turmalin', 'Topaz'], 4: ['Kehribar', 'Yeşim', 'Obsidyen'], 5: ['Turkuaz', 'Akik', 'Sitrin'], 6: ['Safir', 'Zümrüt', 'Kuvars'], 7: ['Kiyanit', 'Lapis Lazuli', 'Florit'], 8: ['Oniks', 'Kaplan Gözü', 'Hematit'], 9: ['Yakut', 'Granat', 'Rodonit'],
  };

  const zodiacStones = {
    Koç: 'Yakut', Boğa: 'Zümrüt', İkizler: 'Akik', Yengeç: 'Ay Taşı', Aslan: 'Elmas', Başak: 'Sitrin', Terazi: 'Safir', Akrep: 'Topaz', Yay: 'Turkuaz', Oğlak: 'Oniks', Kova: 'Akuamarin', Balık: 'Ametist',
  };

  const stones = stoneData[numerology] || [];
  const zodiacStone = zodiacStones[zodiac];

  if (zodiacStone && !stones.includes(zodiacStone)) {
    stones.push(zodiacStone);
  }

  return stones;
};

document.getElementById('birthdate').addEventListener('input', (e) => {
  let input = e.target.value.replace(/\D/g, '');
  if (input.length > 2) input = input.slice(0, 2) + '/' + input.slice(2);
  if (input.length > 5) input = input.slice(0, 5) + '/' + input.slice(5, 9);

  const [day, month, year] = input.split('/').map(Number);
  if (month > 12) input = input.slice(0, 3);
  if (day > 31) input = input.slice(0, 2);

  e.target.value = input;
});

const checkValue = (str, max) => {
  let num = parseInt(str);
  if (isNaN(num) || num <= 0 || num > max) num = 1;
  return num.toString().padStart(2, '0');
};

// Form Submit İşleyici
document.getElementById('analysisForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.style.display = 'none';

  // Girdileri al
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const birthdate = document.getElementById('birthdate').value.trim();

  // Doğum tarihini kontrol et
  const dateParts = birthdate.split('/');
  if (dateParts.length !== 3 || dateParts.some(part => isNaN(part))) {
    errorMessage.textContent = 'Lütfen geçerli bir tarih formatı girin (GG/AA/YYYY)';
    errorMessage.style.display = 'block';
    return;
  }

  const [day, month, year] = dateParts.map((part, index) => checkValue(part, index === 0 ? 31 : (index === 1 ? 12 : 9999)));

  // Hesaplamaları yap
  const fullName = `${name} ${surname}`;
  const numerology = calculateNumerology(fullName);
  const zodiac = getZodiacSign(parseInt(day), parseInt(month));
  const [planet, luckyNumber] = getPlanetAndLuckyNumber(zodiac);
  const stones = suggestNaturalStones(numerology, zodiac);

  // Sonuçları göster
  const resultsSection = document.getElementById('resultsSection');
  resultsSection.innerHTML = `
    <div class="result-card">
      <h3>Kişisel Bilgiler</h3>
      <div class="result-item">
        <span>Ad Soyad:</span>
        <span>${fullName}</span>
      </div>
      <div class="result-item">
        <span>Doğum Tarihi:</span>
        <span>${day}/${month}/${year}</span>
      </div>
    </div>
    <div class="result-card">
      <h3>Astrolojik Analiz</h3>
      <div class="result-item">
        <span>Burç:</span>
        <span>${zodiac}</span>
      </div>
      <div class="result-item">
        <span>Gezegen:</span>
        <span>${planet}</span>
      </div>
      <div class="result-item">
        <span>Uğurlu Sayı:</span>
        <span>${luckyNumber}</span>
      </div>
    </div>
    <div class="result-card">
      <h3>Önerilen Doğal Taşlar</h3>
      <div class="stone-list">
        ${stones.slice(0, 3).map(stone => `<div class="stone-item">${stone}</div>`).join('')}
      </div>
    </div>
  `;

  resultsSection.classList.add('active');
});