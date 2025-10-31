import page from '../page.module.css'
import custom from '../custom.module.css'
const CSSModules = () => {
  return (
    <>
          {/* <h2 className='main'>CSS Modules in next js 14</h2> */}
          <h2 className={custom.main}>CSS Modules in next js 14</h2>
          <h2 className={page.main}>Adeel JaAt</h2>
    </>
  )
}

export default CSSModules