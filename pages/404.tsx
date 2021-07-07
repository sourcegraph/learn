import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import * as React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component<any, {}> {
    public render(): JSX.Element {
        return (
            <Layout location={this.props.location} className="bg-white">
                <div className="container center error-page text-dark">
                    <div>
                        <div >
                            <SignDirectionIcon />
                        </div>
                    </div>
                    <h1>404: Not Found</h1>
                    <p>Sorry, the requested URL was not found.</p>
                </div>
            </Layout>
        )
    }
}

export default NotFoundPage