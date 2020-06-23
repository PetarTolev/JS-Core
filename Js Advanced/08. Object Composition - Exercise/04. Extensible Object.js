function solve() {
    const proto = {};

    const instance = Object.create(proto);

    instance.extend = function(template) {
        for (const prop in template) {
            if (typeof template[prop] === 'function') {
                proto[prop] = template[prop];
            } else {
                instance[prop] = template[prop];
            }
        }
    }

    return instance;
}