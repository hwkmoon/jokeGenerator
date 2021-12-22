import "./styles.css";
import useRandomJoke from "./jokeGenerator.js";
import { useRef, useState } from "react";

export default function App() {
  // Custom
  const [programming, setProgramming] = useState("");
  const [misc, setMisc] = useState("");
  const [dark, setDark] = useState("");
  const [pun, setPun] = useState("");
  const [spooky, setSpooky] = useState("");
  const [christmas, setChristmas] = useState("");
  const [custom, setCustom] = useState([programming, misc, dark, pun, spooky, christmas]);

  const programmingRef = useRef(null);
  const miscRef = useRef(null);
  const darkRef = useRef(null);
  const punRef = useRef(null);
  const spookyRef = useRef(null);
  const christmasRef = useRef(null);

  // Blacklist
  const [religious, setReligious] = useState("");
  const [political, setPolitical] = useState("");
  const [racist, setRacist] = useState("");
  const [sexist, setSexist] = useState("");
  const [explicit, setExplicit] = useState("");
  const [nsfw, setNsfw] = useState("");
  const [blacklist, setBlacklist] = useState([
    religious,
    political,
    racist,
    sexist,
    explicit,
    nsfw
  ]);

  const religiousRef = useRef(null);
  const politicalRef = useRef(null);
  const racistRef = useRef(null);
  const sexistRef = useRef(null);
  const explicitRef = useRef(null);
  const nsfwRef = useRef(null);

  console.log(custom, blacklist);
  const joke = useRandomJoke(custom, blacklist);

  const generateJoke = (e) => {
    e.preventDefault();
    programmingRef.current.checked
      ? setProgramming(programmingRef.current.value)
      : setProgramming("");
    miscRef.current.checked ? setMisc(miscRef.current.value) : setMisc("");
    darkRef.current.checked ? setDark(darkRef.current.value) : setDark("");
    punRef.current.checked ? setPun(punRef.current.value) : setPun("");
    spookyRef.current.checked ? setSpooky(spookyRef.current.value) : setSpooky("");
    christmasRef.current.checked
      ? setChristmas(christmasRef.current.value)
      : setChristmas("");
    religiousRef.current.checked
      ? setReligious(religiousRef.current.value)
      : setReligious("");
    politicalRef.current.checked
      ? setPolitical(politicalRef.current.value)
      : setPolitical("");
    racistRef.current.checked ? setRacist(racistRef.current.value) : setRacist("");
    sexistRef.current.checked ? setSexist(sexistRef.current.value) : setSexist("");
    explicitRef.current.checked
      ? setExplicit(explicitRef.current.value)
      : setExplicit("");
    nsfwRef.current.checked ? setNsfw(nsfwRef.current.value) : setNsfw("");
    setBlacklist([religious, political, racist, sexist, explicit, nsfw]);
    setCustom([programming, misc, dark, pun, spooky, christmas]);
  };

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <form>
        <h4> Custom </h4>
        <input type="checkbox" id="progamming" value="Programming" ref={programmingRef} />
        <label>progamming</label>
        <input type="checkbox" id="misc" value="Misc" ref={miscRef} />
        <label>misc</label>
        <input type="checkbox" id="dark" value="Dark" ref={darkRef} />
        <label>dark</label>
        <input type="checkbox" id="pun" value="Pun" ref={punRef} />
        <label>pun</label>
        <input type="checkbox" id="spooky" value="Spooky" ref={spookyRef} />
        <label>spooky</label>
        <input type="checkbox" id="christmas" value="Christmas" ref={christmasRef} />
        <label>christmas</label>
        <h4> Blacklist </h4>
        <input type="checkbox" id="religious" value="religious" ref={religiousRef} />
        <label>religious</label>
        <input type="checkbox" id="political" value="political" ref={politicalRef} />
        <label>political</label>
        <input type="checkbox" id="racist" value="racist" ref={racistRef} />
        <label>racist</label>
        <input type="checkbox" id="sexist" value="sexist" ref={sexistRef} />
        <label>sexist</label>
        <input type="checkbox" id="explicit" value="explicit" ref={explicitRef} />
        <label>explicit</label>
        <input type="checkbox" id="nsfw" value="nsfw" ref={nsfwRef} />
        <label>nsfw</label>
        <h4></h4>
        <button onClick={generateJoke}>Generate Joke</button>
        <h4></h4>
        <h4 className="joke"> {joke} </h4>
      </form>
    </div>
  );
}
