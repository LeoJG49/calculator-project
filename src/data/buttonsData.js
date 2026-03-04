import { Delete, Percent, Calculator, Dot } from "lucide-react"

export const buttons = [
    [
        { type: "icon", value: "backspace", icon: <Delete size={20} /> },
        { type: "text", value: "AC" },
        { type: "icon", value: "%", icon: <Percent size={20} /> },
        { type: "text", value: "/" }
    ],
    [
        { type: "text", value: "7" },
        { type: "text", value: "8" },
        { type: "text", value: "9" },
        { type: "text", value: "X" }
    ],
    [
        { type: "text", value: "4" },
        { type: "text", value: "5" },
        { type: "text", value: "6" },
        { type: "text", value: "-" }
    ],
    [
        { type: "text", value: "1" },
        { type: "text", value: "2" },
        { type: "text", value: "3" },
        { type: "text", value: "+" }
    ],
    [
        { type: "icon", value: "+/-", icon: <Calculator size={20} /> },
        { type: "text", value: "0" },
        { type: "text", value: ".", icon: <Dot size={20} /> },
        { type: "text", value: "=" }
    ]   
];