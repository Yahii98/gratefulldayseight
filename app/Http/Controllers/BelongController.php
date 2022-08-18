<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBelongRequest;
use App\Http\Requests\UpdateBelongRequest;
use App\Models\Belong;

class BelongController extends Controller
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
     * @param  \App\Http\Requests\StoreBelongRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBelongRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Belong  $belong
     * @return \Illuminate\Http\Response
     */
    public function show(Belong $belong)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Belong  $belong
     * @return \Illuminate\Http\Response
     */
    public function edit(Belong $belong)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBelongRequest  $request
     * @param  \App\Models\Belong  $belong
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBelongRequest $request, Belong $belong)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Belong  $belong
     * @return \Illuminate\Http\Response
     */
    public function destroy(Belong $belong)
    {
        //
    }
}
