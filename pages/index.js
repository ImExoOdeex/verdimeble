import Inside from '../components/inside'
import NavFooter from '../components/NavFooter'
import Ramki from '../components/ramki'
import CustomHead from '../components/CustomHead'

export default function Home() {
  return (
    <>
      <CustomHead>
        <title>Verdimeble | szczecin</title>
      </CustomHead>
      <Ramki>
        <Inside />
      </Ramki>
      <NavFooter />
    </>
  )
}
