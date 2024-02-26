import s from './post.module.scss';

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
      <div className={s.content}>
        <p>post.desc</p>
      </div>
      <div className={s.info}>
        <div>12 likes</div>
        <div>12 comments</div>
        <div>share</div>
      </div>
    </div>
  );
};

export default Post;
