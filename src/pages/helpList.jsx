import React from 'react'
import PageHeader from '../components/shared/pageHeader/PageHeader'
import PageHeaderDate from '../components/shared/pageHeader/PageHeaderDate'
import HelpTableHeader from '../components/sosHelp/helpTableHeader'
import HelpTable from '../components/sosHelp/HelpTable'

const HelpList = () => {
    return (
        <div>
            <PageHeader>
                <PageHeaderDate />
            </PageHeader>
            <div className="main-content">
                <div className="card">
                    <HelpTableHeader />
                    <HelpTable />
                </div>
            </div>
        </div>
    )
}

export default HelpList