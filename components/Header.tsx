import Link from "next/link";


export default function Header() {

    return (
        <header className="flex justify-between items-center w-full mt-2 border-b pb-3 sm:px-4 px-2">
            <Link href="/" className="flex space-x-3">
                <h1 className="sm:text-2xl text-1xl font-normal ml-2 tracking-tight">
                   Jasper <i style={{ color: '#1678FF'}} className="fas fa-arrow-right fa-xs pr-2 "></i> alternative
                </h1>
            </Link>
            <div className="flex flex-row">
            </div>

        </header>
    );
}
