export default {
  subjects() {
    return {
      path: '/blogs.json',
      resolve: (response, mappers) => mappers.pipe(response.results),
    }
  },
}
