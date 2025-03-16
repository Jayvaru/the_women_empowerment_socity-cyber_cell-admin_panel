import React from 'react'
import { FiCrop, FiMap, FiPlus, FiSearch } from 'react-icons/fi'

const HelpTable = () => {

    return (
        <div className="card-body"> 
            <div className="table-responsive">
                <table className="table table-hover align-middle">  
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope='col'>Message</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>+1 (123) 456 7890</td>
                            <td>Additional Message If you want to send</td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="btn btn-sm btn-success">
                                        <FiMap className="me-2" size={16}/>
                                        See Live Location
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

export default HelpTable