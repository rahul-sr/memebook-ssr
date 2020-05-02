
import fetch from 'node-fetch';
const baseUrl = 'https://meme-api.herokuapp.com/gimme/';


async function getSortedPostsData() {
  const res = await fetch(`https://meme-api.herokuapp.com/gimme/dankmemes/50`)
  return res.json()
}

async function getMemes(url) {
  try {
    const res = await fetch(baseUrl + url);
    let result = await res.json();
    result = result || { memes: [] };

    return result.memes.map((item) => {
      const url = item.url.split("i.redd.it")[1];
      return {
        url: `/api/image?url=${url}`,
        title: item.title
      }
    });
  }
  catch (err) {
    return { memes: [] };
  }
}

export {
  getSortedPostsData,
  getMemes
}