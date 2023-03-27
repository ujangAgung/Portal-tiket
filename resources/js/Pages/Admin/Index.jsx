import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminLayouts from "@/Layouts/AdminLayouts";
import swal from "sweetalert";

const Index = () => {
    const { auth, title, tikets, flash } = usePage().props;
    flash.add &&
        swal({
            title: "Berhasil!",
            text: flash.add,
            icon: "success",
            button: "Wokee",
        });
    flash.delete &&
        swal({
            title: "Delete!",
            text: flash.delete,
            icon: "warning",
            button: "Wokee",
        });
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AdminLayouts auth={auth}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
                    {tikets.length > 0 ? (
                        tikets.map((tiket) => {
                            return (
                                <Link
                                    href={route(
                                        "admin.edit.tiket",
                                        tiket.id_tiket
                                    )}
                                    key={tiket.id}
                                    className="flex px-5 py-8 text-center rounded-lg animasid bg-white shadow-md hover:shadow-xl relative group overflow-hidden"
                                >
                                    <div className="absolute top-5 -right-11 rotate-45 text-slate-50 bg-green-600 w-2/3 invisible group-hover:visible">
                                        <p className="text-sm">Detail</p>
                                    </div>
                                    <div className="m-auto">
                                        <h4>{tiket.nama}</h4>
                                        <h5>{tiket.id_tiket}</h5>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div>eweuh</div>
                    )}
                </div>
            </AdminLayouts>
        </>
    );
};

export default Index;
