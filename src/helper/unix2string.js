
export default function(unixTimestamp) {
    return new Date(unixTimestamp * 1000).toISOString()
}