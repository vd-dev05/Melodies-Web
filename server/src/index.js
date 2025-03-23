import express from 'express';
import puppeteer from 'puppeteer'
import axios from 'axios'
import zingAPI from './zingMp3.js'
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
const songInfo = await zingAPI.getFullInfo()
console.log(songInfo)


// async function getNhacCuaTuiChart() {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto("https://www.nhaccuatui.com/bai-hat/top-20.html");

//     const songs = await page.evaluate(() => {
//         return [...document.querySelectorAll(".list_song .name_song a")]
//             .map(song => song.textContent.trim());
//     });

//     console.log("🎧 Top bài hát trên NhacCuaTui:");
//     console.log(songs.join("\n"));

//     await browser.close();
// }

async function getSongInfo(songId) {
    try {
        const response = await axios.get(`https://zingmp3.vn/api/v2/song/get/info`, {
            params: {
                id: songId
            },
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Referer": "https://zingmp3.vn/"
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error("Lỗi khi lấy thông tin bài hát:", error.message);
    }
}

// Thay songId bằng ID bài hát bạn cần
getSongInfo("2519676343188680993"); 

app.listen(3000, () => {
    // getNhacCuaTuiChart();
    console.log('Server is running on port 3000');
});