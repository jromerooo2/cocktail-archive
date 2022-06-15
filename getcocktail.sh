#!/bin/bash

cocktail=$1

URL=https://thecocktaildb.com/api/json/v1/1/search.php?s=$cocktail

if [[ ! -z "$cocktail" ]]
then
	response= curl -s $URL | jq -r ".drinks[] | {idDrink, strInstructions, strImageSource}"
	echo "$response $response"
else
	echo "Please enter a valid cocktail"
fi

