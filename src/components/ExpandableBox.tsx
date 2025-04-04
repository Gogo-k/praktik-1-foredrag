"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type listProp = {
  title: string;
  items: string[];
};

export default function ExpandableBox({ title, items }: listProp) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-lg"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}{" "}
      </button>

      {isOpen && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
}
