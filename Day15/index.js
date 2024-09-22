//Problem = https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
    let islands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (r, c) => {
        const q = [];
        q.push([r, c]);
        grid[r][c] = "0";

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === "1") {
                    q.push([nr, nc]);
                    grid[nr][nc] = "0";
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islands += 1;
                bfs(r, c);
            }
        }
    }

    return islands;    
};