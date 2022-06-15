import http from "k6/http"

import { check } from 'k6'

export let options = {
    vus: 10,
    duration: '10s'
}

export default function() {
    // let response = http.get('https://run.mocky.io/v3/9f26cb51-6746-49fc-9bab-d640b53b9b68')

    let response = http.get('https://run.mocky.io/v3/87d3e0bc-33ad-4e0c-80f7-0175a1e996e1') //Return with JSON repsonse

    console.log(`response body length ${response.body.length} for VU= ${__VU} ITERA = ${__ITER}`)
    check(response, {
        'is response status is 200 :' : (r) => r.status === 200,
        'body size is 44 bytes : ' : (r) => r.body.length == 44,
    })
    
}