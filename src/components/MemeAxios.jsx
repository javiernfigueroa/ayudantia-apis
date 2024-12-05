import { useEffect, useState } from "react";
import axios from 'axios'

export default function MemeAxios() {

    // declarar el estado
    const [meme, setMeme] = useState('')

    // usar useEffect para consultar a la api
    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then((response) => {
                const meme = response.data.data.memes;
                const randomMeme = meme[Math.floor(Math.random() * meme.length)]
                setMeme(randomMeme.url)
            })
    }, [])

    return (
        <main className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
            <h1 className="text-4xl font-bold text-gray-700 mb-2">
                Meme Generator 🎨
            </h1>
            {meme && (
                <img
                    src={meme}
                    alt="Meme"
                    className="w-full max-w-md h-80 object-cover rounded-lg"
                />
            )
            }

        </main>
    );
}