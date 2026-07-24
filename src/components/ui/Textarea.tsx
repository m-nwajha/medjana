import * as React from "react";
import { CN } from "@/utils/className";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={CN(
          "ul_contact_form_input hp_contact_form_text_area w-input focus:border-[#ffcf00]!",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export default Textarea;
