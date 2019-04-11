
export default function(unixTimestamp) {
    return new Date(unixTimestamp).toDateString()
}