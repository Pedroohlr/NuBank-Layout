'use client';

import { CgArrowsExchangeAlt } from "react-icons/cg";
import { LiaDollarSignSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AppBar(){
    const pathname = usePathname()
    
    const itens = [
        { href: '/', icon: <CgArrowsExchangeAlt  size={30} />, key: '/home'},
        { href: '/teste', icon: <LiaDollarSignSolid  size={30} />, key: 'teste'},
        { href: '/teste2', icon: <CiCreditCard2  size={30} />, key: 'teste2'},
    ]
    
    return(
        <div className="bg-background rounded-full flex flex-row justify-center items-center w-fit gap-3 fixed bottom-8 left-1/2 transform -translate-x-1/2 shadow-md shadow-white/10 p-2">
            {itens.map(({ href, icon, key }) => {
                const ativo = pathname === href;
                return(
                    <Link key={key} href={href} passHref>
                        <div
                        className={`
                            p-2 rounded-2xl
                            ${ativo
                                ? 'bg-primary text-primary-foreground' /**Estilo do item ativo */
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
