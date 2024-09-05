const footerOneCode = `<>
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
`;

export default footerOneCode;