<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

/*
class ExampleTest extends TestCase
{
    //use RefreshDatabase;
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }
}
*/

class UserTest extends TestCase
{
    use RefreshDatabase;
    /*
    public function test_show()
    {
        $users=User::factory()->count(10)->create();
        //dd($users->toArray());
        $response = $this->getJson('api/users');
        //dd($response->json());
        $response->assertJsonCount($users->count());
    }
    */
    /*
    public function test_register()
    {
        $data = [
            'user_name' => 'sampleuser',
            'user_id' => 'samples',
            'user_password' =>'p@sswd'
        ];
        //dd($users->toArray());
        $response = $this->postJson('api/users');
        dd($response->json());
        $response->assertStatus(201);
    }
    */
    /*
    public function test_update()
    {
        $user = User::factory()->create();
        $user->user_name = "namae";
        $user->user_id = "2";
        $user->user_password = "pass";
        //dd($user);
        $response = $this->patchJson('api/users/{$user->id}',$user->toArray());
        dd($response->json());
        //$response->assertOk();
        //$response->assertJsonFragment($user->toArray());
    }
    */
    public function test_registernull()
    {
        
        $data = [
            'user_name' => 'ss',
            'user_id' => 'samp',
            'user_password' =>'p@sswd'
        ];
        //dd($users->toArray());
        $response = $this->postJson('api/users');
        dd($response->json());
        $response->assertStatus(201);
        
        //$response = $this->get('/');
        //$response->assertStatus(200);
    }
}
