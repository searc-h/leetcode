/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
 * 因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * 
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function movingCount(m: number, n: number, k: number): number {

    
   function getSum(n:number){
        let temp=0;
        while (n>0){
            temp+=n%10;
            n=n/10;
        }
        return temp;
    }
    
    let  res=0,i:number,j:number;
    let dp:number[][] =new Array(n + 1).fill(new Array(m + 1));
    //dp[i][j]表示当前位置是否可达
    dp[0][1]=1;
    for (i=1;i<m+1;i++){
        for (j=1;j<n+1;j++){
            let sum=getSum(i-1)+getSum(j-1);
            if ((dp[i-1][j]==1||dp[i][j-1]==1)&&sum<=k){
                res++;
                dp[i][j]=1;
            }
        }
    }

    return res;

}; \


/**
 * 深度优先
 * class Solution {
    boolean[][] visited;
    public int movingCount(int m, int n, int k) {
        visited = new boolean[m][n]; 
        return dfs(0, 0, m, n, k);
    }

    private int dfs(int x, int y, int m, int n, int k) {
        if (x >= m || y >= n || visited[x][y]
                || (x % 10 + x / 10 + y % 10 + y / 10) > k) {
            return 0;
        }
        visited[x][y] = true;
        return 1 + dfs(x + 1, y, m, n, k) + dfs(x, y + 1, m, n, k);
    }
}
 */