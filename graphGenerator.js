function graphMatrixGenerator(n){
    matrix = [...Array(n)].map(_=>Array(n).fill(0));
    for(i = 0; i < n; i++){ //n complexity
        for(j = i; j <n; j++ ){//1/2n average
            if(matrix[i][j] == 0 && i !=j){
                if(Math.random() >= 0.5){
                    matrix[i][j] = 1
                    matrix[j][i] = 1
                }
            }
        }
    }
    return matrix;
}