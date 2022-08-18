<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        // return User::all();
        $user = User::orderby('id','desc')->get();

        if(isset($user) && count($user)>0)
        {
             $data = $user;
        }
        else
        {
            $data = 'no record found';
        }

        return response()->json(['status'=>true,'data'=>$data]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param  StoreUserRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */

     // this method is use to store the user in database
    public function store(Request $request)
    {
        $rules = [
            'file' => 'required|mimes:jpeg,jpg,png,gif|max:2048',
            'surname'=>'required',
            'name'=>'required',
            'company'=>'required|numeric',
            'positon'=>'required|numeric',
            'office'=>'required|numeric',
            'department'=>'required|numeric',
            'distinguish'=>'required|numeric',
            'email' => 'required|email|unique:users,user_email',
            'login_id'=>'required',
            'password'=>'required|min:6'
        ];

        $validator = Validator::make($request->all(),$rules);


        
        if($validator->fails())
        {
           return response()->json([

              'status'   => false,
              'message'   => 'Validation errors',
              'data'      => $validator->errors()

           ]);
        }

         // code to upload user profile
         $file = $request->file;
         $fileName = $file->getClientOriginalName() ;
         $destinationPath = public_path().'/images' ;
 
         // path which store in database
         $store_path = $destinationPath.'/'.$fileName;
 
         // upload file on server
         $file->move($destinationPath,$fileName);

        $full_name = $request->name.' '.$request->surname;

        $user = new User;
        $user->user_picture = $store_path;
        $user->user_name = $full_name;
        $user->user_password = Hash::make($request->password);
        $user->user_email = $request->email;
        $user->company_id = $request->company;
        $user->position_id = $request->positon;
        $user->office_id = $request->office;
        $user->department_id = $request->department;
        $user->category_id = $request->distinguish;
        $user->login_id = $request->login_id;

        $user->save();

        return response()->json(['status'=>true,'message'=>'Record has been inserted successfully']);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserRequest $request, User $user)
    {


        $user->user_name = $request->user_name;
        $user->user_id = $request ->user_id;
        $user->user_password = $request->user_password;
        return $user->update()
            ? response()->json($user)
            : response()->json([],500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function getUserList(Request $request){
        $rules = [
            'department_id' => 'required',
            'office_id' => 'required'
        ];

        $validator = Validator::make($request->all(),$rules);

        
        if($validator->fails())
        {
           return response()->json([

              'status'   => false,
              'message'   => 'Validation errors',
              'data'      => $validator->errors()

           ]);
        }

        $department_id = $request->department_id;
        $office_id = $request->office_id;

        $fetch_user = User::select('id','user_name')->where('department_id',$department_id)
        ->where('office_id',$office_id)->get();

        if(isset($fetch_user) && count($fetch_user)>0){
            $data =  $fetch_user;
        }
        else{

            $data = 'no record found';
        }
        return response()->json(['status'=>true,'data'=>$data]);
    }

    public function getUserDetail(Request $request){
        $rules = [
            'id' => 'required|integer'
        ];

        $validator = Validator::make($request->all(),$rules);

        
        if($validator->fails())
        {
           return response()->json([

              'status'   => false,
              'message'   => 'Validation errors',
              'data'      => $validator->errors()

           ]);
        }

        $id = $request->id;

        $user_detail = User::leftJoin('companies','users.company_id','companies.id')
        ->leftJoin('positions','users.position_id','positions.id')
        ->leftJoin('offices','users.office_id','offices.id')
        ->leftJoin('depts','users.department_id','depts.id')
        ->leftJoin('category','users.category_id','category.id')
        ->select('users.user_name as name','users.company_id as company_id',
        'users.position_id as position_id',
        'users.office_id as office_id',
        'users.department_id as department_id',
        'users.category_id as category_id','users.login_id as login_id',
        'companies.company_name as company',
                'positions.position_name as position','offices.office_name as office',
                'depts.dept_name as department','category.cat_name as category',
                'users.user_email as email','users.*')
        ->where('users.id',$id)->first();

        if(isset($user_detail)){
            $data =  $user_detail;
        }
        else{
            $data = 'no record found';
        }
        return response()->json(['status'=>true,'data'=>$data]);
    }

    public function getUser($id)
    {
        return $user = User::where('id' , $id)->first();      
    }


    public function editUser(Request $request,$id)
    {
        $user = User::find($id);
        
        $input = $request->all();
        // print_r($input);
        $user = User::where('id',$id)->update($input);    

        if ($user) {          
            $data = $this->getUser($id);          
            return response()->json(
            [                   
                'success' => true,  
                'message' => 'User Updated successfully.',
            ], 200);
        } else {
            return response()->json(
            [
                'success' => false,
                'message' => 'User not found.',
            ], 422);
        } 
                 
    }

}
