import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["trigger", "options"];


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

  showOptions() {
    // クリックされた要素自体を非表示にする
    this.triggerTarget.classList.add("d-none");

    // クリックされた要素の親要素を非表示にする
    this.optionsTarget.classList.remove("d-none");
  }

  closeOptions(event) {
      // Get the clicked element
      const clickedElement = event.target;
      const checklistsElement = clickedElement.closest(".checklists");
      // Check if the clicked element is within the checklist area
    if (!checklistsElement) {
        // Add d-none class to the trigger if clicked outside of the checklist
        this.optionsTarget.classList.add("d-none");
        this.triggerTarget.classList.remove("d-none");
        console.log("Hi")
    }
  }
}



