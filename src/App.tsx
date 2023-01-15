import { FC, useState } from "react";
import styles from "./app.module.css";

const App: FC = () => {
  const [state, setState] = useState("");
  const [result, setResult] = useState([]);

  const testFetch = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${state}&apiKey=0895cbb5ad8c463ca78d2062e74f3423&lang=ru `,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.features[1].properties.formatted);
        setResult(result.features);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.container} id="autocomplete-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          testFetch();
        }}
      >
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            // setTimeout(() => {
            //   if (state.length > 0) {
            //     testFetch();
            //   }
            // }, 3000);
          }}
        />
        <div className={styles.output}>
          {result.map((el, index) => (
            <span key={index}>{el.properties.formatted}</span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
