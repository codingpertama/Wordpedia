export default function SearchComp({ word, setWord, getWord }) {
    return (
        <div className="flex w-200 border border-black">
            <input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                type="text"
                placeholder="Search any word..."
                className="flex-1 px-6 py-4 outline-none"
            />
            <button className="bg-black text-white px-8" onClick={getWord}>
                Search
            </button>
        </div>
    )
}