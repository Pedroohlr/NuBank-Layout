import { IContainer } from "@/types/IContainer";
import React from "react";

export const Container: React.FC<IContainer> = ({
    children,
    className
}) => {
    return(
        <div className={`flex flex-col gap-4 bg-background rounded-4xl mb-4 ${className}`}>
            {children}
        </div>
    )
}