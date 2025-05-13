export const switchTheme = (theme: 'light' | 'dark') => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const getCurrentTheme = () => {
  return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
};