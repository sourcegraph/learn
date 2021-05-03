import Layout from './Layout'

interface Props {
    /**
     * The title of the content which will be combined with the site title.
     */
    contentTitle?: string
    children: React.ReactNode
}

export default function PageLayout(props: Props) {
    return (
        <Layout contentTitle={props.contentTitle}>
            <div className="container">
                <div className="row">
                    <div className="col py-5">{props.children}</div>
                </div>
            </div>
        </Layout>
    )
}
