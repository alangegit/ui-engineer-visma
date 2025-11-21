import type { ReactNode, ChangeEvent } from "react";

interface TextInputProps {
  label: ReactNode;
  value: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  value,
  id,
  onChange,
}: TextInputProps) {
  return (
    <label htmlFor={id} className="text-lg flex flex-col mb-4 text-indigo-900">
      <span className="text-sm font-light lowercase pb-1">{label}</span>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className="border-2 rounded-md border-indigo-900 px-3 py-2"
      />
    </label>
  );
}
