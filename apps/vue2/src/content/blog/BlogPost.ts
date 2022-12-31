export default {
  post(id: string) {
    return {
      path: `/post/${id}.json`,
      resolve: (response: any, mappers: any) => {
        const { title, content, meta } = response //.results[0]
        return mappers.merge({ title, content: atob(content), ...meta })
      },
    }
  },
}
