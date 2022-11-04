import styles from './Banner.module.css';

const Banner = ({ title, description, image }) => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>{title}</h1>
          <p className={styles.paragrafo}>{description}</p>
        </div>
        <div className={styles.imagens}>
          <img className={styles.minhaFoto} src={image} alt="Imagem Background" />
        </div>
      </div>
    </>
  );
};

export default Banner;