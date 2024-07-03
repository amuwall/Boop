/**
 {
 "api": 1,
 "name": "Timestamp to Date",
 "description": "Convert Unix timestamps to date",
 "author": "Amuwall",
 "icon": "watch",
 "tags": "date,time,calendar,unix,timestamp"
 }
 **/

function main(input) {
    let string = input.text
    let parsedDate = new Date(parseInt(string * 1000))
    input.text = parsedDate.toLocaleString()
}
