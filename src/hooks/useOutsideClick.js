import { useEffect, useRef } from 'react';

// Hook personalizado para manejar clics fuera de un elemento
const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();  // Ejecuta el callback cuando el clic es fuera del elemento
      }
    };

    // Agregar el event listener para el clic
    document.addEventListener('click', handleClickOutside);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback]);  // Solo reinicia si el callback cambia

  return ref;  // Retorna el ref para asociarlo con el elemento
};

export default useOutsideClick;
