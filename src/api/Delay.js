function Delay (){
    const delay = Math.floor(Math.random() * (1000 - 500) + 500);
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(false), delay)
    })
}

export default Delay