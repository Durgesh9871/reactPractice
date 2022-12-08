import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [isUserOnline , setUserOnline] = useState(false)
     

    useEffect(()=>{
        {navigator.onLine ? setUserOnline(true): setUserOnline(false) }
    },[])

    return isUserOnline

    // if (navigator.onLine) {
    //     console.log('online');
    //   } else {
    //     console.log('offline');
    //   }



};

export default useOnlineStatus;
