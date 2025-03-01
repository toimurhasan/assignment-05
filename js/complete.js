const completeBtns = document.getElementsByClassName("complete-btn");

for (let i = 0; i < completeBtns.length; i++) {
  completeBtns[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");
    this.setAttribute("disabled", true);
  });
}
