module.exports = async () => {
  /* Note: The YTS API docs describe getting movie reviews.
   * Their example URL is https://yts.mx/api/v2/movie_reviews.json?movie_id=10
   * However, as of 2021-01-14, all calls to the endpoint return a 404.
   */
  throw new Error("The movie reviews API is not working.");
};