function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let objectArray = JSON.parse(input);
    return objectArray.map(o => {
        let a = Math.abs(area.call(o));
        let v = Math.abs(vol.call(o));
        return { area: a, volume: v };
    });
}