
import React from 'react';
import { modal } from './types/modal';

export const userModal: React.FC<modal>=({user, onClose})=>{
    return(
        <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>X</button>
        <h2>{user.fullName}</h2>
        <img src={user.picture} alt={user.fullName} />
        <p>Username: {user.username}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Location: {user.location}</p>
      </div>
    </div>
    )
}