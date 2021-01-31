import  data from "./Base"

/**
 *
 *这是一个初始化方法，一开始都要用这个来初始化
 * @param {string} msg
 * @public {*}
 */
const init  = (msg:string) =>{

    console.log("[msg]",msg)
}

init(data)

export {init ,data}