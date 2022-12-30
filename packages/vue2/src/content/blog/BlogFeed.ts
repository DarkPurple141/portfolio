export default {
  feed() {
    return {
      path: '/feed.json',
      // @ts-expect-error
      resolve: (response, mappers) => mappers.pipe(response.results),
    }
  },
}
