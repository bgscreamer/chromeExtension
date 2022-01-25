

let myLeads =[]



const inputEl = document.getElementById("input-el")

const saveInput = document.getElementById("input-btn")

let ulEl = document.getElementById("ulList")

const delBtn = document.querySelector("#delete-btn")

const tabBtn = document.querySelector("#save-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage !=null){
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

function render(leads){
	
	let listItems = " " 
	for(let i = 0; i<leads.length;i++){
		listItems += `<li>
		<a target='_blank' href=' ${leads[i]}'>
		${leads[i]} 
		</a>
		</li>`
	
	}

	ulEl.innerHTML = listItems
}
	


delBtn.addEventListener('dblclick',function(){
	localStorage.clear()
	myLeads = []
	render(myLeads)
	
}
)
	


saveInput.addEventListener("click",function(){
	myLeads.push(inputEl.value)
	inputEl.value = ""
	
	localStorage.setItem("myLeads",JSON.stringify(myLeads))
	render(myLeads)
	console.log(localStorage.getItem("myLeads"))
})

tabBtn.addEventListener("click",function(){
	
	//chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

	//});
	
	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		myLeads.push(tabs[0].url)
	
		localStorage.setItem("myLeads",JSON.stringify(myLeads))
		render(myLeads)
	})
})








