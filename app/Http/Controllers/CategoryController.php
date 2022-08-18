<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // this method is use to fetch the category
    public function index()
    {
         $fetch_cat = Category::select('id','cat_name')->orderby('id','desc')->get();

         if(isset($fetch_cat) && count($fetch_cat)>0)
         {
             $data = $fetch_cat;
         }
         else
         {
            $data = 'no record found';
         }

         return response()->json(['status'=>true,'data'=>$data]);
    }
    public function getCategoryList()
    {
         $fetch_cat = Category::select('id','cat_name')->orderby('id','desc')->get();

         if(isset($fetch_cat) && count($fetch_cat)>0)
         {
             $data = $fetch_cat;
         }
         else
         {
            $data = 'no record found';
         }

         return response()->json(['status'=>true,'data'=>$data]);
    }
}
