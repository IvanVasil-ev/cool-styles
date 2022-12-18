document.addEventListener('DOMContentLoaded', function() {
  const DROPDOWN_BTN = document.getElementById('dropdown');
  const NEW_PROJECT_BTN = document.getElementById('new-project');
  const NEW_PROJECT_TOOLIP = document.getElementById('new-project-tooltip');

  DROPDOWN_BTN.addEventListener('click', (el) => {

  });

  NEW_PROJECT_BTN.addEventListener('mouseenter', () => {
    const { right } = NEW_PROJECT_TOOLIP.getBoundingClientRect();
    if ((right + 15) > window.innerWidth) {
      NEW_PROJECT_TOOLIP.style.right = '0px';
      NEW_PROJECT_TOOLIP.style.transform = 'unset';
    } else {
      NEW_PROJECT_TOOLIP.style.right = '50%';
      NEW_PROJECT_TOOLIP.style.transform = 'translate(50%, 0)';
    }
  });
});
