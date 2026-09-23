import Header from './components/Header';
import PostList from './components/PostList';
import withLogger from './hoc/withLogger';

const LoggedHeader = withLogger(Header, 'Header');

function App() {
  return (
    <div>
      <LoggedHeader />
      <PostList />
    </div>
  );
}

export default App;