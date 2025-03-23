import { CookieJar } from 'tough-cookie'
import { FileCookieStore } from 'tough-cookie-file-store'
import { readFileSync, existsSync, closeSync, openSync } from 'fs'
import { getHash256, getHmac512 } from './encrypt.js'

const URL_API = 'https://zingmp3.vn'
const API_KEY = '88265e23d4284f25963e6eedac8fbfa3'
const SECRET_KEY = '2aa2d1c561e809b267f3638c4a307aab'
const VERSION = '1.4.2'
const cookiePath = 'ZingMp3.json'

class ZingMp3API {
  constructor() {
    this.time = null
    this.cookieJar = this.initializeCookieJar()
  }

  initializeCookieJar() {
    if (!existsSync(cookiePath)) {
      closeSync(openSync(cookiePath, 'w'))
    }

    return new CookieJar(new FileCookieStore(cookiePath))
  }

  async ensureCookies() {
    if (!this.hasValidCookies()) {
      const response = await fetch(`${URL_API}/api/v2/user/get/info`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateCookiesFromResponse(response);
    }
  }

  getCurrentTime() {
    return this.time = Math.floor(Date.now() / 1000)
  }

  generateSignature(path, params, hasParam) {
    const paramString = new URLSearchParams(params).toString()
    const hashContent = `ctime=${this.time}${hasParam ? '' : paramString}`
    return getHmac512(`${path}${getHash256(hashContent)}`, SECRET_KEY)
  }

  fetchAPI(options) {
      const { path, params, hasParam = false } = options;
      const url = `${URL_API}${path}`;
      const signature = this.generateSignature(path, params, hasParam);

      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'x-api-key': API_KEY,
            'x-signature': signature,
            'Cookie': this.getCookieHeader()
          }
        })
          .then(response => {
            if (!response.ok) {
              return response.json().then(errData => {
                reject(new Error(`Error: ${errData.msg} (status: ${response.status})`));
              });
            }
            return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    }
  updateCookiesFromResponse(response) {
    const cookies = response.headers.get('set-cookie');
    if (cookies) {
      cookies.split(',').forEach(cookie => {
        this.cookieJar.setCookieSync(cookie, URL_API);
      });
    }
  }

  hasValidCookies() {
    return this.cookieJar.store.idx['zingmp3.vn']?.['/']?.cookies?.length > 0;
  }

  getCookieHeader() {
    return this.cookieJar.getCookieStringSync(URL_API)
  }

  // API Methods
  async getFullInfo(id) {
    const [info, streaming] = await Promise.all([
      this.getInfoMusic(id),
      this.getStreaming(id)
    ])
    return { ...info, streaming }
  }

  getSectionPlaylist(id) {
    return this.fetchAPI({
      path: '/api/v2/playlist/getSectionBottom',
      params: { id }
    })
  }

  getDetailPlaylist(id) {
    return this.fetchAPI({
      path: '/api/v2/page/get/playlist',
      params: { id }
    })
  }

  getDetailArtist(alias) {
    return this.fetchAPI({
      path: '/api/v2/page/get/artist',
      params: { alias },
      hasParam: true
    })
  }

  getInfoMusic(id) {
    return this.fetchAPI({
      path: '/api/v2/song/get/info',
      params: { id }
    })
  }

  getStreaming(id) {
    return this.fetchAPI({
      path: '/api/v2/song/get/streaming',
      params: { id }
    })
  }

  // ...other API methods
}

export default new ZingMp3API()
