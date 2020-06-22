function solve() {
    const mainHero = { health: 100 }

    return {
        mage: function(name) {
            return {
                ...mainHero,
                name,
                mana: 100,
                cast: function(string) {
                    this.mana--;
                    console.log(`${this.name} cast ${string}`);
                }
            };
        },
        fighter: function(name) {
            return {
                ...mainHero,
                name,
                stamina: 100,
                fight: function() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            };
        }
    }
}