"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { footerSections } from "./constrains/footer-links";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface FooterSectionProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

function FooterSection({ title, children }: FooterSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={clsx("w-full md:w-auto")}>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:hidden">
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-semibold">
                    {title}
                    <ChevronDown
                        className={clsx(
                            "h-5 w-5 text-white transition-transform",
                            isOpen ? "rotate-180" : "",
                        )}
                    />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    {children}
                </CollapsibleContent>
            </Collapsible>
            <div className="hidden md:block">
                <h3 className="mb-4 text-lg font-semibold">{title}</h3>
                {children}
            </div>
        </div>
    );
}

export default function Footer() {
    const params = usePathname();
    return (
        <footer
            className={clsx(
                "border-t bg-gray-900",
                params.startsWith("/dashboard") ? "hidden" : "",
            )}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    {footerSections.map((section) => (
                        <FooterSection key={section.title} title={<span className="text-white">{section.title}</span>}>
                            <div className="space-y-2">
                                {section.links.map((link, idx) =>
                                    link?.icon ? (
                                        <div className="flex flex-col items-start space-y-4" key={`icon-${idx}`}>
                                            <Link href={link.href} className="text-muted-foreground hover:text-gray-200">
                                                {link.icon}
                                            </Link>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            key={`link-${link.href}-${idx}`}
                                            className="block text-muted-foreground hover:text-gray-200"
                                        >
                                            {link.text}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </FooterSection>
                    ))}
                </div>

                <div className="mt-6 pt-6">
                    <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                        <div className="">
                            <div className="pb-3 text-sm text-muted-foreground">
                                <h2 className="pb-3 !text-[28px] font-bold text-white">
                                    Footer
                                </h2>
                                <span className="text-gray-300">© {new Date().getFullYear()} Footer, Ltd.</span>
                            </div>
                            <div className="flex space-x-4 text-sm text-muted-foreground">
                                <Link href="/" className="hover:text-gray-200">
                                    Terms
                                </Link>
                                <Link href="/" className="hover:text-gray-200">
                                    Sitemap
                                </Link>
                                <Link href="/" className="hover:text-gray-200">
                                    Legal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
