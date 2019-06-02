const search=document.querySelector("#search");
const matchList=document.querySelector("#match-list");

const searchStates=async searchText () => {

const res = await fetch("state-c.json");
const states = await res.json();

let matches=states.filter(state => {

const regex=new RegExp(`^${searchText}`,"gi");

 return state.name.match(regex) || state.abbr.match(regex);

});


if(searchText.length===0){
matches=[" "];
}

outputHtml(matches);
}

const
outputHtml=matches=>{

if(matches.lengh<0){

const html=matches.map(match => `
<div class="card card-body mb-1">

<h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span>
</h4>

<small>Lat:${match.lat} /Long:${match.long}
</small>

</div>
`
).join("");

matchList.innerHTML=html;
}

search.addEventListener("input", () => searchStates(search.value));