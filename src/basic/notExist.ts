export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'tora'
  if (!name) {
    console.log('notExist sample 3:', '猫である。名前はまだ' + name)
  } else {
    console.log('notExist sample 2:', '猫である。名前は' + name)
  }

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  age = 28
  if (!age) {
    console.log('notExist sample 5:', '年齢は秘密です')
  } else {
    console.log('notExist sample 6:', '年齢は' + age + 'です。')
  }
}
