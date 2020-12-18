import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙂": "Happy",
  "😂": "Laughing",
  "😒": "unamused",
  "😴": "sleeping",
  "😭": "crying",
  "😋": "Face Savouring Delicious Food",
  "🤧": "Sneezing Face ",
  "😁": "Beaming Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We Don't Have this Emoji in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      {/* {style:backgroundcolor:"grey"} */}

      <h1>Inside Out!!</h1>

      <input onChange={emojiInputHandler} />

      <h2>Meaning of emoji: {meaning} </h2>

      <h3>Currently, We only know these emojis. </h3>

      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
