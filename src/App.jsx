import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  //estado para almacena los usuarios
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShowForm, setIsShowForm] = useState(false)

  //funcion que obtiene los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  //funcion que crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        handleChangeShowModal()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
        handleChangeShowModal()
      })
      .catch(err => console.log(err))
  }

  const handleChangeShowModal = () => {
    setIsShowForm(!isShowForm)
  }

  const handleClickNewUser = () => {
    setUserUpdate()
    handleChangeShowModal()

  }
  //se obtienen todos los usuarios al cargar la app
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className='header-container'>
        <h1 className='header_title'>Crud Users</h1>
        <button onClick={handleClickNewUser} className='header_btn'><i className="bx bx-plus"></i>Create new user</button>
      </div>
      <FormUsers
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeShowModal={handleChangeShowModal}
      />
      <div className='users-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              handleChangeShowModal={handleChangeShowModal}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
