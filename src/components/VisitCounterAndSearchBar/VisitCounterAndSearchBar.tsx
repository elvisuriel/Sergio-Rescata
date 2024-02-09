// VisitCounterAndSearchBar.tsx
"use client";
import { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface VisitCounterAndSearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export function VisitCounterAndSearchBar({ onSearch }: VisitCounterAndSearchBarProps) {
    const [visitCount, setVisitCount] = useState(10000);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedCount = parseInt(localStorage.getItem('visitCount') ?? '0', 10);
        setVisitCount(storedCount + 1);
    }, []);

    useEffect(() => {
        localStorage.setItem('visitCount', visitCount.toString());
    }, [visitCount]);

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex flex-col items-center justify-center my-6">
            <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500 text-2xl mr-2" />
                <p className="text-lg font-semibold">Contador de Visitas: {visitCount}</p>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    className="p-2 border border-gray-300 rounded-l focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}
