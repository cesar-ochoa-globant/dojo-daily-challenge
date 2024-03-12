function triangleType(leg1, leg2, hypo) {
    const sides = [leg1, leg2, hypo].sort((a, b) => a - b);

    if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)) {
        return "This is a Right Triangle";
    } else if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) > Math.pow(sides[2], 2)) {
        return "This is an Acute Triangle";
    } else {
        return "This is an Obtuse Triangle";
    }
}

console.log(triangleType(17, 13, 23));
console.log(triangleType(45, 55, 70));
console.log(triangleType(80, 84, 116));
