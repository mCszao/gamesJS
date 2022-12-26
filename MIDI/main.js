document.querySelectorAll("button").forEach(
  (btn) =>
    (btn.onclick = () => {
      document.getElementById(`som_${btn.classList[1]}`).play();
    })
);
