import { useState } from "react";
// import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    MdDashboard,
    MdWebStories,
    MdSell,
    MdViewModule,
    MdLogout,
} from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";

import { BiMenu } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

const AdminLayouts = ({ children }) => {
    const { auth } = usePage().props;
    const thisRoute = window.location.href.split("/");
    const navbars = [
        {
            alamat: "/daftar-pemesan",
            active: "daftar-pemesan",
            deskripsi: "Daftar Pemesan",
            icon: RiCoupon3Fill,
        },
        {
            alamat: "/check-in",
            active: "check-in",
            deskripsi: "Check In",
            icon: MdWebStories,
        },
        {
            alamat: "/laporan",
            active: "laporan",
            deskripsi: "laporan",
            icon: MdSell,
        },
    ];
    const [isSidebar, setIsSidebar] = useState(false);
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/img/favicon.png" />
            </Head>
            <main className="md:flex relative">
                <section
                    className={
                        isSidebar
                            ? "fixed bottom-0 top-0 left-0 w-1/2  bg-slate-200 shadow-lg z-10"
                            : "hidden md:block md:fixed md:bottom-0 md:top-0 md:left-0 md:w-2/12 bg-slate-200 shadow-lg"
                    }
                >
                    <div className="py-5 px-2">
                        <img
                            src="/img/logo.png"
                            alt="Logo Babatox"
                            className="w-16 mx-auto"
                        />
                    </div>
                    <hr />
                    {navbars.length > 0 &&
                        navbars.map((navbar, i) => {
                            const Icon = navbar.icon;
                            return (
                                <Link
                                    key={i}
                                    href={navbar.alamat}
                                    className={`uppercase block font-bold w-full rounded-r-md my-1 hover:bg-[#8B5F3C] hover:text-white ${
                                        thisRoute[3] == navbar.active &&
                                        "bg-[#8B5F3C] text-white"
                                    }`}
                                >
                                    <div className="px-3 py-2 space-x-2 flex items-center hover:-translate-x-2 transition-all">
                                        <Icon className="w-6 h-6" />
                                        <p>{navbar.deskripsi}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    <hr />

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="uppercase text-start font-bold w-full transition-all rounded-r-md bg-red-600 hover:-translate-x-2"
                    >
                        <div className="px-3 py-2 space-x-2 flex items-center">
                            <MdLogout className="w-6 h-6 rotate-180" />
                            <p>Keluar</p>
                        </div>
                    </Link>
                    <RxCrossCircled
                        className="h-10 w-10 mt-5 mx-auto hover:cursor-pointer md:hidden"
                        onClick={() => setIsSidebar(!isSidebar)}
                    />
                </section>
                <section className="md:w-10/12 md:absolute md:top-0 md:right-0 bg-slate-100">
                    <div className="bg-white shadow-lg p-2 flex justify-between items-center md:justify-end">
                        <BiMenu
                            className="w-10 h-10 hover:cursor-pointer md:hidden"
                            onClick={() => setIsSidebar(!isSidebar)}
                        />
                        <h6>{auth.name}</h6>
                    </div>
                    <div className="p-5">{children}</div>
                </section>
            </main>
        </>
    );
};

export default AdminLayouts;
