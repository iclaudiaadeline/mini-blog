import { memo } from 'react';
import '../styles/posts.css';
import type { Post as PostType } from '../types/post';

interface PostProps {
  post: PostType;
}
function Post({ post }: PostProps) {
    const isNew = Date.now() - new Date(post.date).getTime() < 24 * 60 * 60 * 1000;
    return (
      <article className="post-card">
        <h2>{post.title}{isNew && <span className="new-badge">New!</span>}</h2>
        <p>{post.author}</p>
        <p>{post.content}</p>
        <p>{post.date}</p>
      </article>
    );
}

export default memo(Post);