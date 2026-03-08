export default function AboutComp() {
    return (
        <section className="bg-white min-h-screen px-6 py-20">

            <div className="max-w-5xl mx-auto">

                {/* HERO */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="text-2xl font-bold">____</div>
                        <p className="text-sm tracking-widest text-gray-500">
                            ABOUT WORDPEDIA
                        </p>
                    </div>
                    <h1 className="text-7xl font-serif font-bold leading-tight mb-10">
                        Understanding words,
                        <br />
                        <span className="italic text-gray-500 font-light">
                            simplified.
                        </span>
                    </h1>

                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        Wordpedia is a minimal dictionary web application designed to help
                        you quickly discover the meaning, pronunciation, and usage of
                        words. Built with a clean interface, it focuses on speed,
                        simplicity, and readability.
                    </p>
                </div>

                {/* FEATURES */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">

                    <div className="border border-gray-200 p-6 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">
                            Fast Search
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Instantly find the meaning of any word with a simple and fast
                            search experience.
                        </p>
                    </div>

                    <div className="border border-gray-200 p-6 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">
                            Pronunciation
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Listen to correct word pronunciations directly from the
                            dictionary API.
                        </p>
                    </div>

                    <div className="border border-gray-200 p-6 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">
                            Minimal Interface
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Designed with a clean black and white interface that keeps
                            focus on the words themselves.
                        </p>
                    </div>

                </div>

                {/* TECH STACK */}
                <div className="border-t border-gray-200 pt-12">

                    <h2 className="text-2xl font-semibold mb-6">
                        Built With
                    </h2>

                    <div className="flex flex-wrap gap-4 text-sm">

                        <span className="border border-gray-300 px-4 py-2">
                            <a href="https://react.dev/">
                            React
                            </a>
                        </span>

                        <span className="border border-gray-300 px-4 py-2">
                            <a href="https://tailwindcss.com/">
                            Tailwind CSS
                            </a>
                        </span>

                        <span className="border border-gray-300 px-4 py-2">
                            <a href="https://dictionaryapi.dev/">
                            Dictionary API
                            </a>
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}