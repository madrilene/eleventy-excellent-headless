module.exports = {
  wpImages: data => {
    return data.wpPosts.feed.entry;
  },
  myLinks: data => {
    return data.links.feed.entry;
  }
};
