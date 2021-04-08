import Layout from './Layout'

export default function PageLayout({ children }) {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col">{children}</div>
                </div>
            </div>
        </Layout>
    )
}
