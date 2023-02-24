
import React, { useState } from 'react';
import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

      })
    }

    setStudents(prevState => [...prevState, newStudent]);

  }

  return (
    <div className='box'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Felipe Alves Guarino</strong>
          <img src="https://media.licdn.com/dms/image/D4D03AQGx_kwbF_fo_w/profile-displayphoto-shrink_800_800/0/1673968777653?e=1682553600&v=beta&t=SfE0QbxEFvuiSp0Q0jB3xjZ6leItGBGYz2Ej9rtefLA" alt="Perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student =>
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        )
      }

    </div>
  )
}

