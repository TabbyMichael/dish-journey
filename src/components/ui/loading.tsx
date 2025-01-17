import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center p-4 animate-fade-in">
      <Loader2 className="animate-loading-spin h-8 w-8 text-primary" />
    </div>
  );
};