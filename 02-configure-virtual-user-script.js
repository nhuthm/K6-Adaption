import http from "k6/http";

//Configuration on Virtual User(s) instead of running command line
export let options = {
    vus: 10,
    duration: '10s'
    //For the format of the duration, if we want to run with min also, can be: 1m2s - from Udemy course guidance
}


export default function() {
    http.get('https://www.google.com')  
}