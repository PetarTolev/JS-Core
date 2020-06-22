function solve(obj) {
    if (obj.dizziness === true) {
        obj.dizziness = false;
        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
    }

    return obj;
}