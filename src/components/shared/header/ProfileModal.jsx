    import React, { Fragment } from 'react'
    import { useCookies } from 'react-cookie'
    import { FiActivity, FiBell, FiChevronRight, FiDollarSign, FiLogOut, FiSettings, FiUser } from "react-icons/fi"
    import { useNavigate } from 'react-router-dom'

    const activePosition = ["Active", "Always", "Bussy", "Inactive", "Disabled", "Cutomization"]
    const subscriptionsList = ["Plan", "Billings", "Referrals", "Payments", "Statements", "Subscriptions"]
    const ProfileModal = () => {
        const [cookie,removeCookie] = useCookies(['token', 'id', 'name']);
        const navigate = useNavigate();

        console.log(cookie);
        const handleLogout = () => {
            removeCookie("token");
            removeCookie("id");
            removeCookie("name");
            navigate("/login")
        }

        return (
            <div className="dropdown nxl-h-item">
                <a href="#" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                    <img src="/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar me-0" />
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                    <div className="dropdown-header">
                        <div className="d-flex align-items-center">
                            <img src="/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar" />
                            <div>
                                <h6 className="text-dark mb-0">Admin</h6>
                                <span className="fs-12 fw-medium text-muted">{cookie.name}</span>
                            </div>
                        </div>
                    </div>
                    <a onClick={handleLogout} className="dropdown-item">
                        <i> <FiLogOut /></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        )
    }

    export default ProfileModal

    const getColor = (item) => {
        switch (item) {
            case "Always":
                return "always_clr"
            case "Bussy":
                return "bussy_clr"
            case "Inactive":
                return "inactive_clr"
            case "Disabled":
                return "disabled_clr"
            case "Cutomization":
                return "cutomization_clr"
            default:
                return "active-clr";
        }
    }