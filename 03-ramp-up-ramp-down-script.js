import { check, sleep } from "k6";
import http from "k6/http";

//Ramp Up and Ramp Down
export let options = {
  stages: [
    { duration: '10s', target: 5 },

    { duration: '20s', target: 3 },

    { duration: '20s', target: 0},
  ]
};

export default function() {
    const res = http.get('https://httpbin.test.k6.io/')
    check(res, {
        'status was 200': (r) => r.status == 200
    }) 
    sleep(1)
}
