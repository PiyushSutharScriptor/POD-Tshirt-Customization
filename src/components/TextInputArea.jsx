import { useFormContext } from "react-hook-form";

export default function TextInputArea({ variant }) {
  const { register, watch } = useFormContext();
  const textValue = watch("printText") || "";
  const lineCount = textValue.split("\n").length;

  const inputClass = `input-${variant} w-full resize-none h-32`;

  return (
    <div className={`w-full max-w-md mx-auto mt-4 form-section-${variant}`}>
      <h2 className="text-xl font-semibold mb-2">T-shirt Text (max 3 lines)</h2>
      <textarea
        {...register("printText")}
        placeholder="Write something cool..."
        className={inputClass}
        maxLength={180}
      />
      <p className="text-sm mt-2">
        {lineCount > 3 ? (
          <span className="text-red-500">⚠ Max 3 lines!</span>
        ) : (
          `Lines: ${lineCount} / 3`
        )}
      </p>
    </div>
  );
}
