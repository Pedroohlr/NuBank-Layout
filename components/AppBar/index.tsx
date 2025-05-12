'use client';

import { ArrowRightLeft, BadgeDollarSign, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AppBar(){
    const pathname = usePathname()
    
    const itens = [
        { href: '/', icon: <ArrowRightLeft size={30} />, key: '/home'},
        { href: '/teste', icon: <BadgeDollarSign size={30} />, key: 'teste'},
        { href: '/teste2', icon: <ShoppingCart size={30} />, key: 'teste2'},
    ]
    
    return(
        <div className="bg-background rounded-full flex flex-row justify-center items-center w-fit gap-3 fixed bottom-8 left-1/2 transform -translate-x-1/2 shadow-md shadow-white/10 p-2">
            {itens.map(({ href, icon, key }) => {
                const ativo = pathname === href;
                return(
                    <Link key={key} href={href} passHref>
                        <div
                        className={`
                            p-2 rounded-full
                            ${ativo
                                ? 'bg-[#360d4f] text-[#c585fa]' /**Estilo do item ativo */
                                : 'text-white'
                            }
                            transition-colors
                            `}
                        >
                            {icon}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
