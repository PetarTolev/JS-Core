function solve(input) {
    let totalCashInATM = 0;
    let banknotesInATM = [];
    for (const line of input) {
        let message = '';

        if (line.length > 2) {
            //Insert money in ATM
            const currentSumOfBanknotes = line.reduce((a, b) => a + b, 0)

            for (const currentBanknote of line) {
                banknotesInATM.push(currentBanknote);
            }

            totalCashInATM += currentSumOfBanknotes;

            message = `Service Report: ${currentSumOfBanknotes}$ inserted. Current balance: ${totalCashInATM}$.`
        }
        else if (line.length === 2) {
            //withdraw money from ATM
            const currentBalanceInPersonAccount = line[0];
            const moneyToWithdraw = line[1];

            if (currentBalanceInPersonAccount < moneyToWithdraw) {
                //Not enough money in account
                message = `Not enough money in your account. Account balance: ${currentBalanceInPersonAccount}$.`;
            }
            else if (totalCashInATM < moneyToWithdraw) {
                //Not enough money in ATM
                message = `ATM machine is out of order!`;
            }
            else {
                totalCashInATM -= moneyToWithdraw;

                banknotesInATM = banknotesInATM.sort((a, b) => b - a)
                let sum = 0;

                for (let i = 0; i < banknotesInATM.length; i++) {
                    if (sum + banknotesInATM[i] <= moneyToWithdraw) {
                        sum += +banknotesInATM.splice(i, 1);
                        i--;
                    }
                }

                const remainingMoneyInAccount = currentBalanceInPersonAccount - moneyToWithdraw;

                message = `You get ${moneyToWithdraw}$. Account balance: ${remainingMoneyInAccount}$. Thank you!`;
            }
        }
        else if (line.length === 1) {
            //Report the count of a given banknotes in ATM
            const banknote = line[0];
            let count = 0;

            for (const currentBanknote of banknotesInATM) {
                if (currentBanknote === banknote) {
                    count++;
                }
            }

            message = `Service Report: Banknotes from ${banknote}$: ${count}.`;
        }

        console.log(message);
    }
}