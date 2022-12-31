export default {
  subjects() {
    return {
      path: '/blogs.json',
      // @ts-expect-error
      resolve: (response, mappers) => mappers.pipe(response.results),
    }
  },
}
