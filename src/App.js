import React, { useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([
    { title: "WebSite", url: "https://github.com/nsevindi87" },
    { title: "Udemy Profile", url: "https://udemy.com/nsevindi87" },
    { title: "Facebook Profile", url: "https://facebook.com/nsevindi87" },
    { title: "Instagram Profile", url: "https://instagram.com/nsevindi87" },
  ]);

  const [form, setForm] = useState({
    title: '',
    url:''
  });

  const saveItem = ()=>{
    if(form.title == '' || form.url == '') { alert('Please fill in the blanks'); return; }
    setData([        
      ...data,
      {
        title:form.title,
        url:form.url
      }
    ]);
    setForm({
      title:'',
      url:''
    })
  };

  //App ilk basladiginda useEffect calisacak

  const getItem = ()=>{

  }

//! 1-öncelikle state de yer alan verileri map ile tek tek yazdiriyoruz.
// 2- Onchange ile form icine girilen title ve url'in alinmasini saglariz. setForm ile form state güncellenir.
//! 3- Onclick ile saveItem foksiyonu calistiriliyor.
 // 4- Güncellenen form state sonrasinda setData ile data state güncellenir.
//! 5- setForm ile input bölümleri silinir. Value={form.title} da burada input iceriginin silinmesini saglar.

  return (
    <div className="App">
      <div className="inputs">
        <input onChange={(event) =>setForm({...form, title:event.target.value})} value={form.title} className="input" placeholder="Baglanti Basligi" /> 
        <input onChange={(event) =>setForm({...form, url:event.target.value})} value={form.url} className="input" placeholder="Baglanti Adresi" />
        <button onClick={saveItem} className="button">Ekle</button>       
      </div>
      
      <div>
        {data.map((item) => (                         
          <div className="content-item">
            <a target="_blank" href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
