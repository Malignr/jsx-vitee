
function UserList(){
    return(
        <>
         
         <ul style={{fontSize:"30px",fontWeight: "bold",fontFamily:"Courier New"}}>
           <li>Konya Teknik Üniversitesi-(Elektrik Elektronik Mühendisliği)</li>
           <li>Mehmet Münevver Kurban Anadolu Lisesi</li>
         </ul>
        </>
    )
}
function SingleUser() {
    return (
      <>
        <h2 style={{fontSize: "35px", fontWeight: "bold",fontFamily:"Courier New", backgroundColor:"Gold",margin:0}}>HOBİLERİM</h2>
        <ul style={{fontSize: "30px", fontWeight: "bold",fontFamily:"Courier New"}}>
          <li>Futbol</li>
          <li>Basketbol</li>
          <li>Müzik</li>
          <li>Yazılım</li>
        </ul>
      </>
    )
  }
export{UserList,SingleUser}
