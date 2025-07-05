import { NextResponse } from 'next/server';

export interface MenuItem {
    label: string;
    href?: string;
    subItems?: MenuItem[];
}

const menuData: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        subItems: [
            {
                label: "Startup",
                subItems: [
                    { label: "Startup India", href: "#" },
                    { label: "Trade License", href: "#" },
                    { label: "FSSAI Registration", href: "#" },
                    { label: "FSSAI License", href: "#" },
                    { label: "Halal License & Certification", href: "#" },
                    { label: "ICEGATE Registration", href: "#" },
                    { label: "Import Export Code", href: "#" },
                    { label: "Legal Entity Identifier Code", href: "#" },
                    { label: "ISO Registration", href: "#" },
                    { label: "PF Registration", href: "#" },
                    { label: "ESI Registration", href: "#" },
                    { label: "Professional Tax Registration", href: "#" },
                    { label: "RCMC Registration", href: "#" },
                    { label: "TN RERA Registration for Agents", href: "#" },
                    { label: "12A and 80G Registration", href: "#" },
                    { label: "12A Registration", href: "#" },
                    { label: "80G Registration", href: "#" },
                    { label: "APEDA Registration", href: "#" },
                    { label: "Barcode Registration", href: "#" },
                    { label: "BIS Registration", href: "#" },
                    { label: "Certificate of Incumbency", href: "#" },
                    { label: "Darpan Registration", href: "#" },
                    { label: "Digital Signature", href: "#" },
                    { label: "Shop Act Registration", href: "#" },
                    { label: "Drug License", href: "#" },
                    { label: "Udyam Registration", href: "#" },
                    { label: "FCRA Registration", href: "#" },
                    { label: "Fire License", href: "#" }
                ]
            },
            {
                label: "Registrations",
                subItems: [
                    { label: "Trade License", href: "#" },
                    { label: "ISO Registration", href: "#" },
                    { label: "PF Registration", href: "#" },
                    { label: "ESI Registration", href: "#" },
                    { label: "Professional Tax Registration", href: "#" },
                    { label: "RCMC Registration", href: "#" },
                    { label: "TN RERA Registration for Agents", href: "#" }
                ]
            },
            {
                label: "Trademark",
                subItems: [
                    { label: "12A Registration", href: "#" },
                    { label: "80G Registration", href: "#" },
                    { label: "APEDA Registration", href: "#" },
                    { label: "Barcode Registration", href: "#" },
                    { label: "BIS Registration", href: "#" },
                    { label: "Certificate of Incumbency", href: "#" }
                ]
            },
            {
                label: "Goods & Services Tax",
                subItems: [
                    { label: "Digital Signature", href: "#" },
                    { label: "Shop Act Registration", href: "#" },
                    { label: "Drug License", href: "#" },
                    { label: "Udyam Registration", href: "#" },
                    { label: "FCRA Registration", href: "#" },
                    { label: "Fire License", href: "#" }
                ]
            },
            {
                label: "Income Tax",
            },
            {
                label: "MCA",
            },
            {
                label: "Consultation",
            },
        ]
    },
    {
        label: "Knowledge Center",
        subItems: [
            { label: "Blog", href: "/blog" },
            { label: "Guides", href: "/blog#guides" },
            { label: "FAQs", href: "/contact#faq" },
            {
                label: "More Services",
                subItems: [
                    { label: "FSSAI License", href: "#" },
                    { label: "MSME Registration", href: "#" },
                ],
            },
        ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
        success: true,
        data: menuData
    });
} 