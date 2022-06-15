import http from 'k6/http'

//Main function
//Entry point for virtual user(s)
export default function(){
    http.get('https://www.google.com')
    
}