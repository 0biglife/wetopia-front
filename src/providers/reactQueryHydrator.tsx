"use client";

import {
  QueryClientProvider,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";

import { ReactNode, useState } from "react";

export default function ReactQueryHydrator({
  children,
  dehydratedState,
}: {
  children: ReactNode;
  dehydratedState: unknown;
}) {
  const [queryClient] = useState(() => new QueryClient()); // 클라이언트용 초기화

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
