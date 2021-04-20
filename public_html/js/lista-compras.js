function ListaComprasController($scope){
    $scope.itens = [
        {produto: 'Leite',quantidade: 2,comprado:false},
        {produto: 'Cerveja',quantidade: 12,comprado:false},
        {produto: 'Carne',quantidade: 5,comprado:false},
    ];
    $scope.adicionarItem = function (){
        $scope.itens.push({
            produto:$scope.item.produto,
            quantidade:$scope.item.quantidade,
            comprado:false
        });
    };
}

