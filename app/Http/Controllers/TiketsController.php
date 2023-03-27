<?php

namespace App\Http\Controllers;

use App\Models\Tikets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TiketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function indexUser()
     {
        return Inertia::render('User/Index', [
            'title' => 'Selamat Datang'
        ]);
     }

     public function createTiket()
     {
        return Inertia::render('User/Pesan', [
            'title' => 'Pesan Tiket'
        ]);
     }

    public function index()
    {
        return Inertia::render('Admin/Index', [
            'title' => 'Daftar Pemesanan',
            'auth'    => auth()->user(),
            'tikets' => Tikets::orderBy('created_at', 'desc')->get()
        ]);
    }

    public function checkin()
    {
        return Inertia::render('Admin/CheckIn', [
            'title' => 'Check In',
            'auth' => auth()->user(),
        ]);
    }

    public function laporan()
    {
        return Inertia::render('Admin/Laporan', [
            'title' => 'Laporan',
            'auth' => auth()->user(),
            'tikets' => Tikets::orderBy('created_at', 'desc')->get()
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $randomId = random_int(100000, 999999);
        $tiket = new Tikets();
        $tiket->id_tiket = $randomId;
        $tiket->nama = $request->nama;
        $tiket->no_hp = $request->no_hp;
        $tiket->alamat = $request->alamat;
        $tiket->is_terpakai = $request->is_terpakai;
        $tiket->save();
        return Redirect::route('index.user')->with('add', 'Tiket Berhasil Terdaftar!');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tikets  $tikets
     * @return \Illuminate\Http\Response
     */
    public function edit(Tikets $tikets, $id_tiket)
    {
        $tiket = $tikets->where('id_tiket', $id_tiket)->first();
        return Inertia::render('Admin/Edit', [
            'auth'     => auth()->user(),
            'tiket' => $tiket,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tikets  $tikets
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tikets $tikets, $id)
    {
        $oldTiket = $tikets->find($request->id);
        if($request->nama != $oldTiket->nama) {
            $request->validate([
                'nama' => 'required|unique:tikets,nama'
            ]);
        }else {
            $request->validate([
                'nama' => 'required'
            ]);
        }
        if($request->id_tiket != $oldTiket->id_tiket) {
            $request->validate([
                'id_tiket' => 'required|unique:tikets,id_tiket'
            ]);
        }else {
            $request->validate([
                'id_tiket' => 'required'
            ]);
        }
        $tikets->where('id', $request->id)->update([
            'id_tiket' => $request->id_tiket,
            'nama' => $request->nama,
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
            'is_terpakai' => $request->is_terpakai
        ]);
        return Redirect::route('admin.index')->with('edit', 'Tiket disunting.');
    }

    public function updateCek(Request $request, Tikets $tikets, $id_tiket)
    {
        $tiket = $tikets->where('id_tiket', $id_tiket)->first();
        // dd($tiket);
        if ($tiket != null) {
            if ($tiket->is_terpakai == "tidak") {
                $tikets->where('id_tiket', $id_tiket)->update([
                    'is_terpakai' => "ya"
                ]);
                return Redirect::route('admin.index')->with('add', 'Tiket berhasil checkin!');
            } else {
                return Redirect::route('admin.index')->with('delete', 'Tiket gagal checkin!');
            }
            
        }else{
            return Redirect::route('admin.index')->with('delete', 'Tiket tidak ada!');
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tikets  $tikets
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tikets $tikets, $id)
    {
        $tikets = $tikets->find($id);
        $tikets->delete();
        return Redirect::route('admin.index')->with('delete', 'Data berhasil dihapus');
    }
}
