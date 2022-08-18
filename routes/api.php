<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DeptController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NoticeTypeController;
use App\Http\Controllers\NoticeController;
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
/*
Route::apiResource('company','CompanyController');
*/
// Route::apiResource('company',CompanyController::class);
// Route::apiResource('users',UserController::class);

// api for getting the company
Route::get('get-company',[CompanyController::class,'index']);

// api for getting department on the basis of company
Route::post('get-department',[DeptController::class,'index']);

// api for getting the position
Route::get('get-position',[PositionController::class,'index']);

// api for getting office on the basis of company & department
Route::post('get-office',[OfficeController::class,'index']);

// api for getting the category
Route::get('get-category',[CategoryController::class,'index']);

// api for storing the user
Route::post('store-user',[UserController::class,'store']);

// api for check user data is store or not
Route::get('users',[UserController::class,'index']);
//
Route::get('getDepartment',[DeptController::class,'getDepartmentList']);

Route::get('getOffice',[OfficeController::class,'getOfficeList']);

Route::get('getCompany',[CompanyController::class,'getCompanyList']);

Route::get('getPosition',[PositionController::class,'getPositionList']);

Route::get('getCategory',[CategoryController::class,'getCategoryList']);

Route::post('getUser',[UserController::class,'getUserList']);

Route::post('getUserDetail',[UserController::class,'getUserDetail']);

Route::post('editUser/{id}',[UserController::class,'editUser']);

Route::get('getNoticeType',[NoticeTypeController::class,'index']);

Route::post('store-notice',[NoticeController::class,'store']);
// // i create the route
// Route::get('users',[UserController::class,'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
