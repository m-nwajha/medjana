"use client";

import Link from "next/link";

type ButtonSolidType = {
  href?: string;
  label: string | React.ReactNode;
  isSubmit?: boolean;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  dataWId?: string;
};

const ButtonSolid = ({
  href,
  label,
  isSubmit,
  onClick,
  className = "",
  target = "_self",
  rel = "noopener noreferrer",
  dataWId = "",
}: ButtonSolidType) => {
  const baseClasses = `ul_button w-inline-block bg-[#fbd30b]! border-[#fbd30b]! hover:bg-white! ${className}`;

  return (
    <div className="ul_button_box">
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          data-w-id={dataWId}
          className={baseClasses}
          target={target}
          rel={rel}
        >
          <div className="ul_button_text">{label}</div>
        </Link>
      ) : (
        <button
          type={isSubmit ? "submit" : "button"}
          onClick={onClick}
          data-w-id={dataWId}
          className={baseClasses}
        >
          <div className="ul_button_text">{label}</div>
        </button>
      )}
    </div>
  );
};

export default ButtonSolid;