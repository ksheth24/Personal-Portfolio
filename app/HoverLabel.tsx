import Image from "next/image";

type NavIconProps = {
  src: string;
  alt: string;
  label: string;
};

export default function NavIcon({ src, alt, label }: NavIconProps) {
  return (
    <div className="group relative flex flex-col items-center">

      <div className="rounded-full bg-black">
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
        />
      </div>

      {/* Hover description */}
      <span
        className="
          absolute top-full mt-2
          rounded-md bg-black px-2 py-1
          text-xs text-white
          opacity-0 translate-y-1
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-200 ease-out
          pointer-events-none
        "
      >
        {label}
      </span>

    </div>
  );
}
