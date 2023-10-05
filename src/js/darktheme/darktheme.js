const body = document.body;
const darkModeToggles = document.querySelectorAll('[data-switch]');

// Define an object to map screen sizes to background image URLs
const backgroundImageUrls = {
  mobile: {
    dark: '/img/background/dark-theme/mobile-bg.webp',
    light: '/img/background/light-theme/mobile-bg.webp',
  },
  tablet: {
    dark: '/img/background/dark-theme/tablet-bg.webp',
    light: '/img/background/light-theme/tablet-bg.webp',
  },
  desktop: {
    dark: '/img/background/dark-theme/desktop-bg.webp',
    light: '/img/background/light-theme/desktop-bg.webp',
  },
};

// Function to set the background image based on screen size and mode
function setBackgroundImage(screenSize, isDarkMode) {
  const imageUrl = isDarkMode
    ? backgroundImageUrls[screenSize].dark
    : backgroundImageUrls[screenSize].light;

  body.style.background = `url(${imageUrl}) 0px 0px / 100% 100% no-repeat`;
}

// Function to save the current mode to local storage with a 24-hour expiry
function saveModeToLocalStorage(isDarkMode) {
  const modeData = {
    isDarkMode: isDarkMode,
    expirationTime: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
  };
  localStorage.setItem('darkMode', JSON.stringify(modeData));
}

// Function to retrieve the saved mode from local storage
function getSavedModeFromLocalStorage() {
  const modeDataString = localStorage.getItem('darkMode');
  if (modeDataString) {
    const modeData = JSON.parse(modeDataString);
    // Check if the saved mode has expired
    if (Date.now() <= modeData.expirationTime) {
      return modeData.isDarkMode;
    }
  }
  return false; // Default to light mode if no saved mode or if it has expired
}

// Listen for changes on the toggle button
darkModeToggles.forEach(btn => {
  btn.addEventListener('change', () => {
    const isDarkMode = btn.checked;

    if (isDarkMode) {
      // If the toggle is checked, enable dark mode
      body.classList.add('dark-mode');
    } else {
      // If the toggle is unchecked, disable dark mode
      body.classList.remove('dark-mode');
    }

    // Determine the screen size based on the viewport width
    const viewportWidth = window.innerWidth;
    let screenSize = 'mobile'; // Default to mobile

    if (viewportWidth >= 768 && viewportWidth < 1280) {
      screenSize = 'tablet';
    } else if (viewportWidth >= 1280) {
      screenSize = 'desktop';
    }

    // Set the background image based on screen size and mode
    // setBackgroundImage(screenSize, isDarkMode);

    // Save the current mode to local storage
    saveModeToLocalStorage(isDarkMode);
  });
});
// Initial setup: determine screen size and set background image
window.addEventListener('DOMContentLoaded', () => {
  const viewportWidth = window.innerWidth;
  let screenSize = 'mobile'; // Default to mobile

  if (viewportWidth >= 768 && viewportWidth < 1280) {
    screenSize = 'tablet';
  } else if (viewportWidth >= 1280) {
    screenSize = 'desktop';
  }

  // Determine the saved mode from local storage
  const savedMode = getSavedModeFromLocalStorage();
  // let isDarkMode;

  // If there's a saved mode, set it as the initial mode
  if (savedMode !== null) {
    darkModeToggles.forEach(btn => {
      btn.checked = savedMode;
      if (btn.checked) {
        body.classList.add('dark-mode');
        // Determine the initial dark mode state based on the toggle's checked state
        // isDarkMode = btn.checked;
      }
    });
  }
});

darkModeToggles.forEach(btn => {
  const isDarkMode = btn.checked;
});

// Check if the saved mode has expired (24 hours) and reset to light mode if needed
const savedMode = getSavedModeFromLocalStorage();
if (savedMode !== null) {
  const modeDataString = localStorage.getItem('darkMode');
  if (modeDataString) {
    const modeData = JSON.parse(modeDataString);
    if (Date.now() > modeData.expirationTime) {
      darkModeToggles.forEach(btn => {
        btn.checked = false; // Reset to light mode
        localStorage.removeItem('darkMode'); // Remove expired mode data
      });
    }
  }
}
