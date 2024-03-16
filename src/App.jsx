import './App.css'
import user from "./assets/IMAGE-2.jpg"

import { useState } from 'react'


function App() {
  const [name, setName] = useState('ALi')
  const [age, setAge] = useState('17')
  const [jinsi, setJinsi] = useState('Erkak')
  const [izoh, setIzoh] = useState('Default qiymat')
  const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem('data')))
  let data = []
  function getData() {
    if (localStorage.getItem('data')) {
      data = JSON.parse(localStorage.getItem('data'))
    }
    return data
  }

  function handleClick(e) {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name: name,
      age: age,
      jinsi: jinsi,
      izoh: izoh
    }
    let dataa = getData()
    dataa.push(user)
    localStorage.setItem('data', JSON.stringify(dataa))
    setAllUser(dataa)

  }
  function handleDelete(e, id) {
    let c = confirm('Rostdan ham ushbu Malumotlarni ochirmqochimisiz')
    if (c) {
      let copied = JSON.parse(JSON.stringify(allUser))
      copied = copied.filter(el => {
        return el.id != id
      })
      localStorage.setItem('data', JSON.stringify(copied))
      setAllUser(copied)
    }
  }

  return (
    <>
      <div className='Navbar'>
        <nav class="navbar navbar-expand-lg">
          <h1>My Company</h1>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="button">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <div className='divAll'>
        <div className='menu'>
          <h3 className='mt-2 d-flex'><img src={user} />User ()</h3>
        </div>
        <div className="form-wrapper mt-5">
          <form className='form p-4 shadow-sm'>
            <h2>Malumotlarni kirgazing</h2>
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" className='form-control' id='name' placeholder='Salohiddin' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label">Your Age</label>
              <input type="number" className='form-control' id='age' placeholder='17' value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div className='mb-3'>
              <label htmlFor="jinsi">Jinsingizni tanlang</label>
              <select id="jinsi" className='form-select' onChange={(e) => { setJinsi(e.target.value) }} >
                <option value='tanlanmagan'>Jinsingizni tanlang</option>
                <option value='erkak'>Erkak</option>
                <option value='ayol'>Ayol</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Izoh kiriting</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Zor bola' value={izoh} onChange={(e) => { setIzoh(e.target.value) }} ></textarea>
            </div>
            <div className='mb-4'>
              <button onClick={handleClick} className='btn btn-success'>Saqlash</button>
            </div>
          </form>
        </div>
        <div className='table-container'>
          <table class="table shadow-sm mt-5">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Ismi</th>
                <th scope="col">Yoshi</th>
                <th scope="col">Jisni</th>
                <th scope="col">Izohi</th>
                <th scope="col">Ochirish</th>
              </tr>
            </thead>
            {
              allUser && allUser.map((el, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <th scope="row"><img src={user} alt="" /></th>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.jinsi}</td>
                      <td>{el.izoh}</td>
                      <td><button onClick={() => { handleDelete(el, el.id) }} className='btn btn-outline-danger'>Delete</button></td>
                    </tr>
                  </tbody>
                )
              })
            }

          </table>
        </div>
      </div>
    </>
  )
}
export default App
