/** Returns all blog posts as a collection. Empty, as posts are fetched from WordPress. */

const wpPosts = collection => {
  return collection.getAll().filter(item => item.data.blog);
};

module.exports = {
  wpPosts
};
