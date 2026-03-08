import { Button } from "flowbite-react"
import { useState } from "react"

export default function WordResult({ result }) {

    if (!result) return null

    const word = result[0]
    const [showExample, setShowExample] = useState(true)

    return (
        <section className="max-w-4xl ms-20 px-6 py-10 bg-white">

            <h2 className="text-4xl font-bold mb-4 border-b border-gray-300 pb-2">
                {word.word}
            </h2>

            <p className="text-gray-600 mb-6 italic">
                {word.phonetics[0]?.text}
            </p>

            {word.phonetics[0]?.audio && (
                <audio controls className="w-full mb-6 border border-gray-300 rounded p-1">
                    <source src={word.phonetics[0].audio} />
                    Your browser does not support the audio element.
                </audio>
            )}

            <Button color="light" onClick={() => setShowExample(!showExample)} className="my-5">
                {showExample ? "Hide Example" : "Show Example"}
            </Button>

            {word.meanings?.map((meaning, index) => (
                <div key={index} className="mb-6 border border-gray-300 rounded p-4">
                    <h3 className="font-semibold text-lg mb-2 capitalize">
                        {meaning.partOfSpeech}
                    </h3>
                    <p className="mb-2">{meaning.definitions[0]?.definition}</p>
                    {showExample && (
                        <p>
                            Example: {meaning.definitions[0]?.example}
                        </p>
                    )}
                </div>
            ))}
        </section>
    )
}