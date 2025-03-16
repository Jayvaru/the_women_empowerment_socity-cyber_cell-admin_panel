import React from 'react'
import { FiCrop, FiPlus } from 'react-icons/fi'

const VolunteerTable = () => {

    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>johndoe@gmail.com</td>
                            <td>+1 (123) 456 7890</td>
                            <td>USA</td>
                            <td>New York</td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="btn btn-sm btn-success">
                                        <FiPlus className="me-2" />
                                        Approve
                                    </a>
                                    <a href="#" className="btn btn-sm btn-danger">
                                        <FiCrop className="me-2" />
                                        Dinay
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default VolunteerTable