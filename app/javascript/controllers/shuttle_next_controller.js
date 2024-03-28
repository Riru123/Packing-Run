import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["item", "btn", "form"];
  static values = { index: Number };

  connect() {
    this.indexValue = 0;
    this.btnTargets.forEach((button) => {
      btn.addEventListener("click", this.submitForm.bind(this));
    });
    this.showCurrentItem();
    this.synth = window.speechSynthesis;
  }

  nextItem() {
    if (this.indexValue < this.itemTargets.length - 1) {
      this.indexValue++;
    } else {
      this.indexValue = 0;
    }
    this.showCurrentItem();
    this.speakItemTitle();
  }

  speakItemTitle() {
    const currentItem = this.itemTargets[this.indexValue];
    const title = currentItem.dataset.shuttleNextTarget;
    const utterance = new SpeechSynthesisUtterance(title);
    this.synth.speak(utterance);
  }

  showCurrentItem() {
    this.itemTargets.forEach((item, index) => {
      if (index === this.indexValue) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  }
}
