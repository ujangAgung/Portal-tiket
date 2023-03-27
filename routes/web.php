<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TiketsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [TiketsController::class, 'indexUser'])->name('index.user');
Route::get('/pesan-tiket', [TiketsController::class, 'createTiket'])->name('register.tiket');
Route::post('/pesan-tiket', [TiketsController::class, 'store'])->name('store.tiket');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin

    // tiket
    Route::get('/daftar-pemesan', [TiketsController::class, 'index'])->name('admin.index');
    Route::get('/tiket/{uuid}/edit', [TiketsController::class, 'edit'])->name('admin.edit.tiket');
    Route::put('/tiket/{id}', [TiketsController::class, 'update'])->name('admin.update.tiket');
    Route::delete('/tiket/{id}', [TiketsController::class, 'destroy'])->name('admin.destroy.tiket');

    // check-in
    Route::get('/check-in', [ TiketsController::class, 'checkin'])->name('admin.checkin');
    Route::put('/checkin/{id_tiket}', [TiketsController::class, 'updateCek'])->name('admin.checkin.update');

    // laporan
    Route::get('/laporan', [TiketsController::class, 'laporan'])->name('laporan');
    

});

require __DIR__.'/auth.php';
