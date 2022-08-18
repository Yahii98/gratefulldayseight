<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoticeTypeRequest;
use App\Http\Requests\UpdateNoticeTypeRequest;
use App\Models\NoticeType;
use Illuminate\Http\Request;

class NoticeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $noticeType = NoticeType::select('id','notice_type_name')->orderBy('id', 'DESC')->get();
        if (isset($noticeType) && count($noticeType) > 0) {
            $data =  $noticeType;
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
     * @param  \App\Http\Requests\StoreNoticeTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNoticeTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NoticeType  $noticeType
     * @return \Illuminate\Http\Response
     */
    public function show(NoticeType $noticeType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NoticeType  $noticeType
     * @return \Illuminate\Http\Response
     */
    public function edit(NoticeType $noticeType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateNoticeTypeRequest  $request
     * @param  \App\Models\NoticeType  $noticeType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNoticeTypeRequest $request, NoticeType $noticeType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NoticeType  $noticeType
     * @return \Illuminate\Http\Response
     */
    public function destroy(NoticeType $noticeType)
    {
        //
    }
}
