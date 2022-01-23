///順位をチェック
export default (items, domain) => {
  let rank = '圏外';

  for (let i = 0; i < items.length; i++) {
    if (items[i].match(domain)) {
      rank = i + 1;
      break;
    }
  }

  return rank;
};
