type Props = {
  value: string;
  onChange: (value: string) => void;
};

function ProductSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="search"
      aria-label="Məhsul axtar"
      placeholder="Məhsul axtar..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
    />
  );
}

export default ProductSearch;