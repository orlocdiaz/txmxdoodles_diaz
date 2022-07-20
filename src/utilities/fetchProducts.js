export const fetchProducts = (time, arrSet) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(arrSet)
    }, time);
    setTimeout(() => {
      rej('ERROR WHILE LOADING!')
    }, time);
  })
}
export default fetchProducts
