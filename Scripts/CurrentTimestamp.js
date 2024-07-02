/**
 {
 "api": 1,
 "name": "Current Timestamp",
 "description": "Get current unix timestamp",
 "author": "Amuwall",
 "icon": "watch",
 "tags": "unix,timestamp"
 }
 **/


function main(state) {
    state.fullText = Math.floor(Date.now() / 1000);
}