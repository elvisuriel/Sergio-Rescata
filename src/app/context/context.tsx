"use client"
import React, { createContext, useContext, useState } from 'react';

interface SearchContextProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchResults: string[]; // Puedes almacenar aquí las ocurrencias encontradas
    performSearch: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const performSearch = () => {
        // Implementa tu lógica de búsqueda y actualiza searchResults
    };

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, performSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe ser utilizado dentro de SearchProvider');
    }
    return context;
};