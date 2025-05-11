import { useFormContext } from "react-hook-form";

export default function FormSection({ variant }) {
  const { register } = useFormContext();

  const sectionClass = `form-section-${variant}`;
  const inputClass = `input-${variant} w-full`;

  return (
    <div className={`flex flex-col gap-4 w-full sm:max-h-96 max-w-md ${sectionClass}`}>
      <h2 className="text-xl font-semibold">Your Measurements</h2>

      <label className="text-sm font-medium">Height (cm)</label>
      <input type="number" {...register("height")} className={inputClass} />

      <label className="text-sm font-medium">Weight (kg)</label>
      <input type="number" {...register("weight")} className={inputClass} />

      <label className="text-sm font-medium">Build</label>
      <select {...register("build")} className={inputClass}>
        <option value="lean">Lean</option>
        <option value="regular">Regular</option>
        <option value="athletic">Athletic</option>
        <option value="big">Big</option>
      </select>
    </div>
  );
}
