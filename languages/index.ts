import { Prism as BundledPrism } from 'prism-react-renderer'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'

type PrismLibraryType = typeof BundledPrism

const PrismLibrary = Prism as unknown as PrismLibraryType

export default PrismLibrary
