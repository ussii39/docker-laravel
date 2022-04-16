<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    public function register()
    {
        // dd(request()->all());
       $result = $this->validator(request()->all())->validate();
     $user = $this->create(request()->all());
        $this->guard()->login($user);
        return ['success' => true, 'user' => $user];
    }

    protected function create(array $data)
    {
        return User::create([
            'name'  => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    protected function validator(array $data)
{
    return Validator::make($data, [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'max:255'],
        'password' => ['required', 'string', 'min:8'],
    ]);
}
}