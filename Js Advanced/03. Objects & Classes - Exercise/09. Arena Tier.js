function solve(arr) {
    let list = {}
    for (let el of arr) {
      if (el === 'Ave Cesar') {
        break
      }
      else if (el.includes(' -> ')) {
        add(el)
      }
      else if (el.includes(' vs ')) {
        battle(el)
      }
    }
    let tier = Object.entries(list)
    let array = []
    for (let elem of tier) {
      let name = elem[0]
      let pow = Object.entries(elem[1])
      let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
      array.push([name, pow, sum])
    }
    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
    for (let part of array) {
      console.log(`${part[0]}: ${part[2]} skill`);
      part[1]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }
   
    function add(el) {
      let [gladiator, skill, power] = el.split(' -> ')
      power = Number(power)
      if (!list.hasOwnProperty(gladiator)) {
        list[gladiator] = {}
        list[gladiator][skill] = power
      }
      else {
        if (!list[gladiator].hasOwnProperty(skill)) {
          list[gladiator][skill] = power
        }
        else {
          let oldPow = list[gladiator][skill]
          if (power > oldPow) {
            list[gladiator][skill] = power
          }
        }
      }
    }
    function battle(el) {
      let [gladiatorA, gladiatorB] = el.split(' vs ')
      if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
        let skillA = list[gladiatorA]
        let skillB = list[gladiatorB]
        for (let elA in skillA) {
          for (let elB in skillB) {
            if (elA === elB) {
              if (skillA[elA] > skillB[elB]) {
                delete list[gladiatorB]
              }
              else if (skillA[elA] < skillB[elB]) {
                delete list[gladiatorA]
              }
            }
          }
        }
      }
    }
  }