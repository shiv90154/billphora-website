import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-bold tracking-tight">
      <Image
        src="/billphora-icon.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-xl shadow-lg shadow-brand/30"
      />
      <span className={`text-xl ${light ? "text-white" : "text-foreground"}`}>{site.name}</span>
    </span>
  );
}
