import React from "react";
import { IconProps } from "@/types/IIconProps";

export function IconProp({ size, src, alt="", className = '' }: IconProps) {
    const imageSrc = src.startsWith('/') ? src : `${src}`;

    return(
        <img 
        src={imageSrc} 
        alt={alt}
        className={`object-contain w-[${size}px] h-[${size}px] ${className}`}
         />
    )
}