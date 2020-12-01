import './popup.scss' //全局CSS 操作
let styles = require('./popup.scss')

interface Ipopup {
    width?:string,
    height?:string,
    title?:string,
    pos?:string,
    mask?:boolean,
    content?:()=>void //无返回值的函数类型
}

interface Icomponent{ //规范所有组件格式 
    tempContainer:HTMLElement;
    init:()=>void;
    template:()=>void;
    handle:()=>void;
}

function popup(options:Ipopup){
    return new Popup(options)
}

class Popup implements Icomponent{
    tempContainer = document.createElement('div');
    constructor(private settings:Ipopup){
        this.settings = Object.assign({
            width:"100%",
            height:"100%",
            title:"",
            pos:"center",
            mask:true,
            center:function(){
                console.log("hello world!")
            }
        },this.settings)

       this.init()
    }

    init(){//初始化
        this.template()
    }
    template(){//创建模板
        this.tempContainer.innerHTML = `<h1 class="${styles.popup}">hello </h1>`
        document.body.appendChild(this.tempContainer)
    }
    handle(){//事件

    }

}

export default popup;