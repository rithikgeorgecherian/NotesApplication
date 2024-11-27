import React from "react"
import { getInitials } from "../../utils/helper"

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.username)}
      </div>

      <div>
        <p className="text-sm font-semibold">{userInfo?.username}</p>
      </div>

      <div className="navbar-end">
            <a className="btn-primary cursor-pointer font-bold" onClick={onLogout}>Logout</a>
        </div>
    </div>
  )
}

export default ProfileInfo
