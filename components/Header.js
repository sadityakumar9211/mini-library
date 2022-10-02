import Link from "next/link"

export default function Header() {
    return (
        <nav className="p5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl"><Link href="/">Library</Link></h1>
            <div className="flex flex-row items-center ">
                <Link href="/books"><a className="mr-4 p-6">Books</a>
                </Link>
                <Link href="/magazine"><a className="mr-4 p-6">Magazine</a>
                </Link>
                <Link href="/author"><a className="mr-4 p-6">Author</a>
                </Link>
            </div>
        </nav>
    )
}
