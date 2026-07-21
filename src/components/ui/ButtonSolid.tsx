"use client";

import Link from "next/link";

type ButtonSolidType = {
  href?: string;
  label: string;
  isSubmit?: boolean;
  onClick?: () => void;
  className?: string;
  dataWId?: string;
};

const ButtonSolid = ({
  href,
  label,
  isSubmit,
  onClick,
  className = "",
  dataWId = "",
}: ButtonSolidType) => {
  const baseClasses = `ul_button w-inline-block bg-[#fbd30b]! border-[#fbd30b]! hover:bg-white! ${className}`;

  return (
    <div className="ul_button_box">
      {isSubmit ? (
        <button
          type="submit"
          onClick={onClick}
          data-w-id={dataWId}
          className={baseClasses}
        >
          <div className="ul_button_text">{label}</div>
        </button>
      ) : (
        <Link
          href={href ?? "#"}
          onClick={onClick}
          data-w-id={dataWId}
          className={baseClasses}
        >
          <div className="ul_button_text">{label}</div>
        </Link>
      )}
    </div>
  );
};

export default ButtonSolid;