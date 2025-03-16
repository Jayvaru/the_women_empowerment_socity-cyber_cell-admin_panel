import React from 'react'
import VolunteerListHeader from '../components/volunteer/VolunteerListHeader'
import VolunteerTable from '../components/volunteer/VolunteerTable'
import PageHeader from '../components/shared/pageHeader/PageHeader'
import PageHeaderDate from '../components/shared/pageHeader/PageHeaderDate'

const VolunteerList = () => {
    return (
        <div>
            <PageHeader>
                <PageHeaderDate />
            </PageHeader>
            <div className="main-content">
                <div className="card">
                    <VolunteerListHeader />
                    <VolunteerTable />
                </div>
            </div>
        </div>
    )
}

export default VolunteerList