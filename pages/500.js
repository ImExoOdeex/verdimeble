import NavFooter from '../components/NavFooter'
import Error from '../components/Error500'
import CustomHead from '../components/CustomHead'

export default function error() {
  return (
    <>
      <CustomHead>
        <title>Verdimeble | 500</title>
      </CustomHead>
      <Error />
      <NavFooter />
    </ >
  )
}
