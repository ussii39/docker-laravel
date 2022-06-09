<?php

namespace Database\Factories;
use App\CEO;
use Faker\Generator as Faker;

use Illuminate\Database\Eloquent\Factories\Factory;

// class CEOFactory extends Factory
// {
//     /**
//      * Define the model's default state.
//      *
//      * @return array
//      */
//     public function definition()
//     {
//         return [
//             //
//         ];
//     }
// }
$factory->define(CEO::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'company_name' => $faker->unique()->company,
        'year' => $faker->year,
        'company_headquarters' => $faker->city,
        'what_company_does' => $faker->sentence
    ];
});