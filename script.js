const addbutton = document.querySelector('#add');

const updateLSdata=()=>{
    const textareadata=document.querySelectorAll('textarea');  //array
    const notes=[];
    

    textareadata.forEach((note)=>{
        return notes.push(note.value)
    })

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text='')=>{
   
    const note= document.createElement('div');
    note.classList.add('note'); 

    const htmlData=`
    <div class="operation">
            <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>

            <button class="delete">
                <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
        </div>

        <div class="main-div ${text ? "":"hidden"}" ></div>
        <textarea class="${text ?" hidden":" "}" ></textarea>` ;
     
        note.insertAdjacentHTML('afterbegin',htmlData);
        console.log(note);

        const delbutton=note.querySelector('.delete');
        const editbutton=note.querySelector('.edit');
        const maindiv = note.querySelector('.main-div');
        const textarea=note.querySelector('textarea');


delbutton.addEventListener('click',()=>{
    note.remove();
    updateLSdata();
})


//toggle using edit item

textarea.value=text;
maindiv.innerHTML=text;
   
   editbutton.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
   })

   textarea.addEventListener('change',(event)=>{
    const value = event.target.value;
    maindiv.innerHTML=value;

    updateLSdata();
   })



        document.body.appendChild(note);

}

//getting data back from local storage

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => addNewNote(note))}

addbutton.addEventListener('click',()=>
  addNewNote() 
);

