import styles from "./styles.module.css";

type DefaltButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaltButton({ icon, color = "green", ...props }: DefaltButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
}
