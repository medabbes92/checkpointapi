import React from 'react'

const UserList = ({user}) => {
  return (
    <div className='userstyle'>
{user.map(el=>
<div style={{border :" 1px solid black" , width :"460px" , height :"auto", margin : "60px" , backgroundColor :"pink²"}}>
   <h1> {el.name} </h1>  
   <h2>{el.username}</h2>
   <h2>{el.email}</h2>
   <h2>{el.address.street}</h2>
</div>
)

}
    </div>
  )
}

export default UserList