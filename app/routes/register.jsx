import { FilloutStandardEmbed } from "@fillout/react";


export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="min-h-[95vh] w-full bg-[#111827] flex justify-center items-center">
      <div className="h-[100vh] w-[100vw] pb-15 pt-16 bg-white/40">
        <FilloutStandardEmbed
          filloutId="mGaKfZSAJVus"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>
    </div>
  );
}

export default Register;

