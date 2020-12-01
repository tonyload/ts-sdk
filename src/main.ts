import './main.scss'
import popup from  './components/popup/popup'

console.log("hello worlD1")

let listItem = document.querySelectorAll("#list li")

for(let i =0;i<listItem.length;i++){
    listItem[i].addEventListener('click',function(){
         let url :any = listItem[i].getAttribute('data-url')
          let title :any = listItem[i].getAttribute('data-title')
          console.log(url,title)
        
          popup({
              width:"100px",
          })
    })
}