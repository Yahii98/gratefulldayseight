<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Position;


class PositionController extends Controller
{
    // this method is use to fetch the positions
    public function index()
    {
        $fetch_position = Position::select('id','position_name')->orderBy('id','desc')->get();

        if(isset($fetch_position) && count($fetch_position)>0)
        {
             $data = $fetch_position;
        }
        else
        {
            $data = 'no record found';
        }

        return response()->json(['status'=>true,'data'=>$data]);

    }

    public function getPositionList()
    {
        $fetch_position = Position::select('id','position_name')->orderBy('id','desc')->get();

        if(isset($fetch_position) && count($fetch_position)>0)
        {
             $data = $fetch_position;
        }
        else
        {
            $data = 'no record found';
        }

        return response()->json(['status'=>true,'data'=>$data]);

    }
}
