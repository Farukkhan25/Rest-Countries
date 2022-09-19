const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  // console.log(countriesHTML);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountryHTML = ({name,flags}) => {
  return `
    <div class ="country">
    <h2 class="country-name">${name.common}</h2>
    <img src = "${flags.png}">
    </div>
    `;
};

loadCountries();
