import { useState } from 'react';

export const useRefresh = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const doRefresh = () => setIsRefreshing((lastRefresh) => !lastRefresh);

  return {
    isRefreshing,
    doRefresh,
  };
};
