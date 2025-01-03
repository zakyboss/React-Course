import Cards from "./Card"
import Fruits from './Fruits'
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
let fruits = [{id:1, name:'Orange',calories:30},{id:2,name:'Mango',calories:43},{id:3,name:'Ovacado',calories:70},{id:4,name:'Apple',calories:23},{id:5,name:'Blueberries',calories:35},{id:6,name:'Paw Paw',calories:15}]
let sortedFruits = fruits.sort((a,b)=> a.name.localeCompare(b.name))
function App() {
 return (
  <div style={{display:'inline-block'}}>
    {users.map(user=> {
      return <Cards propsObj={user} key={user.name}/>
    })}
    <>
    
    {sortedFruits.length<1 ? 
    'No data available':sortedFruits.map(fruit=> {
    return  <Fruits fruitObj ={fruit} key={fruit.id}/>
  })}
    
    </>
  </div>
 )
}

export default App
