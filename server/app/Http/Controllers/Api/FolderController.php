<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Folder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Folder::orderBy('title')->get();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataFolder = new Folder;

        $rules = [
            'title' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal memasukan data',
                'data' => $validator->errors()
            ]);
        }

        $dataFolder->title = $request->title;

        $post = $dataFolder->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ]);
    }

    /**
     * Display the specified resource.
     */

     public function show(string $title)
     {
         $data = Folder::where('title', $title)->get();
         if ($data) {
             return response()->json([
                 'status' => true,
                 'message' => 'Data ditemukan',
                 'data' => $data
             ], 200);
         } else {
             return response()->json([
                 'status' => false,
                 'message' => 'Data tidak ditemukan'
             ]);
         }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $title)
    {
        $dataFolder = Folder::where('title', $title)->first();
        if (empty($dataFolder)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'title' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }

        $dataFolder->title = $request->title;

        $post = $dataFolder->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $title)
    {
        $dataFolder = Folder::where('title', $title)->first();
        if (empty($dataFolder)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $post = $dataFolder->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }
}