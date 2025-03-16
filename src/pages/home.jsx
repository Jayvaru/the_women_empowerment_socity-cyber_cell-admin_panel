import PageHeader from '../components/shared/pageHeader/PageHeader'
import PageHeaderDate from '../components/shared/pageHeader/PageHeaderDate'
import React from 'react'

const Home = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='card'>
                    <div className="card-header">
                        <h4 className="card-title">Card title</h4>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Home