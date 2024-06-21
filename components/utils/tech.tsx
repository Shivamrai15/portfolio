
interface TechProps {
    color? : string;
    label: string
}

export const Tech = ({
    color,
    label
} : TechProps) => {
    return (
        <span 
            className="text-sm p-2 bg-neutral-900 rounded-md text-zinc-400 select-none"
            style={{ borderColor : color ? color : "#0a0a0a", borderWidth : "1px" }}
        >
            {label}
        </span>
    )
}
