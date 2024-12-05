import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log('Valor de count:', count);
        }, 2000)

        return () => {
            console.log('Estoy siendo LIMPIADO');
            clearTimeout(timer)
        }
    }, [count])
    //array de dependencias

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-700">Count: {count}</h1>
                <div className="space-x-4">
                    <button
                        onClick={() => {
                            if (count <= 0) {
                                return;
                            } else {
                                setCount(count - 1)
                            }
                        }}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Disminuir
                    </button>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        Aumentar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;