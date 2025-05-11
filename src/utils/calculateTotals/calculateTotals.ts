export function calculateTotals( amounts: number[]): number {
    // Calculate the total amount
    const total = amounts.reduce((acc, amount) => acc + amount, 0);
    return total;
}