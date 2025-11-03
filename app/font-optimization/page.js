import { Poppins } from "next/font/google"
const poppins = Poppins({
    weight: '900',
    subsets: ['latin'],
    display: 'swap'
})
const Pageoptimzation = () => {
    return (
        <>
            {/* <h2 style={{fontFamily:"Poppins",fontWeight:300}}>Font optimization in Next Js 16 with Adeel</h2> */}
            <h2 className={poppins.className}>Font optimization in Next Js 16 with Adeel</h2>
        </>
    )
}

export default Pageoptimzation