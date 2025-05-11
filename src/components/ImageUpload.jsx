import { useRef, useState } from "react";

export default function ImageUpload({ variant }) {
  const [image, setImage] = useState("/tshirt.webp");
  const fileInputRef = useRef(null);

  // Use base styling + variant-specific class
  const dropBoxClass = `border-dashed border-2 p-4 rounded-lg text-center cursor-pointer transition uploadbox-${variant}`;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`flex flex-col gap-4 items-center w-full sm:ml-40 sm:max-w-sm max-w-full`}>
      <img
        src={image}
        alt="T-shirt print preview"
        className="w-full sm:h-90 h-78 object-cover border rounded-lg shadow-lg shadow-gray-500"
      />
      <div
        onClick={() => fileInputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFileChange({ target: { files: e.dataTransfer.files } });
        }}
        className={dropBoxClass}
      >
        Drop image here or click to upload
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
