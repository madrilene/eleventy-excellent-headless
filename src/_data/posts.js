require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getPosts() {
  try {
    const fakeUrl = `https://headless.mediao.de/wp-json/wp/v2/posts`;
    const response = EleventyFetch(fakeUrl, {
      duration: '1d',
      type: 'json'
    });
    const articles = await response;
    console.log(fakeUrl);
    return articles;
  } catch (e) {
    console.log(e);
  }
}
module.exports = getPosts;
console.log(getPosts);
