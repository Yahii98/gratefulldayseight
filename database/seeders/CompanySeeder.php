<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::factory()->count(2)->create();
       /*
       DB::table('companies')->insert([
        'company_name' => Str::random(10),
        'company_updated_at' => now(),
        'updated_at' => now(),
        'created_at' => now()
    ]);
    */
    }
}
