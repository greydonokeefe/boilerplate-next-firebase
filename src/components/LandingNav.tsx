
import Link from "next/link"

export default function Component() {
    return (
        <header className="flex justify-between items-center p-4 lg:px-8 lg:py-4 shadow-md">
            <div className="flex items-center space-x-2">
                {/* <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="YapThread logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    /> */}
                <span className="text-xl sm:text-lg font-bold">
                    collegeEssAI
                </span>
            </div>
            <div className='flex items-center justify-between'>
                <Link
                    className='text-lg font-medium text-blue-500 hover:text-blue-700 p-4 m-1'
                    href={"/login"}
                >
                    Login
                </Link>
                <Link
                    className='text-lg text-white bg-blue-500 px-4 py-2 rounded-lg'
                    href={"/signup"}
                >
                    Sign Up
                </Link>
            </div>
        </header >
    )
}