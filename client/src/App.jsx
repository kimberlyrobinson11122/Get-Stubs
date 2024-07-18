import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import NavList from './components/NavList';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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