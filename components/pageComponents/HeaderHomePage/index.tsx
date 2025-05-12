'use client'
import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/Iuser";
import { getUser, getUsers } from "@/services/users";
import { EllipsisVertical, Eye, MessageCircleQuestion, ShieldCheck } from "lucide-react";

export default function HeaderHomePage() {
    const [todos, setTodos] = useState<Record<string, User>>({})
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        getUsers().then(setTodos)
        getUser(1).then(u => setUser(u))
    }, [])

    return (
        <header className="bg-primary w-full p-6 flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <span className="flex flex-row items-center justify-start gap-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.foto_usuario} />
                    </Avatar>
                    <p className="text-[14px] text-white text-bold">Olá {user?.nome_usuario}!</p>
                </span>
               <span className="flex gap-6">
                    <Eye size={20} className="text-white" />
                    <MessageCircleQuestion size={20} className="text-white" />
                    <ShieldCheck size={20} className="text-white" />
               </span>
            </div>
            <div className="bg-white p-4 rounded-2xl flex justify-between items-center">
                <img src="list-tick-svgrepo-com.svg" alt="icone lista" className="w-13"  />
                <p className="text-[12px] text-primary">Chegou seu resumo financeiro mensal</p>
                <EllipsisVertical className="text-primary"/>
            </div>
        </header>
    );
}