module.exports = {
  async beforeCreate(event) {
    const { data, state } = event;

    // 1. Check if there is an authenticated user (the admin)
    // and if the author hasn't been manually set
    if (state.user && !data.author) {
      
      // 2. Find the Author record that matches the Admin's email
      const [author] = await strapi.entityService.findMany('api::author.author', {
        filters: { email: state.user.email },
      });

      // 3. If a match is found, link it to the article
      if (author) {
        data.author = author.id;
      }
    }
  },
};