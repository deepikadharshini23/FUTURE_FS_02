
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", loadLeads);
}

const leadForm = document.getElementById("leadForm");
const leadList = document.getElementById("leadList");

async function loadLeads() {

    const response =
        await fetch("http://localhost:3000/api/leads");

    const leads = await response.json();

    const searchValue =
    document.getElementById("searchInput")
        ?.value
        .toLowerCase() || "";

    leadList.innerHTML = "";

   const total = document.getElementById("total");
   const newLead = document.getElementById("new");
   const contacted = document.getElementById("contacted");
   const converted = document.getElementById("converted");


   if (total) {
    total.innerText = leads.length;
  }
  
  if (newLead) {
    newLead.innerText =
        leads.filter(
            lead => lead.status === "new"
        ).length;
    }

    if (contacted) {
      contacted.innerText =
        leads.filter(
            lead => lead.status === "contacted"
        ).length;
    }

   if (converted) {
    converted.innerText =
        leads.filter(
            lead => lead.status === "converted"
        ).length;
    }

    leads
    .filter(lead =>
    lead.name.toLowerCase().includes(searchValue) ||
    lead.email.toLowerCase().includes(searchValue)
    )
    .forEach((lead) => {

        leadList.innerHTML += `
        <tr>

            <td>${lead.name}</td>

            <td>${lead.email}</td>

            <td>${lead.phone || ""}</td>

            <td>${lead.company || ""}</td>

            <td>
            <span
             class="status-${lead.status}">
                ${lead.status}
                </span>
            </td>

            <td>${lead.createdAt || "N/A"}</td>


            <td class="action-buttons">

                <button onclick="updateStatus(${lead.id}, 'contacted')">
                    Contacted
                </button>

                <button onclick="updateStatus(${lead.id}, 'converted')">
                    Converted
                </button>

                <button onclick='openEditModal(
                 ${lead.id},
                "${lead.name}",
                "${lead.email}",
                "${lead.phone}",
                "${lead.company}"
                )'>
                     Edit
                </button>


                <button onclick="deleteLead(${lead.id})">
                    Delete
                </button>

            </td>

            <td >

                <input
                    type="text"
                    id="note-${lead.id}"
                    placeholder="Add note"
                >

                <button onclick="addNote(${lead.id})">
                    Save
                </button>

               <ul>
                 <li>${lead.notes || ""}</li>
               </ul>

            </td>

        </tr>
        `;
    });
   }
   loadLeads();


 
   if(leadForm) {
       leadForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const company =
    document.getElementById("company").value;

    await fetch(
        "http://localhost:3000/api/leads",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                company

            })
        }
    );

    leadForm.reset();

    loadLeads();

});
   }

loadLeads();

async function updateStatus(id, status) {

    await fetch(
        `http://localhost:3000/api/leads/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        }
    );

    loadLeads();
}
async function addNote(id) {

    console.log("👉 FRONTEND CLICKED");

    const note = document.getElementById(`note-${id}`).value;

    const res = await fetch(`http://localhost:3000/api/leads/${id}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ note })
    });

    console.log("STATUS:", res.status);
    console.log("TEXT RESPONSE:", await res.text());
}

async function deleteLead(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this lead?");

    if (!confirmDelete) {
        return;
    }

    await fetch(
        `http://localhost:3000/api/leads/${id}`,
        {
            method: "DELETE"
        }
    );

    loadLeads();
}

function openEditModal(
    id,
    name,
    email,
    phone,
    company
) {

    document.getElementById("editModal").style.display = "block";

    document.getElementById("editId").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;
    document.getElementById("editPhone").value = phone;
    document.getElementById("editCompany").value = company;
}

function closeModal() {

    document.getElementById("editModal").style.display = "none";
}
async function saveEdit() {

    const id =
        document.getElementById("editId").value;

    const name =
        document.getElementById("editName").value;

    const email =
        document.getElementById("editEmail").value;

    const phone =
        document.getElementById("editPhone").value;

    const company =
        document.getElementById("editCompany").value;

    await fetch(
        `http://localhost:3000/api/leads/${id}/edit`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                company
            })
        }
    );

    closeModal();

    loadLeads();
}



