import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    title: '',
    url:''
  });

  const saveItem = ()=>{
    if(form.title == '' || form.url == '') { alert('Please fill in the blanks'); return; }
    data.push({
      title:form.title,
      url:form.url
      //veya sadece ...form yazilarak veri akisi saglanabilir.
    })

    localStorage.setItem('data',JSON.stringify(data));

    setForm({
      title:'',
      url:''
    })
  };

  //App ilk basladiginda useEffect calisacak


  useEffect(()=>{
    getItem();
  },[]);

  const getItem = ()=>{
    const localData = localStorage.getItem('data') ?? [];
    
    setData(JSON.parse(localData));
    //setData(JSON.isArray(localData) ? [] : JSON.parse(localData));
  }


// SILME ISLEMI
  const removeItem = (item, index) =>{
    //const xData = data.findIndex((xItem)=>xItem.url == item.url);
    data.splice(index,1);
    localStorage.setItem('data',JSON.stringify(data));
    setData([...data]);
  }

//! 1-öncelikle state de yer alan verileri map ile tek tek yazdiriyoruz.
// 2- Onchange ile form icine girilen title ve url'in alinmasini saglariz. setForm ile form state güncellenir.
//! 3- Onclick ile saveItem foksiyonu calistiriliyor.
 // 4- Güncellenen form state sonrasinda setData ile data state güncellenir.
//! 5- setForm ile input bölümleri silinir. Value={form.title} da burada input iceriginin silinmesini saglar.
// 6-State ici bosaltildi ve useEffect olusturuldu. App ilk basladiginda useEffect calistirilacak.
//! 7- getItem ile localStorage den data cekecek.
// 8- JSON.parse ile string olarak gelen veriyi JSON a ceviriyoruz.
//! 9-removeItem ile data silinir.

  return (
    <div className="App">
      <div className="inputs">
        <input onChange={(event) =>setForm({...form, title:event.target.value})} value={form.title} className="input" placeholder="Baglanti Basligi" /> 
        <input onChange={(event) =>setForm({...form, url:event.target.value})} value={form.url} className="input" placeholder="Baglanti Adresi" />
        <button onClick={saveItem} className="button">Ekle</button>     
      </div>
      
      <div>
        {data.map((item, index) => (                         
          <div className="content-item">
            <a target="_blank" href={item.url}>{item.title}</a>
            <button className="removeItem" onClick={()=> removeItem(item, index)}>X</button>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


    /* { title: "WebSite", url: "https://github.com/nsevindi87" },
    { title: "Udemy Profile", url: "https://udemy.com/nsevindi87" },
    { title: "Facebook Profile", url: "https://facebook.com/nsevindi87" },
    { title: "Instagram Profile", url: "https://instagram.com/nsevindi87" }, */