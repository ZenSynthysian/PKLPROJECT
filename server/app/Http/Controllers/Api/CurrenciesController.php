<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Currencies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CurrenciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Currencies::orderBy('country')->get();
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
        $dataCurrencies = new Currencies;

        $rules = [
            'country' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal memasukan data',
                'data' => $validator->errors()
            ]);
        }

        $dataCurrencies->country = $request->country;
        $dataCurrencies->currencies = $request->currencies;
        $dataCurrencies->code = $request->code;
        $dataCurrencies->minor_unit = $request->minor_unit;
        $dataCurrencies->symbol = $request->symbol;


        $post = $dataCurrencies->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(string $code)
    {
        $data = Currencies::where('code', $code)->get();
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
    public function update(Request $request, string $code)
    {
        $dataCurrencies = Currencies::where('code', $code)->first();
        if (empty($dataCurrencies)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'country' => 'required'

        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }


        $dataCurrencies->country = $request->country;
        $dataCurrencies->currencies = $request->currencies;
        $dataCurrencies->code = $request->code;
        $dataCurrencies->minor_unit = $request->minor_unit;
        $dataCurrencies->symbol = $request->symbol;


        $post = $dataCurrencies->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $code)
    {
        $dataCurrencies = Currencies::where('code', $code)->first();
        if (empty($dataCurrencies)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataCurrencies->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }
}