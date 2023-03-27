import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";

const Pesan = () => {
    const { title } = usePage().props;
    const { data, setData, errors, post } = useForm({
        nama: "",
        alamat: "",
        no_hp: "",
        is_terpakai: "tidak",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("store.tiket"));
    };

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className="h-screen bg-slate-300 flex justify-center items-center relative">
                <div className="absolute -top-24 -left-40 w-96 h-96 rounded-full bg-[#8B5F3C]/50 blur-md"></div>
                <div className="absolute -bottom-24 -right-40 w-96 h-96 rounded-full bg-[#8B5F3C]/50 blur-md"></div>
                <div>
                    <h1>Pesan Tiket Sekarang</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <label
                                htmlFor="nama"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Nama
                            </label>
                            <input
                                autoFocus
                                required
                                type="text"
                                id="nama"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukan nama anda"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            {errors.nama && (
                                <span className="text-xs italic text-red-700">
                                    {errors.nama}
                                </span>
                            )}
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="no_hp"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Nomor HP / WhatsApp
                            </label>
                            <input
                                type="number"
                                id="no_hp"
                                required
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Hanya nomor"
                                min={0}
                                value={data.no_hp}
                                onChange={(e) =>
                                    setData("no_hp", e.target.value)
                                }
                            />
                            {errors.no_hp && (
                                <span className="text-xs italic text-red-700">
                                    {errors.no_hp}
                                </span>
                            )}
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="alamat"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Alamat
                            </label>
                            <textarea
                                id="alamat"
                                rows="4"
                                required
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Alamat anda....."
                                value={data.alamat}
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            ></textarea>
                            {errors.alamat && (
                                <span className="text-xs italic text-red-700">
                                    {errors.alamat}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
                        >
                            Pesan
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Pesan;
