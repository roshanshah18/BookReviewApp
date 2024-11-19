import {
    QueryClient,
    QueryClientProvider as QueryClientProviderRc,
  } from "@tanstack/react-query";

  
  const queryClient = new QueryClient();
  
  export function QueryClientProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <QueryClientProviderRc client={queryClient}>
        {children}
      </QueryClientProviderRc>
    );
  }