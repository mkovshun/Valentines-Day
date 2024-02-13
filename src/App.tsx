import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти точно впевнена?",
      "Точно точно???",
      "Подумай ще раз",
      "Останній шанс, МАРІАННО",
      "точна ні?(",
      "Ти ще можеш передумать",
      "Даю ще одну спробу",
      "Ти абсолютно впевнена???",
      "Це буде помилкою...",
      "Май совєсть!!",
      "Ну не будь ти такою холодною(",
      "Передумала?",
      "Навіть ні шансу??",
      "ЦЕ ТВОЯ ОСТАННЯ ВІДПОВІДЬ????????",
      "Ти розбиваєш мені серце... ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">єпiiiiii!!! "ми"</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Сонечко буде моєю валентинкою?🥺🥺🥺</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Так🥺
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Ні" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
