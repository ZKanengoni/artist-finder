import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import SearchForm from './components/SearchForm';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      // cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm />
    </QueryClientProvider>
  );
}

export default App;
