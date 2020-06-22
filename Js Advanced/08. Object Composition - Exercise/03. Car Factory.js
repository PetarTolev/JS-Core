function solve(input) {
    const engines = [{
            power: 90,
            volume: 1800
        },
        {
            power: 120,
            volume: 2400,
        },
        {
            power: 200,
            volume: 3500
        }
    ];

    const carriages = [{
            type: 'hatchback'
        },
        {
            type: 'coupe'
        }
    ];

    let ws = input.wheelsize;

    return {
        model: input.model,
        engine: engines.find(e => e.power >= input.power),
        carriage: {...carriages.find(c => c.type === input.carriage), color: input.color },
        wheels: new Array(4).fill(ws % 2 === 0 ? ws - 1 : ws)
    };
}