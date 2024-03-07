const loadPhone = async (searchText) =>{
    const res =await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones =>{
    // console.log(phones)
    //step1: 
    const phoneContainer = document.getElementById('phone-container')
    //clear phoneContainer cards before adding new cards
    phoneContainer.textContent='';
    const showAllContainer= document.getElementById('show-all-container');
    if(phones.length > 12){
      showAllContainer.classList.remove('hidden');
    }else{
      showAllContainer.classList.add('hidden')
    }
    // display only first 12 letter 
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
        console.log(phone);
         // 2. create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card p-4 bg-gray-100 shadow-xl`
         //step 3 : set innerHtml
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        
        `
        //step 4: appendChild 
        phoneContainer.appendChild(phoneCard)

    });
    toggleLoddingSpinner(false);
}

// handle search button
const handleSearch =() =>{
  toggleLoddingSpinner(true);

  const searchField =document.getElementById('search-field');
  const searchText =searchField.value;
  console.log(searchText);
  loadPhone(searchText)

}

// hadle search recap
// const handleSearch2 =()=> {
//   toggleLoddingSpinner(true);
//   const searchField = document.getElementById('search-field2');
//   const searchText = searchField.value;
//   loadPhone(searchText);
// }

const toggleLoddingSpinner =(isloading) => {
  const loadingSpinner= document.getElementById('loading-spinner');
  if(isloading){
    loadingSpinner.classList.remove('hidden');
  }else{
    loadingSpinner.classList.add('hidden');
  }
}

// loadPhone()


