import React from "react"
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md"
import moment from "moment"

const NoteCard = ({
  title,
  date,
  lastModified,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">Title : {title}</h6>
          <span className="text-xs text-red-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`mb-6 icon-btn ${
            isPinned ? "text-secondary " : "text-slate-300"
          }`}
          onClick={onPinNote}
        />
      </div>

      <div >
        <p className="text-xs text-slate-600 mt-2">Content : {content?.slice(0, 60)}</p>
      </div>

      <div className="text-xs text-slate-500 pt-3">
          {tags.map((item) => `#${item} `)}
      </div>
      <div className="flex items-center justify-between mt-3">
        
        <div className='text-xs text-slate-400 mt-2'>
            Last Modified: {lastModified || 'Not modified'}
       </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />

          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default NoteCard
