import separatorJapanese from "@/assets/separator-japanese.jpg";
import separatorWaves from "@/assets/separator-waves.jpg";

interface SectionSeparatorProps {
  variant?: "japanese" | "waves";
  className?: string;
}

const SectionSeparator = ({ variant = "japanese", className = "" }: SectionSeparatorProps) => {
  const backgroundImage = variant === "japanese" ? separatorJapanese : separatorWaves;
  
  return (
    <div 
      className={`w-full h-32 bg-cover bg-center bg-no-repeat opacity-30 my-16 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-hidden="true"
    />
  );
};

export default SectionSeparator;