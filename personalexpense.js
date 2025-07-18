const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
        <div>
          <strong>${title}</strong><br>
          <small class="text-muted">${category}</small>
        </div>
        <span class="badge bg-success rounded-pill">₹${amount}</span>
      `;

  expenseList.appendChild(li);
  expenseForm.reset();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("expenseModal")
  );
  modal.hide();
});
