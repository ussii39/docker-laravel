<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
    
    // Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    
    Route::get('/get', [App\Http\Controllers\UsersController::class, 'index'])->name("user");
    
    Route::get('/get/{id}', [App\Http\Controllers\UsersController::class, 'show'])->name("show")->middleware('auth');
    
    Route::post('/post', [App\Http\Controllers\UsersController::class, 'store'])->name("store");
    
    // Route::get('/get/test/{id}', [App\Http\Controllers\TestController::class, 'show'])->name("show");
    
    Route::post('/post/test', [App\Http\Controllers\TestController::class, 'store'])->name("store");


Route::group(['middleware' => 'api','prefix' => 'user'], function ($router) {
 
    Route::post('/login', [App\Http\Controllers\AuthController::class, 'login'])->name('login');
    // Route::post('/register', [App\Http\Controllers\AuthController::class, 'register'])->name('register');
    Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('/refresh', [App\Http\Controllers\AuthController::class, 'refresh']);
    Route::post('/register', [App\Http\Controllers\Api\Auth\RegisterController::class, 'register']);
});
Route::get('/me', [App\Http\Controllers\AuthController::class, 'me'])->name('me');
// Auth::routes();

// Route::middleware(['admin_auth'])->group(function(){
//     Route::get('/admin', function(){
//         return 'you are admin user!';
//     });
//     // Route::get('/get/test/{id}', [App\Http\Controllers\TestController::class, 'show'])->name("show");
// });

Route::group(['middleware' => ['admin_auth']], function () {
     Route::get('/get/test/{id}', [App\Http\Controllers\TestController::class, 'show'])->name("show");
});