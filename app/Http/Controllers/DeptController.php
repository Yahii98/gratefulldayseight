<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDeptRequest;
use App\Http\Requests\UpdateDeptRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\Models\Dept;

class DeptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rules = [
             'company_id' => 'required'
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

         $company_id = $request->company_id;

         $fetch_department = Dept::select('id','dept_name')->where('company_id',$company_id)->get();

         if(isset($fetch_department) && count($fetch_department)>0)
         {
             $data =  $fetch_department;
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
     * @param  \App\Http\Requests\StoreDeptRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDeptRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dept  $dept
     * @return \Illuminate\Http\Response
     */
    public function show(Dept $dept)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dept  $dept
     * @return \Illuminate\Http\Response
     */
    public function edit(Dept $dept)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDeptRequest  $request
     * @param  \App\Models\Dept  $dept
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDeptRequest $request, Dept $dept)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dept  $dept
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dept $dept)
    {
        //
    }
    public function getDepartmentList(Request $request)
    {
        $deptList = Dept::select('id','dept_name')->orderBy('id', 'DESC')->get();
        if (isset($deptList) && count($deptList) > 0) {
            $data =  $deptList;
        } else{
            $data = 'no record found';
        }
        return response()->json(['status'=>true,'data'=>$data]);
    }
}
