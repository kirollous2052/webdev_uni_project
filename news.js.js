
const moreContents = document.querySelectorAll('.more-content');

const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', function() {
    
    const moreContent = moreContents[index];
    if (moreContent.style.display === 'none') {
      moreContent.style.display = 'block';
      toggleButton.textContent = 'Read less';
    } else {
      moreContent.style.display = 'none';
      toggleButton.textContent = 'Read more';
    }
  });
});
