import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import SearchForm from './components/SearchForm';
import Artist from './components/Artist';

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/artist/:name/:id' element={<Artist />} />
          <Route path='/' element={<SearchForm />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
