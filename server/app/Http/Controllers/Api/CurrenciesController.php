<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Currencies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

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

    public function show(string $code, string $code2 = null, string $code3 = null, string $code4 = null)
    {
        // Buat sub-query untuk setiap kode mata uang
        $queries = [];

        $codes = [$code, $code2, $code3, $code4];
        foreach ($codes as $code) {
            if ($code) {
                $queries[] = DB::table('currencies')
                    ->where('code', $code)
                    ->limit(1);
            }
        }

        // Gabungkan sub-query dengan UNION ALL
        $query = $queries[0];
        for ($i = 1; $i < count($queries); $i++) {
            $query = $query->unionAll($queries[$i]);
        }

        // Ambil hasil
        $result = $query->get();

        return response()->json($result);
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
