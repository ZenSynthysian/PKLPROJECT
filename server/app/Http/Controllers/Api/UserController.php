<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Datauser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Datauser::orderBy('nama')->get();
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
        $dataData = new Datauser;

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

        $dataData->nama = $request->nama;
        $dataData->no_rek = $request->no_rek;
        $dataData->nama_alamat_bank = $request->nama_alamat_bank;
        $dataData->unit_organisasi = $request->unit_organisasi;


        $post = $dataData->save();

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
        $data = Datauser::where('nama', 'LIKE', '%' . $id . '%')
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
                    Datauser::where('nama', $nama)
                        ->whereNotIn('id', $keepIds)
                        ->delete();
                }
            }

            // Fetch the remaining data with the largest ID from the filtered data
            $data = Datauser::where('nama', 'LIKE', '%' . $id . '%')
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
        $dataData = Datauser::find($id);
        if (empty($dataData)) {
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

        $dataData->nama = $request->nama;
        $dataData->no_rek = $request->no_rek;
        $dataData->nama_alamat_bank = $request->nama_alamat_bank;
        $dataData->unit_organisasi = $request->unit_organisasi;



        $post = $dataData->save();

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
        $dataData = Datauser::find($id);
        if (empty($dataData)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataData->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }
}
