import CustomHead from '../components/CustomHead'
import NavFooter from '../components/NavFooter'
import Ramki from '../components/ramki'
import RegInside from '../components/RegInside'

export default function Home() {
  return (
    <>
      <CustomHead>
        <title>Regulamin | Verdimeble</title>
      </CustomHead>
      <Ramki>
        <RegInside />
      </Ramki>
      <NavFooter />
    </>
  )
}
