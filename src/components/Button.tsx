import { ReactNode } from "react";

type Props = {
    id: string
    title: string
    containerClass: string
    leftIcon: ReactNode;
}

export default function Button({ id, title, containerClass, leftIcon }: Props) {
    return ( 
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}  >
            {leftIcon}

            <span className="realtive inline-flex overflow-hidden font-general text-xs uppercase"> 
                <div>
                    {title}
                </div>
            </span>
        
        </button>
    )
}