function solve(input) {
    let sorted = [...new Set(input)].sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
      });

    console.log(sorted.join('\n'));
}