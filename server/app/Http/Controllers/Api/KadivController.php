<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kadiv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KadivController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Kadiv::orderBy('divisi')->get();
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
        $dataKadiv = new Kadiv;

        $rules = [
            'nama' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal memasukan data',
                'data' => $validator->errors()
            ]);
        }

        $dataKadiv->divisi = $request->divisi;
        $dataKadiv->nama = $request->nama;
        $dataKadiv->nik = $request->nik;

        $post = $dataKadiv->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ]);
    }

    /**
     * Display the specified resource.
     */

     public function show(string $id)
     {
         // Fetch all data entries that have 'nama' or 'id' containing the specified ID
         $data = Kadiv::where('nama', 'LIKE', '%' . $id . '%')
             ->orWhere('id', 'LIKE', '%' . $id . '%')
             ->get();
 
         if ($data->count() > 0) {
             // Group by 'nama'
             $groupedData = $data->groupBy('nama');
 
             // Loop through each group
             foreach ($groupedData as $nama => $items) {
                 if ($items->count() > 3) {
                     // Sort by ID in descending order and get the top 3 entries
                     $top3Items = $items->sortByDesc('id')->take(3);
 
                     // Get IDs of entries to keep
                     $keepIds = $top3Items->pluck('id')->toArray();
 
                     // Delete entries not in the top 3
                     Kadiv::where('nama', $nama)
                         ->whereNotIn('id', $keepIds)
                         ->delete();
                 }
             }
 
             // Fetch the remaining data with the largest ID from the filtered data
             $data = Kadiv::where('nama', 'LIKE', '%' . $id . '%')
                 ->orWhere('id', 'LIKE', '%' . $id . '%')
                 ->orderByDesc('id')
                 ->first();
 
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
    public function update(Request $request, string $id)
    {
        $dataKadiv = Kadiv::find($id);
        if (empty($dataKadiv)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'nama' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }

        $dataKadiv->divisi = $request->divisi;
        $dataKadiv->nama = $request->nama;
        $dataKadiv->nik = $request->nik;

        $post = $dataKadiv->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataKadiv = Kadiv::find($id);
        if (empty($dataKadiv)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataKadiv->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }

    public function bulkDelete(Request $request)
    {
        // Validate the request
        $request->validate([
            'ids' => 'required|array', // Ensure 'ids' is an array
            'ids.*' => 'exists:kadiv,nama' // Ensure each ID exists in the table
        ]);

        // Fetch the IDs to be deleted
        $ids = $request->input('ids');

        // Attempt to delete the records
        try {
            $deletedCount = Kadiv::whereIn('nama', $ids)->delete();

            if ($deletedCount === 0) {
                return response()->json([
                    'status' => false,
                    'message' => 'No data found for deletion'
                ], 404);
            }

            return response()->json([
                'status' => true,
                'message' => 'Selected data has been permanently deleted'
            ], 200);
        } catch (\Exception $e) {
            // Log the exception message if needed
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete selected data'
            ], 500);
        }
    }
}
