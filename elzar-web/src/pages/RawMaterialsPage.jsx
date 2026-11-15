import { rawMaterials } from '../data/content'
import PageHead from '../components/PageHead'
import RawMaterials from '../components/RawMaterials'
import Contact from '../components/Contact'
import QuoteButton from '../components/QuoteButton'

export default function RawMaterialsPage() {
  return (
    <>
      <PageHead title={rawMaterials.title} />
      <RawMaterials />
      <Contact />
      <QuoteButton />
    </>
  )
}
