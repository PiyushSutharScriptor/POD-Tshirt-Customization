import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormSection from "./components/FormSection";
import ImageUpload from "./components/ImageUpload";
import TextInputArea from "./components/TextInputArea";
import VariantSwitcher from "./components/VariantSwitcher";
import Footer from "./components/Footer";

const VARIANTS = ["classic", "modern", "bold"];

function App() {
  const methods = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      printText: "",
    },
  });

  const [variant, setVariant] = useState("classic");

  // Handle Alt + Q for variant switch
  useEffect(() => {
    const handleKey = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setVariant((prev) => {
          const index = VARIANTS.indexOf(prev);
          return VARIANTS[(index + 1) % VARIANTS.length];
        });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    
    <div className={`min-h-screen flex items-center justify-center p-10 transition ${variant}`}
     style={{
            background: `radial-gradient(circle, rgb(4, 10, 78) 0%, rgb(0, 0, 0) 80%)`
    }}
    >

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`w-full max-w-full sm:max-w-full rounded-lg p-6 flex flex-col gap-6 md:flex-row flex-wrap shadow-lg bg-gray-300 variant-${variant}`}
           style={{
                boxShadow: "0 0 15px 4px rgba(0, 119, 255, 2.5)",
          }}
        >
          <FormSection variant={variant} />
          <ImageUpload variant={variant} />
          <TextInputArea variant={variant} />
          <div className="w-full">

        <Footer />
          </div>
        </form>
        <VariantSwitcher variant={variant} />
      </FormProvider>
  
    </div>
  );
}

export default App;
