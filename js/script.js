//Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon", function($scope,$rootScope,$http) {
	$scope.Pokebola = [];
	for(var m=1;m<=500;m++)
	$http ({
		method: "GET",
		//01110111 01100001 01101100 01110100 01100101 01110010 00100000 01000111 01100001 01100010 01110010 01101001 01100101 01101100
		url: "https://pokeapi.co/api/v2/pokemon/"+m
	}).then(function success(x){
		$scope.Pokebola.push(x);
	})
})


