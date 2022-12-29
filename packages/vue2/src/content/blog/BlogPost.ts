export default {
  post(id: string) {
    return {
      path: `/post/${id}.json`,
      resolve: (response, mappers) => {
        // eslint-disable-next-line prefer-const
        let { title, content, meta } = response //.results[0]
        content = Buffer.from(content, 'base64').toString('ascii')
        return mappers.merge({ title, content, ...meta })
      },
    }
  },
}
