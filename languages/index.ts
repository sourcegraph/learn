import { Prism as BundledPrism } from 'prism-react-renderer'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-xml-doc'

type PrismLibraryType = typeof BundledPrism

const PrismLibrary = Prism as unknown as PrismLibraryType

export default PrismLibrary
