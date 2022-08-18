<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOfficeRequest;
use App\Http\Requests\UpdateOfficeRequest;
use App\Models\Office;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // this method is use to fecth the office on the basis of company & department
    public function index(Request $request)
    {
        $rules = [
            'company_id' => 'required',
            'department_id' => 'required'
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
        $department_id = $request->department_id;

        $fetch_office = Office::select('id','office_name')->where(['company_id'=>$company_id,'department_id'=>$department_id])->get();

        if(isset($fetch_office) && count($fetch_office)>0)
        {
            $data = $fetch_office;
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
     * @param  \App\Http\Requests\StoreOfficeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOfficeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function show(Office $office)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function edit(Office $office)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOfficeRequest  $request
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOfficeRequest $request, Office $office)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function destroy(Office $office)
    {
        //
    }

    public function getOfficeList(Request $request)
    {
        $officeList = Office::select('id','office_name')->orderBy('id', 'DESC')->get();
        if (isset($officeList) && count($officeList) > 0) {
            $data =  $officeList;
        } else{
            $data = 'no record found';
        }
        return response()->json(['status'=>true,'data'=>$data]);
    }
}
