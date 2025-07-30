// Cookie utility functions
export const setCookie = (name, value, days = 30) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

// Navigation tracking functions
export const setInternalNavigation = () => {
  sessionStorage.setItem('isInternalNavigation', 'true');
};

export const isInternalNavigation = () => {
  return sessionStorage.getItem('isInternalNavigation') === 'true';
};

export const clearNavigationFlag = () => {
  sessionStorage.removeItem('isInternalNavigation');
};

// Check if this is the first visit in this session
export const isFirstVisitInSession = () => {
  const firstVisit = !sessionStorage.getItem('hasVisitedInSession');
  if (firstVisit) {
    sessionStorage.setItem('hasVisitedInSession', 'true');
  }
  return firstVisit;
};
