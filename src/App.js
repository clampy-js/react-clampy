import React, { useState } from "react";
import Clampy from "./Clampy";

import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <h1>clampySize: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button disabled={count === 1} onClick={() => setCount(count - 1)}>-</button>
      <Clampy clampSize={count.toString()}>
        Quisque pellentesque dui sit amet nisl sollicitudin faucibus. Ut est
        mauris, vestibulum ullamcorper feugiat consectetur, ullamcorper eu
        lorem. Mauris congue convallis felis sit amet scelerisque. Etiam sed
        sodales orci. Ut porta massa commodo turpis dictum suscipit. Quisque sit
        amet metus eget arcu lacinia pellentesque. Aliquam aliquam tortor nec
        odio tempus non pharetra ipsum ultricies. Aenean pretium tristique orci
        vitae tempus. Sed vitae quam ut felis aliquam blandit nec et odio.
        Mauris at magna odio, at mattis risus. Phasellus eu enim mi, sit amet
        hendrerit est. Integer egestas consectetur blandit. Etiam odio nibh,
        fermentum non venenatis nec, dictum vel ligula. Quisque rutrum imperdiet
        arcu at ultricies. Integer in diam ut elit euismod posuere et id sapien.
        Cras ligula leo, hendrerit vitae sagittis nec, commodo sed lacus. In
        aliquam pretium mauris sed ullamcorper. Phasellus fermentum iaculis
        massa ac condimentum. Ut nisl turpis, vulputate in rhoncus sed,
      </Clampy>
    </div>
  );
}

export default App;
