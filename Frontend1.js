const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseDateInput = document.getElementById('expense-date');
const totalExpenseDisplay = document.getElementById('total-expense');
const expenseList = document.getElementById('expense-list').querySelector('tbody');

// Initialize variables
let totalExpense = 0;

// Function to update total expense
function updateTotalExpense(amount) {
  totalExpense += amount;
  
  totalExpenseDisplay.textContent = totalExpense;
}

// Function to add expense to the list
function addExpenseToList(name, amount, date) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>$${amount}</td>
    <td>${date}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Add delete functionality
  row.querySelector('.delete-btn').addEventListener('click', () => {
    row.remove();
    updateTotalExpense(-amount);
  });

  expenseList.appendChild(row);
}

// Handle form submission
expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = expenseNameInput.value;
  const amount = parseFloat(expenseAmountInput.value);
  const date = expenseDateInput.value;

  if (name && amount && date) 
    {
    addExpenseToList(name, amount, date);
    updateTotalExpense(amount);

    // Clear form inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseDateInput.value = '';
  } 
  else 
  {
    alert('Please fill out all fields');
  }
});