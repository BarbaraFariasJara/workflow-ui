/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../hooks/useFilters.jsx';

function storageEvent(setFilters){
  window.addEventListener('storage', (event) => {
      if (event.key === 'DarkMode') {          
          setFilters((prevState) => ({...prevState, darkMode:event.newValue}))
          event.newValue ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
      }
  })
}
function initialState(darkModeStorage){
  darkModeStorage ? document.getElementsByTagName('html')[0].classList.add('dark') : document.getElementsByTagName('html')[0].classList.remove('dark')
}
const darkModeStorage = window.localStorage.getItem('DarkMode') === 'false' ? false : true;

initialState(darkModeStorage)

export function DarkModeToggle() {
    const { filters, setFilters } = useFilters()    
    storageEvent(setFilters)

    function toggle() {      
      setFilters((prevState) => ({
        ...prevState,
        darkMode: !filters.darkMode
      }))
      document.getElementsByTagName('html')[0].classList.toggle('dark')
      window.localStorage.setItem('DarkMode', !filters.darkMode);
    }
  
    function handleClick() {      
      toggle();
    }
  
    function handleKeyDown({ key }) {
      if (key === 'Enter') toggle();
    }
    
    return (
      <button        
        onKeyDown={handleKeyDown}
        onClick={handleClick} 
        className={`z-20 top-4 right-5 inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none ${filters.darkMode ? `bg-[#262626] text-stone-400 focus-visible:ring-slate-500` : `bg-sky-500 text-sky-200 focus-visible:ring-sky-600`}`} 
        id="headlessui-switch-:rb:" 
        role="switch" 
        type="button" 
        tabIndex="0" 
        aria-checked="false" 
        data-headlessui-state={`${filters.darkMode ? `checked` : ``}`}
        title={`${filters.darkMode ? `Desactivar modo orcuro` : `Activar modo oscuro`}`}>
        <span className="sr-only">{`${filters.darkMode ? `Desactivar modo orcuro` : `Activar modo oscuro`}`}</span>
        <svg 
            width="24" 
            height="24" 
            fill="none" 
            aria-hidden="true" 
            className={`${filters.darkMode ? `transition-transform scale-100 duration-300` :`transition-transform scale-0 duration-500`}`}>
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <svg 
            width="24" 
            height="24" 
            fill="none" 
            aria-hidden="true" 
            className={`${filters.darkMode ? `ml-3.5 transition-transform scale-0 duration-500` : `ml-3.5 transition-transform scale-100 duration-300`}`}>
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span 
            className={`${filters.darkMode ? `absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 translate-x-[2.625rem]` : `absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform`}`}>
            <svg 
                width="24" 
                height="24" 
                fill="none" 
                aria-hidden="true" 
                className={`${filters.darkMode ? `flex-none transition duration-500 text-cyan-500 opacity-0 scale-0` : `flex-none transition duration-500 text-cyan-500 opacity-100 scale-100`}`}>
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <svg 
                width="24" 
                height="24" 
                fill="none" 
                aria-hidden="true" 
                className={`${filters.darkMode ? `flex-none -ml-6 transition duration-500 text-slate-700 opacity-100 scale-100` : `flex-none -ml-6 transition duration-500 text-slate-700 opacity-0 scale-0`}`}>
                <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </span>
      </button>
    );
  }