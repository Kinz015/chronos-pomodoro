import styles from "./styles.module.css";

type InputContent = {
  labelText?: string;
  type: "text" | "number" | "search";
  id: string;
} & React.ComponentProps<"input">;

export function DefaltInput({
  labelText,
  type,
  id,
  placeholder,
  ...rest
}: InputContent) {
  return (
    <>
      {labelText && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        name=""
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
