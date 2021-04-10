import Layout from './Layout'

interface Props {
    children: React.ReactNode
}

export default function PageLayout(props: Props) {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col py-5">{props.children}</div>
                </div>
            </div>
        </Layout>
    )
}
