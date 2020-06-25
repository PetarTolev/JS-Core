function solve() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error();
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this._batteryValidation(battery);
            this._weight = weight;
            this._color = color;
            this._battery = battery;
        }

        _batteryValidation(battery) {
            if (!(battery instanceof Battery)) {
                throw new TypeError();
            }
        }

        get battery() {
            return this._battery;
        }

        set battery(newBattery) {
            this._batteryValidation(newBattery);

            this._battery = newBattery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this._keyboardValidation(keyboard);
            this._monitorValidation(monitor);
            this._keyboard = keyboard;
            this._monitor = monitor;
        }

        _keyboardValidation(keyboard) {
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError();
            }
        }

        _monitorValidation(monitor) {
            if (!(monitor instanceof Monitor)) {
                throw new TypeError();
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(newMonitor) {
            this._monitorValidation(newMonitor);

            this._monitor = newMonitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(newKeyboard) {
            this._keyboardValidation(newKeyboard);

            this._keyboard = newKeyboard;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}