import  { useState, useEffect} from 'react';

// "use" is a convention for custom hooks, it is not required but it is a good practice to follow
export default function useTheme() {
    
    // state for the theme, default is dark
    const [isDark, setIsDark] = useState(true);

    // an effect to update the DOM
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },[isDark]);

    // function to toggle the theme
    const toggleTheme = () => {
        setIsDark((prevIsDark) => !prevIsDark);
    }

    // return the state and the toggle button
    return [isDark, toggleTheme];

}
