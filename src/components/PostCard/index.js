import styles from './PostCard.module.css';

import ButtonCard from '../ButtonCard';

const PostCard = ({ post }) => {
  return (
    <>
      <div className={styles.post}>
        <img src={require(`../../../public/assets/posts/${post.id}/img.jpg`)} alt="Imagens Cards" className={styles.capa} />
      </div>
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <ButtonCard children='Read More' />
    </>
  )
};

export default PostCard;