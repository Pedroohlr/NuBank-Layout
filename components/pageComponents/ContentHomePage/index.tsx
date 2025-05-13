"use client";

import { useState, useEffect, useReducer } from "react";
import { User } from "@/types/Iuser";
import { getUser, getUsers } from "@/services/users";
import { formatNumber } from "@/utils/numberFormatter";
import { ChevronRight, CreditCard } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconProp } from "@/components/ui/IconProp";

export default function ContentHomePage() {
  const [todos, setTodos] = useState<Record<string, User>>({});
  const [user, setUser] = useState<User | null>();

  const atalhos = [
    {
      name: "Área Pix e Transferir",
      mensage: "",
      icon: <IconProp src="icons/pix-svgrepo-com.svg" size={30} />,
    },
    {
      name: "Pagar",
      mensage: "",
      icon: <IconProp src="icons/barcode-svgrepo-com.svg" size={30} />,
    },
    {
      name: "Pegar Emprestado",
      mensage: user
        ? formatNumber(user["limite-emprestimo"], "pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "",
      icon: <IconProp src="icons/hand-money-svgrepo-com.svg" size={30} />,
    },
    {
      name: "Converte Limite",
      mensage: "",
      icon: <IconProp src="icons/dollar-svgrepo-com.svg" size={30} />,
    },
    {
      name: "Recarga de celular",
      mensage: "",
      icon: <IconProp src="icons/device-mobile-svgrepo-com.svg" size={30} />,
    },
    {
      name: "Caixinhas e Investir",
      mensage: "",
      icon: (
        <IconProp src="icons/dollar-piggy-bank-svgrepo-com.svg" size={30} />
      ),
    },
  ];

  useEffect(() => {
    getUsers().then(setTodos);
    getUser(1).then((u) => setUser(u));
  }, []);

  return (
    <div className="">
      <div className="p-8">
        <span className="text-white flex justify-between">
          Saldo em conta
          <ChevronRight />
        </span>

        <span className="text-white text-[18px]">
          {user == null
            ? "Carregando..."
            : Number.isNaN(user.saldo)
            ? "-"
            : formatNumber(user.saldo, "pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
        </span>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {atalhos.map((atalho, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <div className="p-1 text-white  w-25 flex flex-col items-center justify-center">
                <span className="bg-[#222222] p-5 rounded-full">
                  {atalho.icon}
                </span>
                {atalho.mensage !== "" && (
                  <span className="bg-primary p-1 text-[10px] rounded-[4px] fixed mt-5">
                    {atalho.mensage}
                  </span>
                )}
                <p className="text-center text-[12px] mt-2.5">{atalho.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="m-8 h-15 bg-[#222] rounded-2xl flex flex-row p-3 items-center justify-start gap-4 text-white">
          <CreditCard />
          Meus Cartões
      </div>

    </div>
  );
}
