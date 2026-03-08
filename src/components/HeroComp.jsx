import SearchComp from "./SearchComp";

export default function HeroComp({ word, setWord, getWord}) {
    return (
        <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-8 pt-24 pb-32">
                <div className="flex items-center gap-4 mb-8">
                    <div className="text-2xl font-bold">____</div>
                    <p className="text-sm tracking-wider text-gray-500">
                        THE WORD DICTIONARY
                    </p>
                </div>

                <h1 className="text-7xl font-serif font-bold leading-tight mb-10">
                    Every word,
                    <br />
                    <span className="italic text-gray-500 font-light">
                        explained.
                    </span>
                </h1>
                <SearchComp word={word} setWord={setWord} getWord={getWord}/>
            </div>
        </section>
    )
}