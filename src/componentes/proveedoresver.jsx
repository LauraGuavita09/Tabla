import React from 'react'
import MaterialTable from 'material-table'
import './Pendon.css'

function Editable() {
    
    const { useState } = React;
  
    const [columns] = useState([
        // eslint-disable-next-line jsx-a11y/alt-text
      { title: 'FOTOGRAFÍA', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/>,
      validate:rowData=>{
        if(rowData.imageUrl===undefined || rowData.imageUrl===""){
        return"*Obligatorio"
      }else if (rowData.imageUrl.length<10){
        return "Escriba una URL valida"
      }
      return true
    }},
      { title: 'NOMBRE', field: 'Nombre', validate:rowData=>{
          if(rowData.Nombre===undefined || rowData.Nombre===""){
          return"*Obligatorio"
        }else if (rowData.Nombre.length<5){
          return "Escriba el nombre completo del proveedor"
        }
        return true
      }},

      { title: 'PROFESIÓN', field: 'Profesión',validate:rowData=>{
        if(rowData.Profesión===undefined || rowData.Profesión===""){
        return"*Obligatorio"
      }else if (rowData.Profesión.length<5){
        return "Escriba su profesión"
      }
      return true
     }},

     { title: 'PRECIO', field: 'Precio',validate:rowData=>{
        if(rowData.Precio===undefined || rowData.Precio===""){
        return"*Obligatorio"
      }else if (!rowData.Precio.includes('.')){
        return "Escriba el precio por hora del servicio"
      }
      return true
    }},

      { title: 'CALIFICACIÓN', field: 'Calificación'},
      
      {title: 'CATEGORÍA',field: 'Categoria',lookup: { 1: 'Tutores', 2: 'Técnicos',3: 'Entrenadores'}
    },

      { title: 'TÉLEFONO', field: 'Telefono', validate:rowData=>{
        if(rowData.Telefono===undefined || rowData.Telefono===""){
        return"*Obligatorio"
      }else if (rowData.Telefono.length<7){
        return "Escriba un número de telefono valido"
      }
      return true
    }},

    { title: 'CORREO', field: 'Correo', validate:rowData=>{
        if(rowData.Correo===undefined || rowData.Correo===""){
        return"*Obligatorio"
      }else if (!rowData.Correo.includes('@' && '.')){
        return "Escriba un correo electronico valido"
      }
      return true
    }},
      { title: 'CIUDAD', field: 'Ciudad',validate:rowData=>{
        if(rowData.Ciudad===undefined || rowData.Ciudas===""){
        return"*Obligatorio"
      }else if (rowData.Ciudad.length<3){
        return "Escriba el nombre de la ciudad donde reside"
      }
      return true 
    }},

    { title: 'EXPERIENCIA', field: 'Experiencia',validate:rowData=>{
        if(rowData.Experiencia===undefined || rowData.Experiencia===""){
        return"*Obligatorio"
     }else if (rowData.Experiencia.length>100){
        return "Escriba los años de experiencia laboral"
      } 
      return true 
    }},

    ]);
  
    const [data, setData] = useState([
        { Nombre: 'Carlos Díaz', Profesión: 'Profesor de francés', Precio: '60.000', Calificación: '8/10', Categoria: 'Tutores', Telefono: '6666666', Correo: 'prueba@hotmail.com', Ciudad: 'Bogotá', Experiencia: 3, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' },
        { Nombre: 'Juan Perez', Profesión: 'Plomeria', Precio: '50.000', Calificación: '7/10', Categoria: 'Técnicos', Telefono:'3134568765', Correo: 'juanperez@hotmail.com', Ciudad: 'Medellín', Experiencia: 5, imageUrl: 'https://us.123rf.com/450wm/kritchanut/kritchanut1401/kritchanut140100054/25251050-imagen-de-perfil-del-hombre-de-negocios-avatar.jpg?ver=6' },
        
    ]);
  
    return (
        <div className="container">
        <br/>
      <MaterialTable
        title="Lista de proveedores de servicios"
        columns={columns}
        data={data}
        options={{
            actionsColumnIndex:-1,
            initialPage:1,
           
          }}
                  localization={{
            body: {
              editRow: {
                deleteText: '¿Estas seguro de Eliminar este registro?',
              },
            },
          }}

        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
      </div>
    )
  }
export default Editable

  