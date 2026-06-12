
async function loadDashboard() {


const response =
    await fetch("http://localhost:3000/api/leads");

const leads = await response.json();

document.getElementById("total").innerText =
    leads.length;

document.getElementById("new").innerText =
    leads.filter(
        lead => lead.status === "new"
    ).length;

document.getElementById("contacted").innerText =
    leads.filter(
        lead => lead.status === "contacted"
    ).length;

document.getElementById("converted").innerText =
    leads.filter(
        lead => lead.status === "converted"
    ).length;


}

loadDashboard();
