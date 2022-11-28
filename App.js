import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
// import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import Navigation from './navigation/Navigation';
// import {apiSlice} from './src/features/api/apiSlice';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
