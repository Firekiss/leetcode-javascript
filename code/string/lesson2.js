// const extractSubstr = (s) => {
//   let arr = s.split('')
//   let substrArr = []
//   let last = null
//   let ch = 0
//   let firLen = 0
//   let secLen = 0

//   for (let i = 0, len = arr.length; i < len; i++) {
//     const cur = arr[i]
//     if (cur !== last) {
//       ch++
//       if (ch === 3) return null
//       last = cur
//     }

//     if (ch === 1) {
//       firLen++
//       substrArr.push(cur)
//     }
//     if (ch === 2) {
//       secLen++
//       substrArr.push(cur)
//     }
//     if (firLen === secLen) return substrArr.join('')
//   }
//   return null
// }

// export default (s) => {
//   let arr = []
//   for (let i = 0, len = s.length - 1; i < len; i++) {
//     let substr = extractSubstr(s.substring(i))
//     if (substr) arr.push(substr)
//   }
//   return arr.length
// }

export default (s) => {
  let last, cur, res
  last = res = 0
  cur = 1
  for (let i = 1, l = s.length; i < l; i++) {
    if (s[i] === s[i - 1]) {
      cur++
    } else {
      last = cur
      cur = 1
    }

    if (last >= cur) res++
  }
  return res
}
