import React from 'react'

const UserCard = ({ user, deleteUser, setUserUpdate, handleChangeShowModal }) => {
    const handleChangeClickUpdate = () => {
        setUserUpdate(user)
        handleChangeShowModal()
    }
    return (
        <article className='user'>

            <h2 className='user_title'>{`${user.first_name} ${user.last_name}`}</h2>

            <ul className='user_list_email'>
                <fragment className='icon-email'> <i class='bx bxs-envelope' ></i></fragment>
                <li className='user_item'><span></span>{user.email}</li>
            </ul>

            <ul className='user_list_birthday'>
                <fragment className='icon-gift'><i className='bx bxs-gift'></i></fragment>
                <li className='user_item'><span></span>{user.birthday}</li>
            </ul>

            <div className='user_container-btn'>
                <button className='user_btn' onClick={() => deleteUser(user.id)}>
                    <i className='bx bx-trash'></i>
                </button>
                <button className='user_btn' onClick=
                    {handleChangeClickUpdate}>
                    <i className='bx bx-pencil'></i>
                </button>
            </div>
        </article>
    )
}

export default UserCard