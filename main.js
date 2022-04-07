let resBtn = document.getElementById("residentsBtn");


const baseUrl = "https://swapi.dev/api/";

const printResponseData = (response) => {console.log(response.data)};
const getAlderaanInfo = () => axios.get(`${baseUrl}planets/`).then(alderaanPrintInfo);


const printString = (e) => {
    console.log("test")
};
resBtn.addEventListener('click', printString);