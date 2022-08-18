<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoticeCheckedRequest;
use App\Http\Requests\UpdateNoticeCheckedRequest;
use App\Models\NoticeChecked;

class NoticeCheckedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreNoticeCheckedRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNoticeCheckedRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NoticeChecked  $noticeChecked
     * @return \Illuminate\Http\Response
     */
    public function show(NoticeChecked $noticeChecked)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NoticeChecked  $noticeChecked
     * @return \Illuminate\Http\Response
     */
    public function edit(NoticeChecked $noticeChecked)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateNoticeCheckedRequest  $request
     * @param  \App\Models\NoticeChecked  $noticeChecked
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNoticeCheckedRequest $request, NoticeChecked $noticeChecked)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NoticeChecked  $noticeChecked
     * @return \Illuminate\Http\Response
     */
    public function destroy(NoticeChecked $noticeChecked)
    {
        //
    }
}
