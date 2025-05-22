import { create } from 'zustand'


export interface ThemeState{
    theme: "light" | "dark"
    toggleTheme: () => void
}



const themeStore = create<ThemeState>((set)=>({
    theme : "dark",
    toggleTheme: () => {
        set((state) => {
            const newTheme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
            return { theme: newTheme };
        });
    },
})
)
export default themeStore