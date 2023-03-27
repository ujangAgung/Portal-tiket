import { Head, Link, useForm, usePage } from "@inertiajs/react";
// import { Inertia } from "@inertiajs/inertia";
// import {Inertia}
// import { InertiaLinkProps } from "@inertiajs/react";
// import {Inertia}
// import { router } from "@inertiajs/react";
import AdminLayouts from "@/Layouts/AdminLayouts";
import swal from "sweetalert";

const Edit = () => {
    const { auth, tiket } = usePage().props;
    const { data, setData, errors, put } = useForm({
        id: tiket.id,
        id_tiket: tiket.id_tiket || "",
        nama: tiket.nama || "",
        alamat: tiket.alamat || "",
        no_hp: tiket.no_hp || "",
        is_terpakai: tiket.is_terpakai || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.update.tiket", tiket.id));
    };
    return (
        <>
            <Head>
                <title>{`Edit ${tiket.id_tiket}`}</title>
            </Head>
            <AdminLayouts auth={auth}>
                <div className="w-full md:w-3/5 lg:w-2/5 mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <label
                                htmlFor="id_tiket"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Id Tiket
                            </label>
                            <input
                                type="number"
                                id="id_tiket"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukan id tiket"
                                value={data.id_tiket}
                                onChange={(e) =>
                                    setData("id_tiket", e.target.value)
                                }
                            />
                            {errors.id_tiket && (
                                <span className="text-xs italic text-red-700">
                                    {errors.id_tiket}
                                </span>
                            )}
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="nama"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukan nama pemesan"
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
                                type="text"
                                id="no_hp"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukan no_hp pemesan"
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
                                htmlFor="is_terpakai"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Sudah Terpakai
                            </label>
                            <select
                                id="is_terpakai"
                                name="is_terpakai"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={data.is_terpakai}
                                onChange={(e) =>
                                    setData("is_terpakai", e.target.value)
                                }
                            >
                                {/* <option value={" "}></option> */}
                                <option value="ya">Ya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                            {errors.is_terpakai && (
                                <span className="text-xs italic text-red-700">
                                    {errors.is_terpakai}
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
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Alamat....."
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

                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
                            >
                                Sunting
                            </button>
                            <Link
                                as="button"
                                method="delete"
                                href={`/tiket/${tiket.id}`}
                                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
                            >
                                Hapus
                            </Link>
                        </div>
                    </form>
                </div>
            </AdminLayouts>
        </>
    );
};
export default Edit;
