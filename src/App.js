import "./styles.css";
import s1 from "./img/s1.jpg";
import s2 from "./img/s2.jpg";
export default function App() {
  const profilelist=[
    {
      name: "shruti",
      pic: s1
    },
    {
      name: "nayana",
      pic: s2
    }
  ]
  return (
    <div className="App">
      {profilelist.map((profile)=>(
        <Mdg name={profile.name} imgSrc={profile.pic} />
      ))}
   
    </div>
  );
}

function Mdg({ name, imgSrc }) {
  //const name="shruti"
  return (
    <div>
      <img className="imgcl" src={imgSrc} />
      <h1>Hello {name}</h1>
    </div>
  );
}
