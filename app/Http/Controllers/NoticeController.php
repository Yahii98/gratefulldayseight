<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notice = Notice::select('id','title')->orderBy('id', 'DESC')->get();
        if (isset($notice) && count($notice) > 0) {
            $data =  $notice;
        } else{
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'title'=>'required',
            'notice_type'=>'required',
            'notice_duedate'=>'required',
            'att'=>'required',
            'contents'=>'required',
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

        $notice = new Notice;
        $notice->title = $request->title;
        $notice->notice_type = $request->notice_type;
        $notice->notice_duedate = $request->notice_duedate;
        $notice->att = $request->att;
        $notice->contents = $request->contents;
        $notice->save();

        return response()->json(['data'=>$notice,'status'=>true,'message'=>'Record has been inserted successfully']);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function show(Notice $notice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function edit(Notice $notice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notice $notice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        //
    }
}
