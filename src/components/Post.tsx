import { memo, useState } from 'react';
import '../styles/posts.css';
import type { Post as PostType } from '../types/post';

interface PostProps {
  post: PostType;
}
function Post({ post }: PostProps) {
  const [currentTime] = useState(() => Date.now());
  const isNew = currentTime - new Date(post.date).getTime() < 24 * 60 * 60 * 1000;
    const preview = post.content.split(' ').slice(0, 8).join(' ') + '...';
    return (
      <article 
      className="post-card"
      style={{ backgroundColor: post.author === 'Amara' ? '#f5d76e' : undefined
              
      }}>
        <h2>{post.title}{isNew && <span className="new-badge">New!</span>}</h2>
        <p className="post-meta">{post.author} - {post.date}</p>
        <p>{preview}</p>
      </article>
    );
}

export default memo(Post);