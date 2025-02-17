import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
interface FooterLink {
  text?: string;
  icon?: React.ReactNode;
  href: string;
}
export const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: "Categories",
    links: [
      { text: "Entertainment", href: "/" },
      { text: "Professional", href: "/" },
      { text: "Training & Workshops", href: "/" },
      { text: "College & Campus", href: "/" },
      { text: "Sports", href: "/" },
      { text: "Activities", href: "/" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { text: "About Us", href: "/" },
      { text: "Blog", href: "/blogs" },
      { text: "Contact Us", href: "/" },
      { text: "FAQs", href: "/" },
      { text: "Terms of Use", href: "/" },
      { text: "Media Kit", href: "/" },
      { text: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { text: "About Us", href: "/" },
      { text: "Blog", href: "/blogs" },
      { text: "Contact Us", href: "/" },
      { text: "FAQs", href: "/" },
      { text: "Terms of Use", href: "/" },
      { text: "Media Kit", href: "/" },
      { text: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Find Us",
    links: [
      { icon: <Facebook className="h-6 w-6" />, href: "/" },
      { icon: <Instagram className="h-6 w-6" />, href: "/" },
      { icon: <Linkedin className="h-6 w-6" />, href: "/" },
    ],
  },
];
