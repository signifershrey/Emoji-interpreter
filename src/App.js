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
  "🤐": " Zipper-Mouth Face",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😶": "ace in Clouds",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😮": "Face Exhaling",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😵‍": " Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😳": "Flushed Face",
  "😲": "Astonished Face",
  "😦": "Frowning Face with Open Mouth",
  "🥺": "Pleading Face",
  "😨": "Fearful Face",
  "😧": "Anguished Face",
  "😥": "Sad but Relieved Face",
  "😰": "Anxious Face with Sweat",
  "😭": "Loudly Crying Face",
  "😢": "Crying Face",
  "😖": "Confounded Face",
  "😱": "Face Screaming in Fear",
  "😞": "Disappointed Face",
  "😣": "Persevering Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "🥱": "Yawning Face",
  "😫": "Tired Face",
  "😠": "Angry Face",
  "😤": "Face with Steam From Nose",
  "😈": "Smiling Face with Horns",
  "🤬": "Face with Symbols on Mouth",
  "💀": "Skull",
  "👿": "Angry Face with Horns"
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
