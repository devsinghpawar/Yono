import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryProvider = ({ childern }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{childern}</QueryClientProvider>
  );
};
