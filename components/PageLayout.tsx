import Layout from './Layout'

export default function PageLayout({ children }) {
    return (
        <Layout>
            <div className="container markdown-content">
                <div className="row">
                    <div className="col py-5">{children}</div>
                </div>
            </div>
        </Layout>
    )
}
