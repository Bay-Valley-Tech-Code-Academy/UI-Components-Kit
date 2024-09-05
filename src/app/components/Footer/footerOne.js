export default function FooterOne() {

    const sections = [
        {
            title: "Navigation",
            items: [
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about" },
                { text: "Our Story", href: "/story" }
            ]
        },
        {
            title: "Legal",
            items: [
                { text: "Privacy Policy", href: "/fruits/privacy" },
                { text: "Terms of Service", href: "/fruits/tos" }
            ]
        },
        {
            title: "Contact Us",
            items: [
                { text: "Phone Number", href: "tel:+1234567890" },
                { text: "Email", href: "mailto:contact@example.com" },
                { text: "Address", href: "https://maps.google.com/?q=Your+Address" }
            ]
        }
    ];
    
    return (
        <>
            <div className="flex flex-row gap-8 justify-between px-8 pt-4">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="uppercase font-semibold pb-3">{section.title}</p>
                        {section.items.map((item, idx) => (
                            <a 
                            key={idx} 
                            href={item.href} 
                            className="hover:underline"
                        >
                            {item.text}
                        </a>
                        ))}
                    </div>
                ))}
            </div>
            <div className="border-t-2 border-white m-6"></div>
        </>
    );

}