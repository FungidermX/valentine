const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yayText = document.getElementById("yayText");
const yayImage = document.getElementById("yayImage");
const message = document.querySelector(".message");
const emoji = document.querySelector(".emoji");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";
  yayImage.style.display = "block";
  message.style.display = "none";
  emoji.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
