function App() {
  let products = ['Orange', 'Mango','Avocado','fish', 'beige']
 return (
  <div>
<div style={{display:'flex'}}>
  < ul style={{listStyle:'none',display:'grid',justifyContent:"space-between", backgroundColor:'whitesmoke', width:'900px',color:'black', marginLeft:'35%', marginRight:'20%'}}>
  <li>Home</li>
  <li>About Us </li>
  <li>Feedback</li>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi suscipit repellat necessitatibus debitis doloremque explicabo ratione sunt tempora veniam. Dolore laborum ab tempora voluptatem ratione fuga accusamus eum ducimus!</p>
  </ul>
  <hr/>
</div>
<div style={{display:'grid'}}>
  <h3 style={{marginLeft:'43%', marginTop:'-10px'}}>Our products</h3>
  <ul style={{display:"block",height:'100px', backgroundColor:'whitesmoke', listStyle:'none', marginTop:'-10px'}}>
  {products.map((value, index)=> {
    return <li style={{marginLeft:'40%'}} key={index}>{value}</li>
  })}
  </ul>
</div>
  </div>
 )
}

export default App
