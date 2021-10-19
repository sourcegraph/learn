import { Prism as BundledPrism } from 'prism-react-renderer'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'

type PrismLibraryType = typeof BundledPrism

const PrismLibrary = Prism as unknown as PrismLibraryType

export default PrismLibrary
