document.addEventListener('DOMContentLoaded', function () {
  const learnMoreButtons = document.querySelectorAll('.learn');
  const closeButtons = document.querySelectorAll('.close');
  const popups = document.querySelectorAll('.popup');

  learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Hide all popups and set border-style to hidden
      popups.forEach(popup => {
        popup.style.display = 'none';
        popup.style.borderStyle = 'hidden';
      });

      // Show the selected popup and set border-style to ridge
      popups[index].style.display = 'block';
      popups[index].style.borderStyle = 'ridge';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hide all popups and set border-style to hidden when close button is clicked
      popups.forEach(popup => {
        popup.style.display = 'none';
        popup.style.borderStyle = 'hidden';
      });
    });
  });
});