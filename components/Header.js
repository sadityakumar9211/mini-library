import Link from "next/link"

export default function Header() {
    return (
        <nav className="p5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl"><Link href="/">Library</Link></h1>
            <div className="flex flex-row items-center ">
                <Link href="/books"> <span className="mr-4 p-6">Books</span>
                </Link>
                <Link href="/magazine"> <span className="mr-4 p-6">Magazine</span>
                </Link>
                <Link href="/author"> <span className="mr-4 p-6">Author</span>
                </Link>
            </div>
        </nav>
    )
}
