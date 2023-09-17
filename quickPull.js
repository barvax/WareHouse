const mainTable = document.getElementById('materials');
const quickPull = document.getElementById('quickPull');
const requests = document.getElementById('requests');
const tabs = [mainTable,quickPull,requests]

function openNavTab(myTab){
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display='none';
    }
    myTab.style.display='block';
}