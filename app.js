// Sample materials data (replace with your own data)
const materials = [
    {
        materialName: "Material 1",
        CasNumber: "123-45-6",
        IupacName: "IUPAC Name 1",
        batches: [
         
        ],
        batchesIndex:0,
        ChemicalFormula: "H2O",
        HazardCodes: "H1, H2",
        BoilingPoint: "100°C",
        MeltingPoint: "0°C",
        RiskCodes: "R1, R2",
        StorageConditions: "Store in a cool, dry place",
        ItemId: "12345",
        APICode1: "ABC123",
        APICode2: "DEF456",
        APICode3: "GHI789",
        Comments: "Comments for Material 1",
    },
    {
        materialName: "Material 2",
        CasNumber: "789-12-3",
        IupacName: "IUPAC Name 2",
        batches: [
         
            // Add more batches for Material 1 here
        ],
        batchesIndex:0,
        ChemicalFormula: "CH4",
        HazardCodes: "H3, H4",
        BoilingPoint: "0°C",
        MeltingPoint: "-182°C",
        RiskCodes: "R3, R4",
        StorageConditions: "Keep away from open flames",
        ItemId: "67890",
        APICode1: "XYZ456",
        APICode2: "LMN789",
        APICode3: "PQR123",
        Comments: "Comments for Material 2",
    },
    {
        materialName: "Material 3",
        CasNumber: "456-78-9",
        IupacName: "IUPAC Name 3",
        batches: [
            {
                amount: 100,
                package: "kg",
                totalAmount: 100 * 1, // Calculate total amount based on amount and package
                suplayer: "Supplier A",
                batchNumber: "Batch-001",
                externalBatchNumber: "ExtBatch-001",
                entryDate: "2023-09-15",
                expiryDate: "2023-12-31",
                location: "Warehouse A",
                shelf: "Shelf 1",
                batchDescription: "Sample batch description",
                comments: "Comments for Batch 1",
                orderedBy: "John Doe",
                isForDistribution: true,
                destinationDistribution: "Customer X",
                project: "Project A",
                packageLeft: 100,
                totalAmountLeft: 100 * 1, // Calculate total amount left based on packageLeft
            },
            // Add more batches for Material 1 here
        ],
        batchesIndex:0,
        ChemicalFormula: "C6H12O6",
        HazardCodes: "H5, H6",
        BoilingPoint: "200°C",
        MeltingPoint: "25°C",
        RiskCodes: "R5, R6",
        StorageConditions: "Store in a well-ventilated area",
        ItemId: "54321",
        APICode1: "JKL789",
        APICode2: "MNO123",
        APICode3: "STU456",
        Comments: "Comments for Material 3",
    },
    // Add more randomly generated materials here
    // ...
];

// Generate 27 more random materials to make a total of 30
for (let i = 4; i <= 30; i++) {
    materials.push({
        materialName: `Material ${i}`,
        CasNumber: `CAS-${i * 111}`,
        IupacName: `IUPAC Name ${i}`,
        batches: [
            {
                amount: 100,
                package: "kg",
                totalAmount: 100 * 1, // Calculate total amount based on amount and package
                suplayer: "Supplier A",
                batchNumber: "Batch-001",
                externalBatchNumber: "ExtBatch-001",
                entryDate: "2023-09-15",
                expiryDate: "2023-12-31",
                location: "Warehouse A",
                shelf: "Shelf 1",
                batchDescription: "Sample batch description",
                comments: "Comments for Batch 1",
                orderedBy: "John Doe",
                isForDistribution: true,
                destinationDistribution: "Customer X",
                project: "Project A",
                packageLeft: 100,
                totalAmountLeft: 100 * 1, // Calculate total amount left based on packageLeft
            },
            {
                amount: 100,
                package: "kg",
                totalAmount: 100 * 1, // Calculate total amount based on amount and package
                suplayer: "Supplier A",
                batchNumber: "Batch-001",
                externalBatchNumber: "ExtBatch-001",
                entryDate: "2023-09-15",
                expiryDate: "2023-12-31",
                location: "Warehouse A",
                shelf: "Shelf 1",
                batchDescription: "Sample batch description",
                comments: "Comments for Batch 1",
                orderedBy: "John Doe",
                isForDistribution: true,
                destinationDistribution: "Customer X",
                project: "Project A",
                packageLeft: 100,
                totalAmountLeft: 100 * 1, // Calculate total amount left based on packageLeft
            },       {
                amount: 100,
                package: "kg",
                totalAmount: 100 * 1, // Calculate total amount based on amount and package
                suplayer: "Supplier A",
                batchNumber: "Batch-001",
                externalBatchNumber: "ExtBatch-001",
                entryDate: "2023-09-15",
                expiryDate: "2023-12-31",
                location: "Warehouse A",
                shelf: "Shelf 1",
                batchDescription: "Sample batch description",
                comments: "Comments for Batch 1",
                orderedBy: "John Doe",
                isForDistribution: true,
                destinationDistribution: "Customer X",
                project: "Project A",
                packageLeft: 100,
                totalAmountLeft: 100 * 1, // Calculate total amount left based on packageLeft
            },       {
                amount: 100,
                package: "kg",
                totalAmount: 100 * 1, // Calculate total amount based on amount and package
                suplayer: "Supplier A",
                batchNumber: "Batch-001",
                externalBatchNumber: "ExtBatch-001",
                entryDate: "2023-09-15",
                expiryDate: "2023-12-31",
                location: "Warehouse A",
                shelf: "Shelf 1",
                batchDescription: "Sample batch description",
                comments: "Comments for Batch 1",
                orderedBy: "John Doe",
                isForDistribution: true,
                destinationDistribution: "Customer X",
                project: "Project A",
                packageLeft: 100,
                totalAmountLeft: 100 * 1, // Calculate total amount left based on packageLeft
            },
            // Add more batches for Material 1 here
        ],
        batchesIndex:0,
        ChemicalFormula: `C${i}H${i}O${i}`,
        HazardCodes: `Hazard ${i}`,
        BoilingPoint: `${i * 10}°C`,
        MeltingPoint: `${i * 5}°C`,
        RiskCodes: `Risk ${i}`,
        StorageConditions: `Storage Condition ${i}`,
        ItemId: `${i * 1000}`,
        APICode1: `API Code 1 ${i}`,
        APICode2: `API Code 2 ${i}`,
        APICode3: `API Code 3 ${i}`,
        Comments: `Comments for Material ${i}`,
    });
}


// Function to populate the table with materials
// Function to populate the table with materials
function populateMaterialsTable() {
    const materialList = document.getElementById("material-list");

    materials.forEach((material) => {
        const row = document.createElement("tr");

        // Exclude the 'batches' property when populating the table
        const materialWithoutBatches = { ...material };
        delete materialWithoutBatches.batches;
        delete materialWithoutBatches.batchesIndex;

        Object.values(materialWithoutBatches).forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.cursor = 'pointer'
            })
        });
        materialList.appendChild(row);
    });
}

// Function to filter the table based on user input
function filterTable() {
    const filterMaterialName = document.getElementById("filterMaterialName").value.toUpperCase();
    const filterCasNumber = document.getElementById("filterCasNumber").value.toUpperCase();
    const filterIupacName = document.getElementById("filterIupacName").value.toUpperCase();
    const filterChemicalFormula = document.getElementById("filterChemicalFormula").value.toUpperCase();
    const filterHazardCodes = document.getElementById("filterHazardCodes").value.toUpperCase();
    const filterBoilingPoint = document.getElementById("filterBoilingPoint").value.toUpperCase();
    const filterMeltingPoint = document.getElementById("filterMeltingPoint").value.toUpperCase();
    const filterRiskCodes = document.getElementById("filterRiskCodes").value.toUpperCase();
    const filterStorageConditions = document.getElementById("filterStorageConditions").value.toUpperCase();
    const filterItemID = document.getElementById("filterItemID").value.toUpperCase();
    const filterAPICode1 = document.getElementById("filterAPICode1").value.toUpperCase();
    const filterAPICode2 = document.getElementById("filterAPICode2").value.toUpperCase();
    const filterAPICode3 = document.getElementById("filterAPICode3").value.toUpperCase();
    const filterComments = document.getElementById("filterComments").value.toUpperCase();
    


    const materialList = document.getElementById("material-list");
    const rows = materialList.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the table header row
        const materialNameCell = rows[i].getElementsByTagName("td")[0];
        const casNumberCell = rows[i].getElementsByTagName("td")[1];
        const iupacNameCell = rows[i].getElementsByTagName("td")[2];
        const ChemicalFormulaCell = rows[i].getElementsByTagName("td")[3];
        const HazardCodesCell = rows[i].getElementsByTagName("td")[4];
        const BoilingPointCell = rows[i].getElementsByTagName("td")[5];
        const MeltingPointCell = rows[i].getElementsByTagName("td")[6];
        const RiskCodesCell = rows[i].getElementsByTagName("td")[7];
        const StorageConditionsCell = rows[i].getElementsByTagName("td")[8];
        const ItemIDCell = rows[i].getElementsByTagName("td")[9];
        const APICode1Cell = rows[i].getElementsByTagName("td")[10];
        const APICode2Cell = rows[i].getElementsByTagName("td")[11];
        const APICode3Cell = rows[i].getElementsByTagName("td")[12];
        const CommentsCell = rows[i].getElementsByTagName("td")[13];
       

        const materialNameText = materialNameCell.textContent || materialNameCell.innerText;
        const casNumberText = casNumberCell.textContent || casNumberCell.innerText;
        const iupacNameText = iupacNameCell.textContent || iupacNameCell.innerText;
        const ChemicalFormulaText = ChemicalFormulaCell.textContent || ChemicalFormulaCell.innerText;
        const HazardCodesText = HazardCodesCell.textContent || HazardCodesCell.innerText;
        const BoilingPointText = BoilingPointCell.textContent || BoilingPointCell.innerText;
        const MeltingPointText = MeltingPointCell.textContent || MeltingPointCell.innerText;
        const RiskCodesText = RiskCodesCell.textContent || RiskCodesCell.innerText;
        const storageConditionsText = StorageConditionsCell.textContent || StorageConditionsCell.innerText;
        const ItemIDText = ItemIDCell.textContent || ItemIDCell.innerText;
        const APICode1Text = APICode1Cell.textContent || APICode1Cell.innerText;
        const APICode2Text = APICode2Cell.textContent || APICode2Cell.innerText;
        const CAPICode3Text = APICode3Cell.textContent || APICode3Cell.innerText;
        const CommentsText = CommentsCell.textContent || CommentsCell.innerText;
        

        if (
            materialNameText.toUpperCase().indexOf(filterMaterialName) > -1 &&
            casNumberText.toUpperCase().indexOf(filterCasNumber) > -1 &&
            iupacNameText.toUpperCase().indexOf(filterIupacName) > -1&&
            ChemicalFormulaText.toUpperCase().indexOf(filterChemicalFormula) > -1&&
            HazardCodesText.toUpperCase().indexOf(filterHazardCodes) > -1&&
            BoilingPointText.toUpperCase().indexOf(filterBoilingPoint) > -1&&
            MeltingPointText.toUpperCase().indexOf(filterMeltingPoint) > -1&&
            RiskCodesText.toUpperCase().indexOf(filterRiskCodes) > -1&&
            storageConditionsText.toUpperCase().indexOf(filterStorageConditions) > -1&&
            ItemIDText.toUpperCase().indexOf(filterItemID) > -1&&
            APICode1Text.toUpperCase().indexOf(filterAPICode1) > -1&&
            APICode2Text.toUpperCase().indexOf(filterAPICode2) > -1&&
            CAPICode3Text.toUpperCase().indexOf(filterAPICode3) > -1&&
            CommentsText.toUpperCase().indexOf(filterComments) > -1
           

        ) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Add event listeners to input fields for filtering
document.getElementById("filterMaterialName").addEventListener("input", filterTable);
document.getElementById("filterCasNumber").addEventListener("input", filterTable);
document.getElementById("filterIupacName").addEventListener("input", filterTable);
document.getElementById("filterChemicalFormula").addEventListener("input", filterTable);
document.getElementById("filterHazardCodes").addEventListener("input", filterTable);
document.getElementById("filterBoilingPoint").addEventListener("input", filterTable);
document.getElementById("filterMeltingPoint").addEventListener("input", filterTable);
document.getElementById("filterRiskCodes").addEventListener("input", filterTable);
document.getElementById("filterStorageConditions").addEventListener("input", filterTable);
document.getElementById("filterItemID").addEventListener("input", filterTable);
document.getElementById("filterAPICode1").addEventListener("input", filterTable);
document.getElementById("filterAPICode2").addEventListener("input", filterTable);
document.getElementById("filterAPICode3").addEventListener("input", filterTable);
document.getElementById("filterComments").addEventListener("input", filterTable);


function CloseMaterialDetails(){
    const materialDetails = document.getElementById("material-details");
    materialDetails.style.display='none'
    const mainTable = document.getElementById('materials');
    mainTable.style.display='block';
    batchItem.style.display='none';
}


function openMaterialDetails(material) {
    currentMaterial=material;
    const batchID = document.getElementById('batches-batchID');
    const materialDetails = document.getElementById("material-details");
    const materialPropertiesTab = document.getElementById("material-properties");
   // const batchesTab = document.getElementById("batches");
    const batchesTable = document.getElementById("batches-table").getElementsByTagName('tbody')[0];
    const mainTable = document.getElementById('materials');
    mainTable.style.display='none';
    document.getElementById("batches-table").style.display='table';
    batchID.innerHTML='Batches';
    
    // Populate Material Properties Tab (for the selected material)
    materialPropertiesTab.innerHTML = `
        <h3>Material Name: ${material.materialName}</h3>
        <p>CAS Number: ${material.CasNumber}</p>
        <p>IUPAC Name: ${material.IupacName}</p>
        <!-- Add other material properties here -->
    `;



    // Populate Batches Tab (for the selected material)
    batchesTable.innerHTML = ""; // Clear previous batch data
document.getElementById('batches-materialName').innerHTML=material.materialName;
    

    // Loop through and display each batch in the table
    material.batches.forEach((batch) => {
      
        const newRow = batchesTable.insertRow();
        newRow.addEventListener('click',()=>{
            EnterBatch(batch);
        })

        newRow.addEventListener('mouseover', () => {
            newRow.style.cursor = 'pointer'
        })
        newRow.innerHTML = `
            <td>${batch.batchNumber}</td>
            <td>${batch.amount}</td>
            <td>${batch.package}</td>
            <td>${batch.totalAmount}</td>
            <td>${batch.suplayer}</td>
            <td>${batch.externalBatchNumber}</td>
          
            <td>${batch.entryDate}</td>
            <td>${batch.expiryDate}</td>
            <td>${batch.location}</td>
            <td>${batch.shelf}</td>
            <td>${batch.batchDescription}</td>
            <td>${batch.comments}</td>
            <td>${batch.orderedBy}</td>
            <td>${batch.isForDistribution}</td>
            <td>${batch.destinationDistribution}</td>
            <td>${batch.project}</td>
            <td>${batch.packageLeft}</td>
            <td>${batch.totalAmountLeft}</td>
            <!-- Add more batch properties here -->
        `;
    });

    // Show the material details and switch to the Batches tab
    materialDetails.style.display = "block";
    openTab(event, 'batches');
}



// Function to switch between tabs
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Add event listeners to each cell for opening material details
document.getElementById("material-list").addEventListener("click", (event) => {
    const targetCell = event.target.closest("td");
    if (targetCell) {
        const rowIndex = targetCell.parentElement.rowIndex - 1; // Adjust for table header
        const selectedMaterial = materials[rowIndex-1];
        if (selectedMaterial) {
            openMaterialDetails(selectedMaterial);
        }
    }
});

// Call the function to populate the table on page load
window.addEventListener("load", populateMaterialsTable);


