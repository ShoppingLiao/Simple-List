import React from 'react';
import { Wrapper, Header } from './Styled';
import Main from '../Main';

function App() {
  return (
    <Wrapper>
      <Header>Shopping Liao's Simple List</Header>
      <Main />
      <iframe
        src="https://shoppingliao.github.io/Simple-Rating-App/?event_name=simple-list&user_email=simple-list@test.com&user_type=simple-list-test-type"
        width="100%"
        height="380px"
        frameborder="0"
      ></iframe>
    </Wrapper>
  );
}

export default App;
