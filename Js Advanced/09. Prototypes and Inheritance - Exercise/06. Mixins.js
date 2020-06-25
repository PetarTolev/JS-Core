function solve() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + ram + hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function() {
            return this.processorSpeed > this.ram / 4 ? true : false;
        }

        classToExtend.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed) ? true : false;
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer ? true : false;
        }

        classToExtend.prototype.isClassy = function() {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3 ? true : false;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}