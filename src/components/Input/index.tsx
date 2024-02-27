import type { HTMLInputTypeAttribute } from "react";

interface TextAreaProps {
  rows: number;
}

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  required?: boolean;
  textArea?: TextAreaProps;
}

export function Input({
  label,
  type,
  placeholder,
  name,
  required,
  textArea,
}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      {textArea !== undefined ? (
        <textarea
          name={name}
          id={name}
          rows={textArea.rows}
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border bg-gray-100 p-2 text-sm focus:bg-white"
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full rounded-xl border bg-gray-100 p-2 text-sm focus:bg-white"
          required={required}
        />
      )}
    </div>
  );
}