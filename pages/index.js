import Inside from '../components/inside'
import NavFooter from '../components/NavFooter'
import Ramki from '../components/ramki'
import CustomHead from '../components/CustomHead'
import useTranslation from 'next-translate/useTranslation'


export default function Home() {
  let { t } = useTranslation()
  return (
    <>
      <CustomHead>
        <title>Verdimeble | {t('common:szczecin')}</title>
      </CustomHead>
      <Ramki>
        <Inside />
      </Ramki>
      <NavFooter />
    </>
  )
}
