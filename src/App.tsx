import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import SearchForm from './components/SearchForm';
import Artist from './components/Artist';
import NotFound from './components/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
