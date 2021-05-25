// import World from './world'
//
// const root = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 03.基本の型定義
// import { anySample, notExistSample, primitiveSample, unknownSample } from './basic'
//
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04.関数の型定義
import { logMessage7 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage7('Hello TypeScript')
isUserSignedIn('ABC', 'tora')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 400, 500)
console.log('Function parameters sample 5: Total price:', sum)
