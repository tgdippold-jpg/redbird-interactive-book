const navButtons = document.querySelectorAll('[data-screen]');
const screens = document.querySelectorAll('.screen');
const sidebarButtons = document.querySelectorAll('.nav-btn');

function showScreen(screenName) {
  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.id === `screen-${screenName}`);
  });

  sidebarButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => showScreen(button.dataset.screen));

  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showScreen(button.dataset.screen);
    }
  });
});
