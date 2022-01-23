import MyGas from '@js/modules/_gas';
import getProperty from '@js/modules/_getProperty';
import searchResult from '@js/modules/_searchResult';

const myGas = new MyGas('rank');
const endRow = myGas.getEndRow();
const endColumn = myGas.getEndColumn();

const date = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd');

//シートに順位を書き込む
export default () => {
  myGas.setValue(1, endColumn + 1, date);

  for (let i = 2; i <= endRow; i++) {
    try {
      let query = myGas.getValue(i, 1);
      let rank = searchResult(query, getProperty.domain);

      myGas.setValue(i, endColumn + 1, rank);
    } catch (e) {
      console.log(e.stack);
      Browser.msgBox(e.stack);
    }
  }
};
