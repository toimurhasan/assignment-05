const completeBtns = document.getElementsByClassName("complete-btn");

for (let i = 0; i < completeBtns.length; i++) {
  completeBtns[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");
    this.setAttribute("disabled", true);

    const taskRemaining = parseInt(document.getElementById("task-remaining").innerText);
    const taskDone = parseInt(document.getElementById("task-done").innerText);

    document.getElementById("task-remaining").innerText = taskRemaining - 1;
    document.getElementById("task-done").innerText = taskDone + 1;

    const grandParent = this.parentNode.parentNode;
    const taskName = grandParent.querySelector("h3").innerText;

    const taskLog = document.createElement("div");
    taskLog.classList.add("bg-blue-100", "p-2", "rounded-lg", "text-gray-800");
    taskLog.innerHTML = `You have Complete The Task ${taskName} at 12:48:15 PM`;

    document.getElementById("task-logs").appendChild(taskLog);
  });
}
