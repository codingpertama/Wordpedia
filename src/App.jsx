import { useState } from "react";
import FooterComp from "./components/FooterComp";
import HeroComp from "./components/HeroComp";
import NavbarComp from "./components/NavbarComp";
import SearchComp from "./components/SearchComp";
import WordResult from "./components/WordResult";
import { Spinner } from "flowbite-react";

export default function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWord() {
    setLoading(true);
    setResult(null);
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setResult(result);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    } 
  }

  return (
    <>
      <HeroComp  word={word} setWord={setWord} getWord={getWord}/>
      {loading && (
        <div className="flex justify-center">
          <Spinner aria-label="Default status example" />
        </div>
      )}
      <WordResult result={result}/>
    </>
  );
}