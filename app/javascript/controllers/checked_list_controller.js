import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "form"];

  connect() {
    this.checkboxTarget.addEventListener("change", this.submitForm.bind(this));
  }

  submitForm() {
    this.formTarget.submit();
  }
}


