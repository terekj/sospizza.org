import * as React from "react";

interface HyperLinkProps {
    title: string;
    href: string;
    label: string;
}

const HyperLink = ({title, href, label}: HyperLinkProps) => {

    return (
    <div>
            <div className="mt-4 ml-40 text-red tracking-widest font-ultra leading-none text-4xl"> {title} </div>
            <a href={href} className="mt-1 ml-44 text-light-red tracking-widest font-ultra leading-none text-2xl hover:text-{#0000FF} transition-colors duration-200"> {label}</a>
            <div className="mx-35 h-2 bg-red border-b"> </div>
    </div>
    );
};

export default HyperLink;