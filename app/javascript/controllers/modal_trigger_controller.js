import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"];

  showModal() {
    this.modalTarget.classList.add("show");
  }

  hideModal() {
    this.modalTarget.classList.remove("show");
  }
}

