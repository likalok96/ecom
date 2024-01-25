import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './Router/Router';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { compress, decompress } from "lz-string";



const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({defaultOptions:{ queries : {staleTime: 1000 * 60 * 5,cacheTime: 1000 * 60 * 60 * 24,refetchOnWindowFocus: false} } })

const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
    serialize: (data) => compress(JSON.stringify(data)),
    deserialize: (data) => JSON.parse(decompress(data))
  });

persistQueryClient({
    queryClient,
    persister: localStoragePersister,
});



root.render(

//  <React.StrictMode>
<PersistQueryClientProvider client={queryClient} persistOptions={{ persister: localStoragePersister }}>
<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    <Router />
</PersistQueryClientProvider>
//  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
