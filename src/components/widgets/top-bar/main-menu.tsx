import Link from "next/link";


const menu = ["ABOUT","WORK","CULTURE","LATEST","CONTACT"]
function MainMenu() {
    return(
        <section className='bg-tertiary-color w-full h-screen absolute z-10 flex items-center justify-center'>
            <ul className="text-center">
                {menu.map(el => (
                    <li key={el}>
                        <Link href={"/"} className="heading-h1 font-light">
                            {el}
                        </Link>
                    </li>
                    ))}
            </ul>
        </section>
    )
}
export default MainMenu
