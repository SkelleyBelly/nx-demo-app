export interface ButtonProps {
    children: String;
    onClick: () => void;
}

/**
 * Clickity clackity clonk
 */
export const Button = ({ children, onClick }: ButtonProps) => <button onClick={onClick} style={{
    padding: "8px 16px",
    fontFamily: "sans-serif",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#24A0ED",
    color: "white"
}}>{children}</button>