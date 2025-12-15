interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
}

export default function TextInput({
  name,
  label,
  placeholder,
  value,
}: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div className="flex flex-col gap-2 text-sm">
      <label className="text-gray-700">{label}</label>
      <input
        className="h-11 px-4 border border-gray-200 rounded-lg text-gray-500 outline-none transition-default focus:border-primary focus:ring-2 focus:ring-primary/10"
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
