import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <div>Countdown</div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 320px;
  max-width: 600px;
  background-color: white;
`;

export default App;
