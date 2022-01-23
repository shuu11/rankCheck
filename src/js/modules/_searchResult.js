import property from '@js/modules/_getProperty';
import rankLoop from '@js/modules/_rankLoop';

///検索結果を取得
export default (query, domain) => {
  let items = [];

  for (let i = 0; i < 2; i++) {
    let start = i * 10 + 1;
    let url = `https://www.googleapis.com/customsearch/v1?key=${property.apiKey}&cx=${property.searchId}&q=${query}&start=${start}`;
    let response = UrlFetchApp.fetch(url);
    let json = response.getContentText();
    let data = JSON.parse(json);

    for (let j = 0; j < 10; j++) {
      try {
        items.push(data['items'][j]['link']);
      } catch (e) {
        console.log(e.stack);
        Browser.msgBox(e.stack);
      }
    }
  }
  return rankLoop(items, domain);
};
