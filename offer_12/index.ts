function exist(board: string[][], word: string): boolean {
    const x = board.length
    const y = board[0]?.length || 0
    let state = new Array(x).fill(0).map(i => new Array(y).fill(0))

    //判断该位置x,y附近是否存在字符al = word[index]
    function isExist(x: number, y: number, index: number): boolean {
        if(x < 0 || y < 0 ) return false
        if(index >= word.length) return true
        const al = word[index]
        state[x][y] = 1
        console.log(state)
        let r = false, l = false, t = false, b = false
        // 必须保证每个方向都要参与判断
        if(board[x+1]?.[y] === al && state[x+1]?.[y]===0)  b = isExist(x+1 , y , index+ 1)
        if(board[x][y+1] === al && state[x][y+1]===0) r = isExist(x , y+1 , index+ 1)
        if(board[x -1]?.[y] === al  && state[x -1 ]?.[y]===0 ) l =  isExist(x-1,y,index+ 1)
        if (board[x][y - 1] === al && state[x][y - 1] === 0) t = isExist(x , y -1, index+ 1)
        // 回溯，避免多条路径之间冲突
        if (!(r || l || t || b)) state[x][y] = 0
        return( r || l || t || b)
    }


    for (let i = 0; i < x; i++){
        for (let j = 0; j < y; j++)
        {
            if (board[i][j] === word[0]) {
                const res = isExist(i, j, 1)
                if (res) return res
            }
        }
    }
    return false

};


console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],
"ABCESEEEFS"))