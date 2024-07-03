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
    let parsedDate = new Date(parseInt(input.text) * 1000)
    input.text = parsedDate.toLocaleString()
}
