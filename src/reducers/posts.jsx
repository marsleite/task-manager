export const posts = (posts = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;
    case 'ADD_POST':
      return [...posts, action.payload];
    case 'DELETE_POST':
      return posts.filter(post => post._id !== action.payload);
    case 'EDIT_POST':
      return posts.map(post => {
        if (post._id === action.payload._id) {
          return action.payload;
        }
        return post;
      });
    default:
      return posts;
  }
};