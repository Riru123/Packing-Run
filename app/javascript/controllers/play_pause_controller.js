import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "icon" ];
  

  togglePlayPause() {
    const icon = this.iconTarget;
    const path = icon.querySelector("path");
    const audio = document.querySelector("audio"); // MP3 ファイルを取得

    if (icon.classList.contains("bi-play-circle-fill")) {
      icon.classList.remove("bi-play-circle-fill");
      icon.classList.add("bi-pause-circle-fill");
      icon.setAttribute("fill", "gray");
      path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5");
      icon.setAttribute("viewBox", "0 0 16 16");
      audio.play(); // MP3 ファイルを再生
    } else {
      icon.classList.remove("bi-pause-circle-fill");
      icon.classList.add("bi-play-circle-fill");
      icon.setAttribute("fill", "#8298fd");
      path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z");
      icon.setAttribute("viewBox", "0 0 16 16");
      audio.pause(); // MP3 ファイルを一時停止
      audio.currentTime = 0; // MP3 ファイルを再生位置をリセット
    }
  }
}

