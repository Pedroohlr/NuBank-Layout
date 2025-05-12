"use client"

import { useState, useEffect } from "react";
import { User } from "@/types/Iuser";
import { getUser, getUsers } from "@/services/users";
import { formatNumber } from "@/utils/numberFormatter";
import { ChevronRight, Pickaxe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function ContentHomePage(){
    const [todos, setTodos] = useState<Record<string, User>>({})
    const [user, setUser] = useState<User | null>(null)

    const atalhos = [
        {name:"Área Pix e Transferir", icon: <Pickaxe size={30} />},
        {name:"Pagar", icon: <Pickaxe size={30} />},
        {name:"Pegar Emprestado", icon: <Pickaxe size={30} />},
        {name:"Converte Limite", icon: <Pickaxe size={30} />},
        {name:"Recarga de celular", icon: <Pickaxe size={30} />},
        {name:"Caixinhas e Investir", icon: <Pickaxe size={30} />}
    ];

    useEffect(() => {
        getUsers().then(setTodos)
        getUser(1).then(u => setUser(u))
    }, [])
    
    return(
        <div className="">

            <div className="p-8">
                <span className="text-white flex justify-between">
                    Saldo em conta 
                    <ChevronRight />
                </span>

                <span className="text-white text-[18px]">
                    {formatNumber(34343, 'pt-BR', {style:"currency", currency: "BRL"})}
                </span>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm ml-4"
            >
                <CarouselContent>
                    {atalhos.map((atalho, index) => (
                        <CarouselItem key={index} className="basis-1/4">
                            <div className="p-1 text-white  w-25 flex flex-col items-center justify-center">
                                <span className="bg-[#222222] p-5 rounded-full">
                                    {atalho.icon}
                                </span>
                                <p className="text-center text-[12px]">
                                    {atalho.name}    
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    );
}