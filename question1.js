function msToTime(s) {
    const pad = (n) => n.toString().padStart(2, '0')
    const hours = pad(s / 3.6e6 | 0)
    const minutes = pad((s % 3.6e6) / 6e4 | 0)
    const seconds = pad((s % 6e4) / 1000 | 0)
    if(hours > 23) {
       const days = Math.round(hours / 24)
       const newhours = pad((hours % 24 | 0))
       return days + ' day(s) and ' + newhours  + ':' + minutes + ':' + seconds
    }
    return hours + ':' + minutes + ':' + seconds
}