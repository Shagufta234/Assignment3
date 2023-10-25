/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let row = 0; row < m; row++) {
        dp[row][0] = 1;
    }

    let maxMoves = 0;

    for (let col = 1; col < n; col++) {
        for (let row = 0; row < m; row++) {
            dp[row][col] = 1;
            // Try moving to the three possible neighboring cells in the next column
            for (const dr of [-1, 0, 1]) {
                const newRow = row + dr;
                if (newRow >= 0 && newRow < m && grid[newRow][col] > grid[row][col]) {
                    dp[row][col] = Math.max(dp[row][col], dp[newRow][col - 1] + 1);
                }
            }
            maxMoves = Math.max(maxMoves, dp[row][col]);
        }
    }

    return maxMoves;
};

// Example usage:
const grid1 = [
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15]
];
console.log(maxMoves(grid1)); // Output: 3

const grid2 = [
    [3, 2, 4],
    [2, 1, 9],
    [1, 1, 7]
];
console.log(maxMoves(grid2)); // Output: 0
