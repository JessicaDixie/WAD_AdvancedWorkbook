//Extended Euclidean Algorithm
function extendedGCD(a, b) {
    if (b === 0) {
        return { gcd: a, x: 1, y: 0 };
    } else {
        const result = extendedGCD(b, a % b);
        const x = result.y;
        const y = result.x - Math.floor(a / b) * result.y;
        return { gcd: result.gcd, x, y };
    }
}

// Replace these values with the integer values that you want to test

const a = 23;
const b = 120;

const gcdInfo = extendedGCD(a, b);
console.log(`GCD of ${a} and ${b} is ${gcdInfo.gcd}.`);
console.log(`Bézout's coefficients (x, y) for ${a} and ${b} are (${gcdInfo.x}, ${gcdInfo.y}).`);
