import "./App.css";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { clipboard } from "@tauri-apps/api";

export interface EmojiData {
  // only some properties, waiting for https://github.com/missive/emoji-mart/pull/789
  // alternatively we could use the old types of @types/emoji-mart@3.0.9
  id: string;
  name: string;
  colons: string;
  native: string;
}

function App() {
  const onEmojiSelect = (emoji: EmojiData) => {
    clipboard.writeText(emoji.native);
  };

  return (
    <div className="container">
      <div className="picker">
        <Picker
          data={data}
          onEmojiSelect={onEmojiSelect}
          autoFocus={true}
          dynamicWidth={true}
        />
      </div>
    </div>
  );
}

export default App;
