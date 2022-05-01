let searchImages =async (API,value)=>{
    //let value = document.getElementById("query").value;

    try{
    let res =await fetch(
        `https://api.unsplash.com/search/photos/?query=${value}&per_page=40&client_id=${API}`
        );
    
        let data = await res.json();
        console.log(data)
        return data;
    }catch(err){
        console.log(err)
    }
}

let append = (data,container)=>{
    data.forEach(({alt_description,urls:{small}})=>{
       let div = document.createElement('div');
    div.id="box"

       let img = document.createElement ('img');
       img.style.height="270px"
       img.style.wiidth="270px"
       let h3 = document.createElement('h4');

       img.src=small;
       h3.innerText=alt_description;

       div.append(img,h3);
       container.append(div);
    })
}


export { searchImages,append }