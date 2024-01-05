let myId = window.localStorage.getItem('myId');
if(!myId){
    myID = Math.floor(Math.random()*10000000)+"_"+(new Date()).getTime();
    window.localStorage.setItem('myid',myId)
}