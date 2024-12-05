import { useEffect, useState } from "react";

export default function MemeGenerator() {

    // declarar el estado
    const [meme, setMeme] = useState('')

    // usar useEffect para consultar a la api
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data.memes);
                const meme = data.data.memes;
                const randomMeme = meme[Math.floor(Math.random() * meme.length)]
                setMeme(randomMeme.url)
            })

        // const fetchMemes = async () => {
        //     try {
        //         const response = await fetch('https://api.imgflip.com/get_memes')
        //         const data = await response.json()
        //         console.log(data.data.memes);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // fetchMemes()
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