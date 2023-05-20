import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ScheduleRoot } from './features/Schedule/ScheduleRoot';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 30000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/:routeId/:scheduleType" element={<ScheduleRoot />} />
        <Route path="*" element={<ScheduleRoot />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
