
import Image from 'next/image'
// import Img from '/public/next.svg'
const ImageOptimization = () => {
    // console.log(Img)
  return (
    <>
        <h2>Image Optimization in React Js 14</h2>
        {/* <Image
        src="/next.svg"
        alt="Next Logo"
        width={200}
        height={200}
      
        />
        <img src="/next.svg" alt="/next.svg" /> */}
        <Image
         src='https://images.pexels.com/photos/27596054/pexels-photo-27596054.jpeg?_gl=1*z6ldxk*_ga*MTQyNzIzOTE3OC4xNzYyMDMxMjQ1*_ga_8JE65Q40S6*czE3NjIwMzEyNDQkbzEkZzEkdDE3NjIwMzEzNDgkajMyJGwwJGgw'
         alt='Pexel Image'
         height={900}
         width={900}
        />
    </>
  )
}

export default ImageOptimization