import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine 
            height="100vh"
            projectID="0d919ad1-49cb-4e73-b104-826869573dfb"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;