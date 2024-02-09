// VisitCounterAndSearchBar.tsx
"use client";
import { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface VisitCounterAndSearchBarProps {
    onSearch: (searchTerm: string) => void;
    smallScreen: any
}

export function VisitCounterAndSearchBar({ onSearch, smallScreen }: VisitCounterAndSearchBarProps) {
    const [visitCount, setVisitCount] = useState(0);
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
        <div className=" flex flex-col items-center ">
            <div className={`text-lg font-semibold mb-2 ${smallScreen ? 'text-sm' : ''}`}>
                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-blue-500" />
                Contador de Visitas: {visitCount}
            </div>
            <div className=" flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    className={`  py-1 border border-gray-300 rounded ${smallScreen ? 'text-sm' : ''}`}
                />
                <button
                    onClick={handleSearch}
                    className={` py-1 bg-blue-500 text-white rounded ${smallScreen ? 'text-sm' : ''}`}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}