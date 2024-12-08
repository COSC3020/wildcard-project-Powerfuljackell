function graphMatrixMaker(n){
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

function graphListMaker(n){
    matrix = [...Array(n)].map(_=>Array());
    for(i = 0; i < n; i++){ //n complexity
        for(j = i; j <n; j++ ){//1/2n average
            if(i != j){
                if(Math.random() >= 0.5){
                    matrix[i].push(j)
                    matrix[j].push(i)
                }
            }
        }
    }
    return matrix;
}

function* graphMatrixGenerator(n){
    while(true){
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
        yield matrix;
    }
}

function* graphListGenerator(n){
    while(true){
        matrix = [...Array(n)].map(_=>Array());
        for(i = 0; i < n; i++){ //n complexity
            for(j = i; j <n; j++ ){//1/2n average
                if(i != j){
                    if(Math.random() >= 0.5){
                        matrix[i].push(j)
                        matrix[j].push(i)
                    }
                }
            }
        }
        yield matrix;
    }
}