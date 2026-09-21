import type { Post as PostType } from '../types/post';

interface PostProps {
  post: PostType;
}
function Post({ post }: PostProps) {
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <p>{post.content}</p>
        <p>{post.date}</p>
      </article>
    );
}

export default Post;