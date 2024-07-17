import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import NavList from './components/NavList';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;