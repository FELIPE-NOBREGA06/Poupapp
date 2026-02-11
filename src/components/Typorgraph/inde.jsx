import styles from "./typorgraph.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

export const Typography = ({ children, variant }) => {
  const Component = TAGS[variant] || "p";
  const variantClass = styles[variant];

  return <Component className={variantClass}>{children}</Component>;
};
