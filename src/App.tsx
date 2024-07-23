import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Loader from './components/Loader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const SearchForm = lazy(() => import('./components/SearchForm'));
const Artist = lazy(() => import('./components/Artist'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/artist/:name/:id' element={<Artist />} />
            <Route path='/' element={<SearchForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
