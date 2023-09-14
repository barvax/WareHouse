// Sample materials data (replace with your own data)
const materials = [
    {
        materialName: "Material 1",
        CasNumber: "123-45-6",
        IupacName: "IUPAC Name 1",
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
function populateMaterialsTable() {
    const materialList = document.getElementById("material-list");

    materials.forEach((material) => {
        const row = document.createElement("tr");
        Object.values(material).forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
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

    for (let i = 0; i < rows.length; i++) { // Start from 1 to skip the table header row
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


// Add event listeners for other columns' input fields as needed

// Call the function to populate the table on page load
window.addEventListener("load", populateMaterialsTable);
