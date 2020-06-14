function Spy(target, methodName) {
    const res = { count: 0 };
    const method = target[methodName];
    if (!target.hasOwnProperty(methodName)) { return; }
    target[methodName] = function(...args) {
        res.count++;
        return method.apply(target, args);
    };
    return res;
}