import { SORT_OPTIONS } from "../../constants/shop";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-['Inter'] text-sm text-medium-gray">Sort by:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-border-gray bg-white px-3 py-1.5 font-['Inter'] text-sm text-dark-gray shadow-sm focus:border-brand-orange focus:outline-none"
      >
        {SORT_OPTIONS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
