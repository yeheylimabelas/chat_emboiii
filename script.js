document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    if (!sessionStorage.getItem("firstLoad")) {
      sessionStorage.setItem("firstLoad", true);
      window.location.reload();
    } else {
      sessionStorage.removeItem("firstLoad");
    }
  };

  // Mendefinisikan elemen audio
  const soundDatang = document.getElementById("audio2");
  const soundKirim = document.getElementById("audio3");

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const chat1 = document.getElementById("chat1");
  const chat2 = document.getElementById("chat2");
  const chat3 = document.getElementById("chat3");
  const chat4 = document.getElementById("chat4");
  const chatInput = document.getElementById("chatInput");
  const sendButton = document.querySelector(".send-button");

  chat1.style.display = "block";
  chat1.innerHTML += `<span class="message-time">${getCurrentTime()}</span>`;
  chatInput.value = "Manusia lah";

  sendButton.addEventListener("click", function () {
    if (chatInput.value === "Manusia lah" && chat2.style.display === "none") {
      chatInput.value = "";
      chat2.style.display = "block";
      chat2.innerHTML += `<span class="message-time">${getCurrentTime()}</span>`;
      // Memainkan suara_kirim ketika chat2 muncul
      soundKirim.play();
      setTimeout(() => {
        chat3.style.display = "block";
        chat3.innerHTML += `<span class="message-time">${getCurrentTime()}</span>`;
        chatInput.value = "Ohh, ya hablum minannas";
        // Memainkan suara_datang ketika chat3 muncul
        soundDatang.play();
      }, 2000);
    } else if (
      chatInput.value === "Ohh, ya hablum minannas" &&
      chat4.style.display === "none"
    ) {
      chatInput.value = "";
      chat4.style.display = "block";
      chat4.innerHTML += `<span class="message-time">${getCurrentTime()}</span>`;
      // Memainkan suara_kirim ketika chat4 muncul
      soundKirim.play();
      setTimeout(() => {
        var myModal2 = new bootstrap.Modal(document.getElementById("popup2"), {
          backdrop: "static",
          keyboard: false,
        });
        myModal2.show();
      }, 2000);
    }
  });

  const chatContainer = document.querySelector(".chat-container");
  chatInput.style.width = `${chatContainer.offsetWidth}px`;

  var myModal = new bootstrap.Modal(document.getElementById("popup"), {
    backdrop: "static",
    keyboard: false,
  });
  myModal.show();

  document.getElementById("playAudio").addEventListener("click", function () {
    const audio = document.getElementById("audio");
    audio.play();
    myModal.hide();
  });

  document
    .getElementById("popup")
    .addEventListener("hidden.bs.modal", function () {
      const audio = document.getElementById("audio");
      audio.play();
    });
});
async function menuju() {
  const pesanwhatsapp = "Wow sangat awikwok sekali kamu emboiii";
  const url =
    "https://api.whatsapp.com/send?phone=6281326561934&text=" +
    encodeURIComponent(pesanwhatsapp);
  window.location.href = url;
}
