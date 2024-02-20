import s from './Post.module.scss';

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.user}>
        <div className={s.user_info}>
          <img src="" alt="user_photo" className={s.user_img} />
          <div className={s.user_details}>
            <span>post.name</span>
            <span className={s.data}>1 min ago</span>
          </div>
        </div>
      </div>
      <div className={s.content}></div>
      <div className={s.info}></div>
    </div>
  );
};

export default Post;
