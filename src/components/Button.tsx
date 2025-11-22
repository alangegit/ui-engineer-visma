interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="flex px-5 py-3 text-lg rounded-md cursor-pointer transition-colors bg-amber-600 hover:bg-amber-500 text-white disabled:text-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
