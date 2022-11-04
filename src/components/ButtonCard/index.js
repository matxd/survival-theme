import styles from './ButtonCard.module.css';

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.botaoLer}>{children}</button>
    </>
  );
};

export default Button;