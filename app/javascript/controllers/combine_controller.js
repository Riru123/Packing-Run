import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="combine"
export default class extends Controller {
  connect() {
  }
  // JavaScriptコントローラー内のメソッド
  handleClick(event) {
    this.toggleRemove(event);
    this.closeOptions(event);
  }

}
