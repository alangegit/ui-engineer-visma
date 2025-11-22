import type { ReactNode, ChangeEvent } from "react";

interface TextInputProps {
  label: ReactNode;
  value: string;
  id: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  value,
  id,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <label htmlFor={id} className="flex flex-col text-slate-900">
      <span className="text-sm font-light lowercase pb-1">{label}</span>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className="border-b-2 border-slate-900 px-3 py-2 font-light bg-sky-100"
        placeholder={placeholder}
      />
    </label>
  );
}
