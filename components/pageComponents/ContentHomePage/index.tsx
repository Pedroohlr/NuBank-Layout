"use client";

import { useState, useEffect } from "react";
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
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export default function ContentHomePage() {
  const [todos, setTodos] = useState<Record<string, User>>({});
  const [user, setUser] = useState<User | null>();

  const banners = [
    {
      title: "Pague boletos no crédito em até 12x, direto pelo app",
      icon: <IconProp src="iconsBanner/cart-2-svgrepo-com (1).svg" size={30} />,
    },
    {
      title: "facilite seus planos futuros: guarde dinheiro nas caixinhas",
      icon: <IconProp src="iconsBanner/diploma-verified-svgrepo-com.svg" size={30} />,
    },
    {
      title:
        "Aumente seu limite do cartão de credito hoje com o Nu Limite Garantido",
      icon: <IconProp src="iconsBanner/donut-bitten-svgrepo-com.svg" size={30} />,
    },
  ];

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
      name: "Caixinhas Turbo",
      mensage: "155% CDI",
      icon: (
        <IconProp src="icons/dollar-piggy-bank-svgrepo-com.svg" size={30} />
      ),
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
    <Container>
      <div className="ml-8 mr-8 mt-6">
        <span className="text-white flex justify-between text-[20px] font-[500]">
          Saldo em conta
          <ChevronRight />
        </span>

        <span className="text-white font-[400]">
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
            <CarouselItem key={index} className="basis-1/5">
              <div className="p-1 text-white  w-25 flex flex-col items-center justify-center">
                <span className="bg-[#222222] p-5 rounded-full">
                  {atalho.icon}
                </span>
                {atalho.mensage !== "" && (
                  <span className="bg-primary p-1 text-[10px] rounded-[4px] fixed mt-4 w-fit">
                    {atalho.mensage}
                  </span>
                )}
                <p className="text-center text-[14px] mt-2.5 font-[500]">{atalho.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="ml-8 mr-8 h-15 bg-[#222] rounded-2xl flex flex-row p-3 items-center justify-start gap-4 text-white">
        <CreditCard />
        Meus Cartões
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="basis-1/1">
              <Card className="p-2 ml-8 mr-8 items-center flex-row justify-between">
                <div className="text-white text-[12px] w-[80%]">
                  {banner.title}
                </div>

                <div className="bg-[#e6e6e6] rounded-full w-[50px] h-[50px] flex p-3 items-center justify-center">
                  {banner.icon}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Separator className="my-4 bg-[#212121]" />

      <div className="ml-8 mr-8 text-white flex flex-col gap-3">
        <span className="text-white flex font-[500] text-[20px] justify-between">
          Cartão de crédito
          <ChevronRight />
        </span>

        <span className="flex flex-col">
          <p className="text-[16px] text-gray-300">Fatura atual</p>
          <p className="text-[20px] text-white font-[500]">R$ 588,28</p>
        </span>
        <span>
          <p className="text-[14px] text-gray-400">
            Limite disponível de R$ 831,68
          </p>
        </span>
      </div>

      <Separator className="my-4 bg-[#212121]" />


      <div className="h-40"></div>

      
    </Container>
  );
}
