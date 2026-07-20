document.getElementById('btn-update-title').addEventListener('click',function(){
        // console.log('button clicked');
      const  pageTitleElement = document.getElementById('page-title');
      console.log(pageTitleElement);
      pageTitleElement.innerText= 'Updated page title text.'
      })


      document.getElementById('btn-login').addEventListener('click',function(){
        //console.log('login button clicked')
        const userInfoEl=document.getElementById('user-info');
        userInfoEl.innerText='login successfully';
      })


//    set event listener

    document.getElementById('btn-name').addEventListener('click',function(){
        console.log('click the name button');
        // get the text from the input field

       const inputName=document.getElementById('name-input');
       console.log('inputName');
       const name1=inputName.value;
       console.log('name',name1);

       //set the name
       const namP=document.getElementById('');
       namP.innerText=name;
    })
     