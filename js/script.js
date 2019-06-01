//Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon", function($scope,$rootScope,$http) {
	$scope.Pokebola = [];
	$http ({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/100"
	}).then(function success(x){
		$scope.Pokebola.push(x);
	})
})
