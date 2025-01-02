import Cards from "./Card"
let users= [
  {
  name:'Zakyboss',
  career:'',
  hobbies:['fishing','hunting', 'swimming'],
  photo:'./profile.jpg'
  },
  {
  name:'Geophry',
  career:'Fashion Model',
  hobbies:['fishing','hunting', 'swimming'],
  photo:'./Geophry.jpeg'
  },
  {
  name:'Vanessa',
  career:'Software Engineer',
  hobbies:['fishing','hunting', 'singing'],
  photo:'./vanessa.jpeg'
  }
]
function App() {
 return (
  <div style={{display:'flex'}}>
    {users.map(user=> {
      return <Cards propsObj={user} key={user.name}/>
    })}
  </div>
 )
}

export default App
