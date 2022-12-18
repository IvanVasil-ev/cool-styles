document.addEventListener('DOMContentLoaded', function() {
  const NEW_PROJECT_BTN = document.getElementById('new-project');
  const NEW_PROJECT_TOOLIP = document.getElementById('new-project-tooltip');

  NEW_PROJECT_BTN.addEventListener('mouseenter', () => {
    const { left, right } = NEW_PROJECT_TOOLIP.getBoundingClientRect();

    console.log(right + 20, window.innerWidth, (right + 15) > window.innerWidth);

    if ((right + 20) > window.innerWidth) {
      NEW_PROJECT_TOOLIP.style.right = '0px';
      NEW_PROJECT_TOOLIP.style.left = 'unset';
      NEW_PROJECT_TOOLIP.style.transform = 'unset';
    } else if ((left - 20) < 0) {
      NEW_PROJECT_TOOLIP.style.left = '0px';
      NEW_PROJECT_TOOLIP.style.right = 'unset';
      NEW_PROJECT_TOOLIP.style.transform = 'unset';
    } else {
      NEW_PROJECT_TOOLIP.style.right = '50%';
      NEW_PROJECT_TOOLIP.style.left = 'unset';
      NEW_PROJECT_TOOLIP.style.transform = 'translate(50%, 0)';
    }
  });
});
