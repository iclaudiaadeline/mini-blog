import type { Post as PostType } from '../types/post';

interface PostProps {
  post: PostType;
}
function Post({ post }: PostProps) {
    return <h2>{post.title}</h2>;
}

export default Post;