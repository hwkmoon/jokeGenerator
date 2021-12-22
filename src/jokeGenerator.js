import { useState, useEffect } from "react";
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

function checkEmptyArray(element) {
  return element !== "";
}

const stringConcat = function (array, listName) {
  let options = listName === "custom" ? "Any" : "";
  // console.log("Array");
  // console.log(array);
  const filterArray = array.filter(checkEmptyArray);
  if (filterArray.length) {
    options =
      (listName === "blacklist" ? "blacklistFlags=" : "") +
      filterArray
        .map((o, index) => {
          return String(o) + (index === filterArray.length - 1 ? "" : ",");
        })
        .join("");
  }
  return options;
};

function useRandomJoke(custom, blacklist) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const loadJoke = async function () {
      try {
        const customOptions = stringConcat(custom, "custom");
        console.log("Custom options" + customOptions);
        const blacklistOptions = stringConcat(blacklist, "blacklist");
        console.log("Blacklist options" + blacklistOptions);

        await getJSON(
          `${API_URL}${customOptions}?${
            blacklistOptions === "" ? "" : blacklistOptions + "?"
          }&type=single`
        ).then((data) => {
          console.log(data);
          setJoke(data.joke);
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    loadJoke();
  }, [custom, blacklist]);
  return joke;
}

export default useRandomJoke;
