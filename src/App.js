import "./styles.css";
import useRandomJoke from "./jokeGenerator.js";
import { useEffect, useState } from "react";

export default function App() {
  // Custom
  const [programming, setProgramming] = useState("");
  const [misc, setMisc] = useState("");
  const [dark, setDark] = useState("");
  const [pun, setPun] = useState("");
  const [spooky, setSpooky] = useState("");
  const [christmas, setChristmas] = useState("");
  const custom = [programming, misc, dark, pun, spooky, christmas];

  // Blacklist
  const [religious, setReligious] = useState("");
  const [political, setPolitical] = useState("");
  const [racist, setRacist] = useState("");
  const [sexist, setSexist] = useState("");
  const [explicit, setExplicit] = useState("");
  const [nsfw, setNsfw] = useState("");
  const blacklist = [religious, political, racist, sexist, explicit, nsfw];

  console.log(custom, blacklist);
  const joke = useRandomJoke(custom, blacklist);

  const jokeHTML = document.querySelector(".joke");

  // const getJoke() = function() {
  //   set
  // }

  // useEffect(() => {
  //   jokeHTML.textContent = { joke };
  // });

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <form>
        <h4> Custom </h4>
        <input
          type="checkbox"
          id="progamming"
          value="Progamming"
          onChange={(e) => setProgramming(e.target.value)}
        />
        <label>progamming</label>
        <input
          type="checkbox"
          id="misc"
          value="Misc"
          onChange={(e) => setMisc(e.target.value)}
        />
        <label>misc</label>
        <input
          type="checkbox"
          id="dark"
          value="Dark"
          onChange={(e) => setDark(e.target.value)}
        />
        <label>dark</label>
        <input
          type="checkbox"
          id="pun"
          value="Pun"
          onChange={(e) => setPun(e.target.value)}
        />
        <label>pun</label>
        <input
          type="checkbox"
          id="spooky"
          value="Spooky"
          onChange={(e) => setSpooky(e.target.value)}
        />
        <label>spooky</label>
        <input
          type="checkbox"
          id="christmas"
          value="Christmas"
          onChange={(e) => setChristmas(e.target.value)}
        />
        <label>christmas</label>
        <h4> Blacklist </h4>
        <input
          type="checkbox"
          id="religious"
          value="religious"
          onChange={(e) => setReligious(e.target.value)}
        />
        <label>religious</label>
        <input
          type="checkbox"
          id="political"
          value="political"
          onChange={(e) => setPolitical(e.target.value)}
        />
        <label>political</label>
        <input
          type="checkbox"
          id="racist"
          value="racist"
          onChange={(e) => setRacist(e.target.value)}
        />
        <label>racist</label>
        <input
          type="checkbox"
          id="sexist"
          value="sexist"
          onChange={(e) => setSexist(e.target.value)}
        />
        <label>sexist</label>
        <input
          type="checkbox"
          id="explicit"
          value="explicit"
          onChange={(e) => setExplicit(e.target.value)}
        />
        <label>explicit</label>
        <input
          type="checkbox"
          id="nsfw"
          value="nsfw"
          onChange={(e) => setNsfw(e.target.value)}
        />
        <label>nsfw</label>
        <h4></h4>
        <button onClick={useRandomJoke}>Generate Joke</button>
        <h4></h4>
        <h4 className="joke"> {joke} </h4>
      </form>
    </div>
  );
}
