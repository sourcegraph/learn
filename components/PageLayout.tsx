import Layout from './Layout'

interface Props {
    /**
     * The title of the content which will be combined with the site title.
     */
    contentTitle?: string
    children: React.ReactNode
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
}

export default function PageLayout(props: Props) {
    return (
        <Layout contentTitle={props.contentTitle}>
            <div className="row">
                <div className="col-3">{props.leftColumn}</div>
                <div className="col-6 py-5">{props.children}</div>
                <div className="col-3">{props.rightColumn}</div>
            </div>
        </Layout>
    )
}
