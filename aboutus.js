const toggleButton = document.getElementById('toggleButton');
const myTable = document.getElementById('myTable');

toggleButton.addEventListener('click', function() {
  if (myTable.style.display === 'none') {
    myTable.style.display = 'table'; // Show the table
  } else {
    myTable.style.display = 'none'; // Hide the table
  }
});
