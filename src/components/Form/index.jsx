import 'index.css'
import { useState } from 'react'



function Form() {
  const [name, setName] = useState('Salohiddin')
  const [age, setAge] = useState('17')
  const [jinsi, setJinsi] = useState('Erkak')
  const [izoh, setIzoh] = useState('Default qiymat')

  function handleClick(e) {
      e.preventDefault();
      const user = {
          id: Date.now(),
          name: name,
          age: age,
          jinsi: jinsi,
          izoh: izoh
      }

  }
  return (
      <>
          <div className="form-wrapper mt-5">
              <form className='form p-3 shadow-sm'>
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
                      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Zor bola' value={izoh} onChange={(e) => { setIzoh(e.target.value) }} ></textarea>
                  </div>
                  <div className='mb-4'>
                      <button onClick={handleClick} className='btn btn-success'>Saqlash</button>
                  </div>
              </form>
          </div>
      </>
  )
}
export default Form
