function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }

    return num * pow(num, degree -1);
}

console.log(pow(3, 2));
console.log(pow(5, 3));
console.log(pow(9, 9));
console.log(pow(2, 16));

