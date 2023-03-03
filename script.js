function clock(){
    let hour = document.getElementById("hour")
    let minute = document.getElementById("minutes")
    let second = document.getElementById("seconds")
    let session = document.getElementById('session')
    // session = "AM"

    
    let now = new Date()
    let hh = now.getHours()
    let mm = now.getMinutes()
    let ss = now.getSeconds()
    // console.log(hh,mm,ss)
    
    //logic to convert 24hrs into 12hr format.
    if(hh>12){
        hh = hh-12;
        sess= "PM"
    }
    if(hh==0){
        hh=12
        sess= "AM"
    }
    hh = (hh<10)? "0"+ hh:hh
    mm = (mm<10)? "0"+ mm:mm
    ss = (ss<10)? "0"+ ss:ss
    //putting values
    hour.innerHTML = `${hh} `
    minute.innerHTML = `${mm} `
    second.innerHTML = `${ss} `
    session.innerHTML =`${sess}`
}
setInterval(clock,1000);