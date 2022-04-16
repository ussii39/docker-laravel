<?php
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class AuthController extends Controller
{
    /**
        * Create a new AuthController instance.
        *
        * @return void
        */
    public function __construct() {
        $this->middleware('auth:users', ['except' => ['login','refresh']]);
    }

    // use RegistersUsers;

    public function register(Request $request){
        {
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);
            return response()->json($user, 200);
        }
    }

    /**
    * Get a JWT via given credentials.
    *
    * @return \Illuminate\Http\JsonResponse
    */
    public function login(Request $request){
    //    dd($request->all());
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
 
        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 422);
        // }
 
        if (!$token = auth('users')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
 
        
        return $this->createNewToken($token);
    }
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
 
        return response()->json(['message' => 'User successfully signed out']);
    }
 
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth('users')->refresh());
    }
 
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {

        // $user = Auth::user();
        return response()->json(auth()->user());
        // $user = User::find(Auth::id());
        // $user->links = json_decode( $user->links, 1 );
        // return response()->json( $user );
    }
 
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('users')->factory()->getTTL() * 60
        ]);
    }
}