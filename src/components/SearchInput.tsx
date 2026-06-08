type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function SearchInput({
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <input
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={(event) =>
        onChange(event.target.value)
      }
    />
  );
}

export default SearchInput;