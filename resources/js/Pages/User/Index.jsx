import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import swal from "sweetalert";

const Index = () => {
    const { title, flash } = usePage().props;
    flash.add &&
        swal({
            title: "Berhasil!",
            text: flash.add,
            icon: "success",
            button: "Wokee",
        });
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className="h-screen bg-slate-300 flex justify-center items-center relatif">
                <div className="absolute -top-24 -right-40 w-96 h-96 rounded-full bg-[#8B5F3C]/50 blur-md"></div>
                <div className="absolute -bottom-24 -left-40 w-96 h-96 rounded-full bg-[#8B5F3C]/50 blur-md"></div>
                <div>
                    <h1 className="font-bold my-10">
                        Selamat Datang di Portal Tiket Space X
                    </h1>
                    <Link
                        href={route("register.tiket")}
                        className="w-1/6 mx-auto text-center py-3 px-4 rounded-full bg-[#8B5F3C] block hover:bg-[#8B5F3C] hover:-translate-y-1 transition-all hover:text-white"
                    >
                        Pesan Tiket
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Index;
