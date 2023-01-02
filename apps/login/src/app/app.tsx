import styled from 'styled-components';
import Login from './login';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Login title="login" />
    </StyledApp>
  );
}

export default App;
