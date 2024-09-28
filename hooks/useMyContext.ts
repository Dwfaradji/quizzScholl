'use client';
import {  useContext  } from 'react';
import {Context} from "@/context/UserProvider";


// Hook pour utiliser le Context
export const useMyContext = () => {
    return useContext(Context);
};
