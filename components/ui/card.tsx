import { ICard } from "@/types/ICard";
import React from "react";

export const Card: React.FC<ICard> = ({ children, className }) => {
    return (
        <div
            className={"flex rounded-2xl bg-[#212121] min-h-12 p-3 ml-8 mr-8 " + className}
        >
            {children}
        </div>
    );
}