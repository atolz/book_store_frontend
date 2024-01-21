'use client'
import { registerServiceWorker } from '@/utils/registerServiceWorker'
import React, { useEffect } from 'react'

const ServciceWorkerPage = () => {
    
    useEffect(()=>{
        console.log("load")
        registerServiceWorker()
    },[])
  return (
    <div>ServciceWorkerPage

<button onClick={async()=>{
   console.log((await navigator.serviceWorker?.getRegistration())?.showNotification('Hey there'))

//    new Notification('Heyyy')
//    alert(Notification.permission)
//    Notification.requestPermission((pem)=>{
//     alert('notif pertm'+pem)
//    })
}}>Show Notification</button>

    </div>
  )
}































export default ServciceWorkerPage