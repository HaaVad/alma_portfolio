"use client"
import { useEffect, useState } from 'react';

export function InitialTrack() {

   const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const delay = 5000;
      
        const timeoutId = setTimeout(() => {
          if (initialLoad) {
            setInitialLoad(false);
          }
        }, delay);
      
        return () => clearTimeout(timeoutId);
      }, []);
    return initialLoad
}