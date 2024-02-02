
export default function Payment() {
    return (

        <div className="text-center mt-8">
            <h2 className="text-lg font-bold mb-4">Selecciona una opción para el aporte:</h2>
            <ul className="list-none p-0">
                <li className="mb-4">
                    <a href="URL_DEL_SERVICIO_DE_PAGO_1" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-700">
                        Pago con Tarjeta
                    </a>
                </li>
                <li className="mb-4">
                    <a href="https://www.paypal.com/co/home" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-700">
                        Pago con PayPal
                    </a>
                </li>
                {/* Agrega más opciones según sea necesario */}
            </ul>
        </div>
    );
};


