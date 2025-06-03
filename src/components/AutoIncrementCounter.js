import React, { useEffect, useState } from 'react'

export default function AutoIncrementCounter() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(prevCount => prevCount+1);
    }, 1000);

    return ()=> clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Auto Increment Count:{count}</h2>
    </div>
  )
}
