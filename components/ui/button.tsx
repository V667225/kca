import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006b3f]/40 disabled:pointer-events-none disabled:opacity-50", className)} {...props} />;
}
