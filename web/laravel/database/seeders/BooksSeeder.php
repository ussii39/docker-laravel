<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Fruit;

class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('book')->truncate();
        // $books = ['田中太郎','山田太郎','佐藤太郎'];
        // foreach ($books as $book) {
        //     DB::table('book')->insert(['title'=> $book]);
        // }
        Fruit::factory()->count(5)->create();
    }
}
