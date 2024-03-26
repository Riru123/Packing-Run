import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form", "threedots", "trigger", "functions"];

  connect() {
    // Hide the form field initially
    this.formTarget.classList.add("d-none");
  }

  toggleAdd(event) {
    // Get the clicked element
    const clickedElement = event.target;
  
    // Check if the clicked element or its parent is within the form target
    if (this.formTarget.contains(clickedElement) || clickedElement.closest(".d-none") || clickedElement.closest("[data-toggle-target='threedots']") || clickedElement.closest(".status-checkbox")) {
      // Click occurred within the form area, form is already hidden, or threedots button is clicked, do nothing
      return;
    }
  
    // Check if the clicked element is inside the checklist container
    const checklistElement = clickedElement.closest(".checklist");
    if (checklistElement) {
      // Check if the clicked element is inside the 'inside' class
      const insideElement = clickedElement.closest(".inside");
      if (!insideElement) {
        // Toggle the visibility of the form field
        this.formTarget.classList.toggle("d-none");
      } else {
      // Click occurred outside the checklist container, always remove 'd-none'
      this.formTarget.classList.remove("d-none");
    }
  
    }
    // If the form field is now visible
    if (!this.formTarget.classList.contains("d-none")) {
      // Find the text field within the form target
      const textField = document.getElementById('firstinput');
  
      // If the text field is available
      if (textField) {
        // Focus on the form field
        textField.focus();
        // Automatically select the text
        textField.select();
      }
    }

  }

  toggleRemove(event) {
    // Get the clicked element
    const clickedElement = event.target;
    const checklistElement = clickedElement.closest(".checklist");

    // If the clicked element is within the checklist area, do nothing
    if (checklistElement) {
      return;
    }

    // Toggle the visibility of the form field
    this.formTarget.classList.add("d-none");
  }

  showOptions() {
    // クリックされた要素自体を非表示にする
    this.triggerTarget.classList.add("d-none");

    // クリックされた要素の親要素を非表示にする
    this.functionsTarget.classList.remove("d-none");
  }


  hideOptions(event) {
    // Get the clicked element
    const clickedElement = event.target;
    // Check if the clicked element is within the checklist area
    if (clickedElement.closest(".checklist")) {
      // If the clicked element is within the checklist area, do nothing
      return;
    }
  
    // If the clicked element is outside the checklist area
    // Hide the options and show the trigger
    this.triggerTarget.classList.remove("d-none");
    this.functionsTarget.classList.remove("d-none");
    console.log("hi")
  }
  

  handleModalShow(event) {
    // クリックされたリンクからデータを取得
    const link = event.relatedTarget;
    const itemId = link.getAttribute("data-modal-item-id");

    // モーダル内のアクションにItemのIDを設定
    this.modalTarget.setAttribute("data-modal-item-id", itemId);
  }

  // モーダル内でのクリックイベントに対応するメソッド
  setItemId() {
    // モーダル内での処理を追加
    const itemId = this.modalTarget.getAttribute("data-modal-item-id");
    console.log("Item ID:", itemId);

    // ここで必要な処理を実行
  }

  submitForm() {
    // Show the form field for the next entry
    this.formTarget.classList.remove("d-none");
    
    // Focus on the form field for the next entry
    const textField = document.getElementById('firstinput');
    if (textField) {
      textField.focus();
      textField.select();
    }
  }
}
