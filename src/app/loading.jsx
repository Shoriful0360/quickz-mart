// app/loading.js

import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderIcon className="size-10 animate-spin text-blue-500" />
    </div>
  );
}
