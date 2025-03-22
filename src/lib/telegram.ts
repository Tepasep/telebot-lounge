
// This file contains utilities for working with the Telegram Web App

// Access the Telegram WebApp object
export const getTelegramWebApp = () => {
  // @ts-ignore - Telegram WebApp is injected by Telegram
  return window.Telegram?.WebApp;
};

// Get user ID from Telegram WebApp
export const getUserId = (): number | null => {
  const webApp = getTelegramWebApp();
  
  if (!webApp || !webApp.initDataUnsafe || !webApp.initDataUnsafe.user) {
    // For development/testing, return a dummy user ID
    if (process.env.NODE_ENV === 'development') {
      return 12345678;
    }
    return null;
  }
  
  return webApp.initDataUnsafe.user.id;
};

// Initialize the Telegram WebApp
export const initTelegramWebApp = () => {
  const webApp = getTelegramWebApp();
  
  if (webApp) {
    // Notify Telegram that the WebApp is ready
    webApp.ready();
    
    // Expand the WebApp to take the full screen
    webApp.expand();
    
    // Set the main button visibility to false initially
    webApp.MainButton.hide();
  }
};

// Close the Telegram WebApp
export const closeTelegramWebApp = () => {
  const webApp = getTelegramWebApp();
  
  if (webApp) {
    webApp.close();
  }
};
