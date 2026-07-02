import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="mt-16 flex flex-col items-center text-gray-400">
      <p className="mb-2 text-sm tracking-widest uppercase">
        Scroll
      </p>

      <ChevronDown className="animate-bounce" size={28} />
    </div>
  );
}