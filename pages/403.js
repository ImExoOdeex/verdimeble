import NavFooter from '../components/NavFooter'
import Error from '../components/Error403'
import CustomHead from '../components/CustomHead'

export default function error() {
  return (
    <>
      <CustomHead>
        <title>Verdimeble | 403</title>
      </CustomHead>
      <Error />
      <NavFooter />
    </ >
  )
}
