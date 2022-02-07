export function Checkbox({
  checked,
  onChange,
  specialty,
}: {
  checked: boolean;
  onChange: () => void;
  specialty: string;
}) {
  return (
    <label key={specialty} htmlFor={specialty}>
      <input
        id={specialty}
        name={specialty}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {specialty}
    </label>
  );
}
