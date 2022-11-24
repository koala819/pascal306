import { Layout } from '../components/Layout';
import Stepper from '../components/Stepper'

export default function Membership() {
  return (
    <Layout title='Adhesion Membre'>
      <div className="mt-10 container mx-auto px-5 py-8 md:flex-row flex-col items-center h-screen overflow-hidden">
        <Stepper />
      </div>
    </Layout>
  )
}