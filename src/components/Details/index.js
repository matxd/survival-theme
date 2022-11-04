import styles from './Details.module.css';

const Details = ({ title, description, image, changeClass = false }) => {
  return (
    <>
    {changeClass ? 
      <div className={styles.detailSecondary}>
        <div className={styles.apresentacaoSecondary}>
          <h1 className={styles.tituloSecondary}>{title}</h1>
          <p className={styles.paragrafoSecondary}>{description}</p>
        </div>
        <div className={styles.imagensSecondary}>
          <img className={styles.minhaFoto} src={image} alt="Imagem Background" />
        </div>
      </div>
    :
      <div className={styles.detailPrimary}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>{title}</h1>
          <p className={styles.paragrafo}>{description}</p>
        </div>
        <div className={styles.imagens}>
          <img className={styles.minhaFoto} src={image} alt="Imagem Background" />
        </div>
      </div>
    }
    </>
  )
}

export default Details;