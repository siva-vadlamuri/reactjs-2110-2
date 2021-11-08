function Home() {
    const isLoginned = true;
    // if(isLoginned){
    //     return (
    //         <div>
    //            <h2>Welcome User</h2>
    //         </div>
    //     )

    // }
    // else{
    //     return(
    //         <div>
    //             <h2>Welcome, Guest User!!!</h2>
    //         </div>
    //     )
    // }
  return(
      <div>
          {
              isLoginned ?  <h2>Welcome User</h2> : <h2>Welcome, Guest User!!!</h2>
          }
      </div>
  )
   
}

export default Home
