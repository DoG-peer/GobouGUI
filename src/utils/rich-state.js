export default class RichState {
  constructor(store) {
    this.state = store.getState();
  }

  addItem(item) {
    this.items = this.items || []
    this.items.push(item)
  }

}
