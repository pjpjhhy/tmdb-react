export default function changeRuntime(time){
    const hours = Math.floor(time / 60);
    const minutes = time % 60

    if (time === 'number') {
        return `${hours}시간 ${minutes}분`;
    } else {
        return '';
    }
}