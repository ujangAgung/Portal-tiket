import React from "react";
import { Head, usePage, useForm } from "@inertiajs/react";
import AdminLayouts from "@/Layouts/AdminLayouts";
import swal from "sweetalert";

const CheckIn = () => {
    const { title, auth, flash } = usePage().props;
    const { data, setData, errors, put } = useForm({
        id_tiket: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.checkin.update", data.id_tiket));
    };

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AdminLayouts auth={auth}>
                <section className="h-screen">
                    <div className="w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="py-2">
                                <input
                                    required
                                    type="number"
                                    id="id_tiket"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Masukan id tiket"
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

                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
                                >
                                    Cek
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </AdminLayouts>
        </>
    );
};

export default CheckIn;
