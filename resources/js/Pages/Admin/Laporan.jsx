import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AdminLayouts from "@/Layouts/AdminLayouts";

const Laporan = () => {
    const { title, auth, tikets } = usePage().props;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AdminLayouts auth={auth}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Id Tiket
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nomor HP
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Check In
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tikets.length > 0 ? (
                                tikets.map((tiket) => {
                                    return (
                                        <tr
                                            className="bg-white border-b"
                                            key={tiket.id}
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                            >
                                                {tiket.nama}
                                            </th>
                                            <td className="px-6 py-4">
                                                {tiket.id_tiket}
                                            </td>
                                            <td className="px-6 py-4">
                                                {tiket.no_hp}
                                            </td>
                                            <td
                                                className={`px-6 py-4 ${
                                                    tiket.is_terpakai === "ya"
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                {tiket.is_terpakai}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td>belum ada data</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </AdminLayouts>
        </>
    );
};

export default Laporan;
