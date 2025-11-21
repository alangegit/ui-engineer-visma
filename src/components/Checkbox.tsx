import type { ChangeEvent, ReactNode } from "react";

interface CheckboxProps {
  label: ReactNode;
  checked: boolean;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  label,
  checked = false,
  id,
  onChange,
}: CheckboxProps) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="w-8 h-8 "
        />
        <span className="text-indigo-900">{label}</span>
    </label>
  );
}
