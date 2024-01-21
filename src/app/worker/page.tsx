'use client'
import { registerServiceWorker } from '@/utils/registerServiceWorker'
import React, { useEffect } from 'react'

const ServciceWorkerPage = () => {
    
    useEffect(()=>{
        console.log("load")
        registerServiceWorker()
    },[])
  return (
    <div style={{display:'flex', flexDirection:'column'}}>ServciceWorkerPage

<button onClick={async()=>{
   console.log((await navigator.serviceWorker?.getRegistration())?.showNotification('Hey there',{body:'This is the body'}))

//    new Notification('Heyyy')
//    alert(Notification.permission)
//    Notification.requestPermission((pem)=>{
//     alert('notif pertm'+pem)
//    })
}}>Show Notification</button>


<button  style={{
    background:'red'
}}
onClick={()=>{
   
    Notification.requestPermission((pem)=>{
     new Notification('Local push notif',{body:'Fanboy', tag:`${Math.random()}`})
})}}

>Local Notification</button>


<button onClick={()=>{
     setTimeout(async()=>{
        (await navigator.serviceWorker?.getRegistration())?.showNotification('TImer Servuce WORKER',{body:'This is the body'})
     },5000)
}}>WIth timer Service worker</button>


<button  onClick={()=>{
       setTimeout(async()=>{
        Notification.requestPermission((pem)=>{
            new Notification('LOCAL PUSH NOTIFICATION',{body:'Fanboy', tag:`${Math.random()}`})
        })
     },5000)
 }}>WIth timer Localr</button>

    </div>
  )
}































export default ServciceWorkerPage