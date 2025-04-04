import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface CheckmarkListProps {
  items: string[];
}

export default function CheckmarkList({ items }: CheckmarkListProps) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {items.map((item) => (
        <div key={item} className="flex items-center space-x-1">
          <CheckCircleIcon className="h-5 w-5" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
