//Validate LOGIN USER
document.getElementById('contactForm').addEventListener('submit', validateAccount);

function validateAccount(e){
    e.preventDefault();
    console.log(123);
    // let error=0;

    // let name = document.getElementById('loginUsername');
    // const namecheck = "fptaptech123"
    // let password = document.getElementById('loginPassword');
    // const passwordcheck = "@thebest";

    // if(name.value!=namecheck || password.value!=passwordcheck){
    //     alert("invalid username/password");
    //     error=1;
    // } else {alert("Welcome! Have a good discovering day!");}

}

////////




// //Get Countries From Json File
// const searchcountry = async searchBox => {
//     const res = await fetch('../data/countries.json');
//     const countries = await res.json();
    
//     //Get & Filter Through Entered Data
//     let fits = countries.filter(country => {
//       const regex = new RegExp(`^${searchBox}`, 'gi');
//       return country.name.match(regex) || country.abbr.match(regex);
//     });
    
//     //Clears Data If Search Input Field Is Empty
//     if (searchBox.length === 0) {
//       fits = [];
//       countryList.innerHTML = '';
//     }
//     outputHtml(fits);
//   };

//   // Display result in HTML
// const outputHtml = fits => {
//     if (fits.length > 0) {
//       const html = fits
//         .map(
//           fit => `
//        <div class="row">
//        <div class="col s12">
//          <div class="card  grey darken-4 darken-1">
//            <div class="card-content white-text">
//              <h4 class="card-title m1">${fit.name} (${
//             fit.abbr
//           })<span class="blue-text m-4"> ${fit.capital}</span></h4>
//           <div class="card-action">
//           <a>Country Code :</a>
//           <a>${fit.phoneCode}</a>
//         </div>
//            </div>
//          </div>
//        </div>
//      </div>
//        `).join('');
//     }
//   };

//   document.getElementById('countryList').innerHTML = html;
// document.getElementById('search').addEventListener('input', () => searchcountry(search.value));