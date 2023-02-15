



export function Heading ({title, subtitle, icon}) {
    return (
        <div className="mt-8 px-8">
            <div className="flex">
                <div className="shadow-inner rounded-full"
                    style={{boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)"}}
                >
                    <div className="text-[#1F9EE4] p-[7px] m-auto">
                        {icon}
                    </div>
                </div>
                <div className="ml-5">
                    <div className="text-[22px] text font-semibold my-auto text-gray-500">{title}</div>
                    <div className="text-md font-bold text-[#5E62FF] my-auto">{subtitle}</div>
                </div>
            </div>
        </div>
    )
}

