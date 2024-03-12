export const fakeUserAPI = async () => {
  return await new Promise(res => {
    setTimeout(() => {
      res({
        userName: 'Narek',
        role: 'admin',
      })
    }, 1500)
  })
}
