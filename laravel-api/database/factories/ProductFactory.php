<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'product_name' => $faker->name,
        'description' => $faker->realText(200),
        'rating' => $faker->randomNumber(1),
        'price' => $faker->randomNumber(3)/10
    ];
});