import Image from "next/image";
import Link from "next/link";
function ResultNotFound() {
    return(
        <div>
            <div className="flex items-center justify-center m-auto max-w-[35%] min-h-[85vh]">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/not-found.png"
                        alt={"404 Not Found"}
                        width={200}
                        height={200}
                        className="mb-4"
                    />
                    <h1 className="text-text/title custom-text-h3 text-center">Result Not Found</h1>
                    <p className="text-design/text/body custom-text-xs text-center py-5">Try inserting different filters or searching different cities.</p>
                    <Link href="/" className="default-button max-w-[220px] w-full text-center">
                        Go Back To All Results
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ResultNotFound
