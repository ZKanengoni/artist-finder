export const formatNumber = (count: number | undefined) => {
  if (count) {
    return count.toLocaleString('en-US');
  }

  return '0';
};
