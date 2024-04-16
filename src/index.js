import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router/Router';
import reportWebVitals from './reportWebVitals';
import { QueryClient } from '@tanstack/react-query';
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




reportWebVitals();
