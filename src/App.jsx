import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  userId: getUserById(post.userId),
}));

function getPostById(id) {
  return postsFromServer.find(post => post.id === id) || null;
}

export const comments = commentsFromServer.map(comment => ({
  ...comment,
  postId: getPostById(comment.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {/* {console.log(comments)} */}
    <PostList posts={posts} comments={comments} />
  </section>
);
