function solve(input){
    let result = '';

    result += '<table>\n';
    for (const line of input) {
        let obj = JSON.parse(line);
     
        result += ' <tr>\n';
        result += `     <td>${obj.name}</td>\n`;
        result += `     <td>${obj.position}</td>\n`;
        result += `     <td>${obj.salary}</td>\n`;
        result += ' </tr>\n';
    }
    result += '</table>';

    console.log(result);
}