import playwright from 'playwright';
import fs from 'fs/promises';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/index.htm');

  // 모든 .link_txt 요소를 가져옵니다.
  const chartData = await page.evaluate(() => {
    const songs = Array.from(document.querySelectorAll('.lst50, .lst100'));

    return songs.map((song) => {
      return {
        title: song.querySelector('.ellipsis.rank01 a').innerText,
        artist: song.querySelector('.ellipsis.rank02 a').innerText,
        album: song.querySelector('.ellipsis.rank03 a').innerText,
      };
    });
  });

  await fs.writeFile('melon.json', JSON.stringify(chartData, null, 2));

  await browser.close();
})();
