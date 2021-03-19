const data1 = [{
  name: '中国',
  children: [{
    name: '教第三节课',
  },
  {
    name: '教呼呼',
    children: [{
      name: '大一',
      children: [{
        name: '课程1',
        children: [{
          name: '1231'
        },
        {
          name: '121'
        }
        ]
      },
      {
        name: '课程3',
        children: [{
          name: '1233'
        },]
      },
      ]
    }]
  },
  {
    name: '活动',
    children: null
  }
  ]
},
{
  name: '菜单'
}
];

// 非递归
function getNames(data) {
  let result = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].name) {
      result.push(data[i].name);
    }

    if (Array.isArray(data[i].children)) {
      data.splice(i + 1, 0, ...data[i].children)
    }
  }

  return result;
}

// let res = getNames(data1)
// console.log(res)

//-----------------------------2--------------------------------
/**
* 实现一个方法，可以实现异步函数串行执行，函数返回一个promise，所有异步执行成功promise resolve, 有一个失败直接promise reject
*
* 执行完promise1 再执行 promise2，promise2 执行i++完再执行 promise3 整个是串行
*
* 返回一个promise
* @param promises 一个Promise
* @return Promsie
*/
const promise1 = () => new Promise(resolve => setTimeout(() => resolve(10), 1000))
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(20), 2000))
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(30), 3000))
// 间隔 1000 + 2000 + 3000 = 6s 之后输出 30
// 第一个异步执行完  再执行第二个，第二个异步执行完执行第三个
// pipe([getUserInfo, loadData, loadList]).then(console.log).catch(console.error)

function pipe(promiseList = []) {
  if (promiseList.length === 0) {
    return resolve(null);
  }

  
  let curPro = Promise.resolve()
  
  for (let i = 0; i < promiseList.length; i++) {
    curPro = curPro.then(promiseList[i])
  }

  return curPro
}
// pipe([promise1, promise2, promise3]).then(console.log).catch(console.error)

//-----------------------------3--------------------------------
/*
function fun(){

}

fun(1);
fun(2);
fun(3);
fun(4);
console.log(fun()) // 10  来来来问个小问题 就这种方式 不能改形式 如何实现这个结果
*/

function Fun() {
  
  let sum = 0;
  function b (num) {
    return sum += num || 0 ;
  }
  return b;
}
const fun = Fun()
fun(1);
fun(2);
fun(3);
fun(4);
console.log(fun())