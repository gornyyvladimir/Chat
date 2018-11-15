import React from 'react';
import ChatLayout from '../../templates/ChatLayout/ChatLayout';
import Chat from '../../organisms/Chat/Chat';

const MainPage = props => {
  return (
    <ChatLayout>
      <Chat />
    </ChatLayout>
  );
};

export default MainPage;
