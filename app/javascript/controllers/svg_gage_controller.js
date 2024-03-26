import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slider", "svg"];

  connect() {
    this.updatePercentage();
  }

  updatePercentage() {
    const percentage = parseFloat(this.data.get("percentage")) || 0;
    const svgWidth = 310; // SVGの幅
    const moveDistance = (svgWidth * percentage) / 100;
    this.svgTarget.style.transform = `translateX(${moveDistance}px)`;
  }
  
}