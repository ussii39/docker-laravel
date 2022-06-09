<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FruitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $names = ['apple', 'banana', 'lemon', 'grape', 'orange', 'peach', 'pineapple'];
        $colors = ['red', 'yellow', 'purple', 'orange', 'pink', 'black', 'white'];

        $name = $names[rand(0, count($names) - 1)];
        $color = $colors[rand(0, count($colors) - 1)];
        return [
            'name' => $name,
            'color' => $color,
            'price' => rand(100,1500),
        ];
    }
}
