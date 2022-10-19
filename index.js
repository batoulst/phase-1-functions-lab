// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    const d = Math.abs(num - 42)
    return d;
}

function distanceFromHqInFeet(num) {
    const d = distanceFromHqInBlocks(num) * 264;
    return d;
}
function distanceTravelledInFeet(num1, num2) {
    const d = 264 * Math.abs(num1 - num2)
    return d;
}
function calculatesFarePrice(start, destination) {
    const d = distanceTravelledInFeet(start, destination);
    if (d <= 400) { return 0 }
    else if (d > 400 && d <= 2000) { return 0.02 * (d - 400) }
    else if (d > 2000 && d <= 2500) { return 25 }
    else { return 'cannot travel that far' }

}
