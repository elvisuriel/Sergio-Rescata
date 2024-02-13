
"use client";
import { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';  // Cambiado a 'compat/app'
import 'firebase/compat/database';

// Configura tu aplicación Firebase con la configuración proporcionada en la consola de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHR8kUPuRmkgE99OE0hDHLQApRXQGk7e8",
    authDomain: "sergio-rescata.firebaseapp.com",
    projectId: "sergio-rescata",
    storageBucket: "sergio-rescata.appspot.com",
    messagingSenderId: "888041840621",
    appId: "1:888041840621:web:bce0197968233b90ef51e4",
    measurementId: "G-37XJCWGL0Z"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

interface VisitCounterAndSearchBarProps {
    onSearch: (searchTerm: string) => void;
    smallScreen: any;
}

export function VisitCounterAndSearchBar({
    onSearch,
    smallScreen,
}: VisitCounterAndSearchBarProps) {
    const [visitCount, setVisitCount] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const visitCountRef = firebase.database().ref('visitCount');

        // Incrementa el contador al cargar la página
        visitCountRef.transaction((count) => (count || 0) + 1);

        // Escucha cambios en el contador y actualiza el estado
        visitCountRef.on('value', (snapshot) => {
            const count = snapshot.val() || 0;
            setVisitCount(count);
        });

        // Detén la escucha cuando el componente se desmonta
        return () => {
            visitCountRef.off();
        };
    }, []);

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex flex-col items-center">
            <div className={`text-lg font-semibold mb-2 ${smallScreen ? 'text-sm' : ''}`}>
                <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-blue-500" />
                Contador de Visitas: {visitCount !== null ? visitCount : 'Cargando...'}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSearchTerm(e.target.value)
                    }
                    placeholder="Buscar..."
                    className={`py-1 border border-gray-300 rounded ${smallScreen ? 'text-sm' : ''
                        }`}
                />
                <button
                    onClick={handleSearch}
                    className={`py-1 bg-blue-500 text-white rounded ${smallScreen ? 'text-sm' : ''
                        }`}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}