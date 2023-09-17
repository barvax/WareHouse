let batchesTable = document.getElementById("batches-table")
let batchItem = document.getElementById('batchItem');
const batchID = document.getElementById('batches-batchID');
const createBatch = document.getElementById('createBatch');
let currentMaterial ='';

function AddBatch(){

    
    batchID.innerHTML = "Create New Batch";
    batchesTable.style.display = 'none';
    batchItem.style.display='none';
    createBatch.style.display='block';
   
    let createBatchForm = document.getElementById('createBatchForm');
    createBatchForm.innerHTML=`
    <div class="materialDetailsForm">
        <div class="materialDetailsFormdiv1"> 
        <label for="amount">Package Amount:</label>
        <input type="text" id="amountFormInput" name="amount" value=""><br><br>
    
        <label for="package">Packages:</label>
        <input type="text" id="packageFormInput" name="package" value=""><br><br>
    
        <label for="totalAmount">Total Amount:</label>
        <label type="text" id="totalAmountFormInput" name="totalAmount" value=""></label><br><br>
    
        <label for="supplier">Supplier:</label>
        <input type="text" id="supplierFormInput" name="supplier" value=""><br><br>
    
        <label for="batchNumber">Batch Number:</label>
        <label type="text" id="batchNumberFormInput" name="batchNumber" value="">Batch ${currentMaterial.batchesIndex}</label><br><br>
    
        <label for="externalBatchNumber">External Batch Number:</label>
        <input type="text" id="externalBatchNumberFormInput" name="externalBatchNumber" value=""><br><br>
        </div>
    
    
    
        <div class="materialDetailsFormdiv2"> 
          <label for="entryDate">Entry Date:</label>
                                <input type="date" id="entryDateFormInput" name="entryDate" value=""><br><br>
                        
                                <label for="expiryDate">Expiry Date:</label>
                                <input type="date" id="expiryDateFormInput" name="expiryDate" value=""><br><br>
                        
                                <label for="location">Location:</label>
                                <input type="text" id="locationFormInput" name="location" value=""><br><br>
                        
                                <label for="shelf">Shelf:</label>
                                <input type="text" id="shelfFormInput" name="shelf" value=""><br><br>
                        
                                <label for="batchDescription">Batch Description:</label>
                                <input type="text" id="batchDescriptionFormInput" name="" value=""><br><br>
                        
                                <label for="comments">Comments:</label>
                                <input type="text" id="commentsFormInput" name="comments" value=""><br><br>
                        
                                <label for="orderedBy">Ordered By:</label>
                                <input type="text" id="orderedByFormInput" name="orderedBy" value=""><br><br>
        </div>
    
     
        <div class="materialDetailsFormdiv3">
        <label for="isForDistribution">Is For Distribution:</label>
        <input type="checkbox" id="isForDistributionFormInput" name="isForDistribution" value=""><br><br>
    
        <label for="destinationDistribution">Destination Distribution:</label>
        <input type="text" id="destinationDistributionFormInput" name="destinationDistribution" value=""><br><br>
    
        <label for="project">Project:</label>
        <input type="text" id="projectFormInput" name="project" value=""><br><br>
    
     
        </div>
        </div>
    `

}
function CreateBatchFrom(){
    let amountFormInput = document.getElementById('amountFormInput');
    let packageFormInput = document.getElementById('packageFormInput');
    let totalAmountFormInput = document.getElementById('totalAmountFormInput');
    let supplierFormInput = document.getElementById('supplierFormInput');
    let batchNumberFormInput = document.getElementById('batchNumberFormInput');
    let externalBatchNumberFormInput = document.getElementById('externalBatchNumberFormInput');
    let entryDateFormInput = document.getElementById('entryDateFormInput');
    let expiryDateFormInput = document.getElementById('expiryDateFormInput');
    let locationFormInput = document.getElementById('locationFormInput');
    let shelfFormInput = document.getElementById('shelfFormInput');
    let batchDescriptionFormInput = document.getElementById('batchDescriptionFormInput');
    let commentsFormInput = document.getElementById('commentsFormInput');
    let orderedByFormInput = document.getElementById('orderedByFormInput');
    let isForDistributionFormInput = document.getElementById('isForDistributionFormInput');
    let destinationDistributionFormInput = document.getElementById('destinationDistributionFormInput');
    let projectFormInput = document.getElementById('projectFormInput');


for (let index = 0; index < materials.length; index++) {
  
    if(materials[index]==currentMaterial){
        console.log(currentMaterial);
        materials[index].batches.push(    
            {
                amount: amountFormInput.value,
                package: packageFormInput.value,
                totalAmount: amountFormInput.value * packageFormInput.value, // Calculate total amount based on amount and package
                suplayer: supplierFormInput.value,
                batchNumber: batchNumberFormInput.innerHTML,
                externalBatchNumber: externalBatchNumberFormInput.value,
                entryDate: entryDateFormInput.value,
                expiryDate: expiryDateFormInput.value,
                location: locationFormInput.value,
                shelf: shelfFormInput.value,
                batchDescription: batchDescriptionFormInput.value,
                comments: commentsFormInput.value,
                orderedBy: orderedByFormInput.value,
                isForDistribution: isForDistributionFormInput.checked,
                destinationDistribution: destinationDistributionFormInput.value,
                project: projectFormInput.value,
                packageLeft: packageFormInput.value,
                totalAmountLeft: amountFormInput.value * packageFormInput.value, // Calculate total amount left based on packageLeft
            },
            // Add more batches for Material 1 here
        )
        break;
    }
    
}
currentMaterial.batchesIndex++;
ReturnToBatchesTable();
openMaterialDetails(currentMaterial);
}
function ReturnToBatchesTable(){
    batchesTable.style.display = 'table'
    batchItem.style.display='none';
    batchID.innerHTML = "";
    createBatch.style.display='none';
}
function EnterBatch(batch){
   
    createBatch.style.display='none';
    const batchID = document.getElementById('batches-batchID');
    batchID.innerHTML = batch.batchNumber;
    batchesTable.style.display = 'none';
    batchItem.style.display='block';
    showMaterialBatchForm(batch);
}

function showMaterialBatchForm(batch){
let materialDetailsForm = document.getElementById('material-details-form');

materialDetailsForm.innerHTML=
`
<div class="materialDetailsForm">
    <div class="materialDetailsFormdiv1"> 
    <label for="amount">Package Amount:</label>
    <label type="text" id="amount" name="amount" value="">${batch.amount}</label><br><br>

    <label for="package">Packages:</label>
    <label type="text" id="package" name="package" value="">${batch.package}</label><br><br>

    <label for="totalAmount">Total Amount:</label>
    <label type="text" id="totalAmount" name="totalAmount" value="300">${batch.totalAmount}</label><br><br>

    <label for="supplier">Supplier:</label>
    <label type="text" id="supplier" name="supplier" value="">${batch.suplayer}</label><br><br>

    <label for="batchNumber">Batch Number:</label>
    <label type="text" id="batchNumber" name="batchNumber" value="">${batch.batchNumber}</label><br><br>

    <label for="externalBatchNumber">External Batch Number:</label>
    <label type="text" id="externalBatchNumber" name="externalBatchNumber" value="">${batch.externalBatchNumber}</label><br><br>
    </div>



    <div class="materialDetailsFormdiv2"> 
      <label for="entryDate">Entry Date:</label>
        <label type="text" id="entryDate" name="entryDate" value="">${batch.entryDate}</label><br><br>
                    
        <label for="expiryDate">Expiry Date:</label>
        <label type="text" id="expiryDate" name="expiryDate" value="2023-12-31">${batch.expiryDate}</label><br><br>

        <label for="location">Location:</label>
        <label type="text" id="location" name="location" value="Warehouse A">${batch.location}</label><br><br>
                    
        <label for="shelf">Shelf:</label>
        <label type="text" id="shelf" name="shelf" value="Shelf 1">${batch.shelf}</label><br><br>
                    
        <label for="batchDescription">Batch Description:</label>
        <label type="text" id="batchDescription" name="batchDescription" value="Sample batch description">${batch.batchDescription}</label><br><br>

        <label for="comments">Comments:</label>
        <label type="text" id="comments" name="comments" value="Comments for Batch 22">${batch.comments}</label><br><br>

        <label for="orderedBy">Ordered By:</label>
        <label type="text" id="orderedBy" name="orderedBy" value="John Doe">${batch.orderedBy}</label><br><br>
</div>

 
    <div class="materialDetailsFormdiv3">
    <label for="isForDistribution">Is For Distribution:</label>
    <label type="text" id="isForDistribution" name="isForDistribution" value="true">${batch.isForDistribution}</label><br><br>

    <label for="destinationDistribution">Destination Distribution:</label>
    <label type="text" id="destinationDistribution" name="destinationDistribution" value="Customer X">${batch.destinationDistribution}</label><br><br>

    <label for="project">Project:</label>
    <label type="text" id="project" name="project" value="Project ron">${batch.project}</label><br><br>

    <label for="packageLeft">Package Left:</label>
    <label type="text" id="packageLeft" name="packageLeft" value="100">${batch.packageLeft}</label><br><br>

    <label for="totalAmountLeft">Total Amount Left:</label>
    <label type="text" id="totalAmountLeft" name="totalAmountLeft" value="100">${batch.totalAmountLeft}</label><br><br>
    </div>
    </div>
`
    

}