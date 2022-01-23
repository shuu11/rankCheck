export default class MyGas {
  #ss = SpreadsheetApp.getActiveSpreadsheet();

  constructor(name) {
    this.name = name;
  }

  #getSheet() {
    return this.#ss.getSheetByName(this.name);
  }

  getValue(y, x) {
    return this.#getSheet().getRange(y, x).getValue();
  }

  getEndRow() {
    return this.#getSheet().getLastRow();
  }

  getEndColumn() {
    return this.#getSheet().getLastColumn();
  }

  setValue(y, x, val) {
    this.#getSheet().getRange(y, x).setValue(val);
  }
}
