import React from "react";

function IconBtn({
    text,
    onclick,
    disabled,
    children,
    outline,
    customClasses,
    type,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            type={type}
            className={`flex items-center ${
                outline
                    ? "border border-colorDarkPurple bg-transparent"
                    : "bg-colorDarkPurple"
            } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900  w-fit h-fit ${customClasses}`}
        >
            {children ? (
                <>
                    <span className={`${outline && "text-colorDarkPurple"}`}>
                        {text}
                    </span>
                    {children}
                </>
            ) : (
                text
            )}
        </button>
    );
}

export default IconBtn;
