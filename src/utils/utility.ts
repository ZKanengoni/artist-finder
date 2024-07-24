export const formatNumber = (count: number | undefined) => {
  if (count) {
    return count.toLocaleString('en-US');
  }

  return '0';
};

export const addSearchTerm = (term: string) => {
  const searchesJson = localStorage.getItem('recentSearches');
  const searches: string[] = searchesJson ? JSON.parse(searchesJson) : [];

  if (searches.includes(term)) {
    searches.splice(searches.indexOf(term), 1);
  }

  if (searches.length > 5) {
    searches.pop();
  }

  searches.unshift(term);

  localStorage.setItem('recentSearches', JSON.stringify(searches));
};

export const getRecentSearches = () => {
  const searchesJson = localStorage.getItem('recentSearches');
  return searchesJson ? JSON.parse(searchesJson) : [];
};
