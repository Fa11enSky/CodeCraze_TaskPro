/* 
Хук для зміни теми.
В константах зберігаються значення кольорів.
для використання імпортуємо в компонент з кнопками що змінюють тему,
 на кнопку, що змінює тему вішається слухач подій "onClick"
 
 conts {selectTheme}=useTheme()

 і в колбек функції передається назва теми "dark" "violet" "light"

 ()=>{
 selectTheme('dark')
 }

Пізніше перероблю під редакс🙃, але зараз в компонентах повино працювати
*/
import { useState } from 'react';

const lightColors = {
  primary_text: '#161616',
  sidebarText: '#161616',
  accent: '#BEDBB0',
  secondary_text: ' rgba(22, 22, 22, 0.5)',
  backgroundSidebar: '#ffffff',
  backgroundHeader: '#ffffff',
  background_taskList: '#E5E5E5',
  background_quote: '#E5E5E5',
  backgroundTaskItem: '#ffffff',
  scrollBar: 'rgba(255, 255, 255, 0.1)',
};

const darkColors = {
  primary_text: '#FFFFFF',
  sidebarText: '#ffffff',
  accent: '#BEDBB0',
  secondary_text: 'rgba(255, 255, 255, 0.5)',
  backgroundSidebar: '#121212',
  backgroundHeader: '#161616',
  background_taskList: '#1F1F1F',
  background_quote: '#1F1F1F',
  backgroundTaskItem: '#121212',
  scrollBar: '#E8E8E8',
};
const violetColors = {
  primary_text: '#161616',
  sidebarText: '#ffffff',
  accent: '#5255bc',
  secondary_text: 'rgba(22, 22, 22, 0.7)',
  backgroundSidebar: '#5255bc',
  backgroundHeader: '#ffffff',
  background_taskList: '#1F1F1F',
  background_quote: '#1F1F1F',
  backgroundTaskItem: '#ffffff',
  scrollBar: 'B8BCFD',
};

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const selectTheme = selectTheme => {
    setTheme(selectTheme);
  };

  let colors = lightColors;
  if (theme === 'dark') {
    colors = darkColors;
  }
  if (theme === 'violet') {
    colors = violetColors;
  }
  if (theme === 'light') {
    colors = lightColors;
  }

  return { colors, currentTheme: theme, selectTheme };
};

export default useTheme;
