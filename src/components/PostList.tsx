import type { Post as PostType } from '../types/post';
import Post from './Post';


const posts: PostType[] = [
  {
    id: 1,
    title: 'Use const by default',
    author: 'Amara',
    content: 'Start every variable with const and only switch to let when the value really needs to change. It makes your code easier to read and safer.',
    date: '2026-09-21',
  },
  {
    id: 2,
    title: 'Name your components clearly',
    author: 'Kwame',
    content: 'A good component name says what it shows, like PostList or Header. When names are clear, you spend less time guessing what a file does.',
    date: '2026-09-15',
  },
  {
    id: 3,
    title: 'Keep functions small',
    author: 'Amara',
    content: 'If a function does three different jobs, split it into three functions. Small pieces are easier to test and easier to reuse.',
    date: '2026-08-30',
  },
];

function PostList() {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;