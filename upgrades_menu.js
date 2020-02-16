let requiredDNA = [], nextUpgradeId = [0, 0, 0], upgrades = []; 
requiredDNA[0] = [10, 20, 30, 40]; requiredDNA[1] = [10, 20, 30, 40]; requiredDNA[2] = [10, 20, 30, 40];
upgrades[0] = [5, 10, 10, 10];
let table = document.getElementById('table'), upInfBtn = document.getElementById('upInfBtn'), upSevBtn = document.getElementById('upSevBtn'), upLetBtn = document.getElementById('upLetBtn');
function toggleUpgradesMenu(){
    if (document.getElementById('menu').style.display === 'none') {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('canvases').style.display = 'none';
        document.getElementById('menuButton').innerHTML = 'close';
        isPaused = true;
        updateTable();
    } else {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvases').style.display = 'block';
        document.getElementById('menuButton').innerHTML = 'Upgrades';
        isPaused = false;
    }
};
function updateTable() {
    upInfBtn.innerText = 'Upgrade Infectivity: ' + requiredDNA[0][nextUpgradeId[0]] + " DNA";
    upSevBtn.innerText = 'Upgrade Severity: ' + requiredDNA[1][nextUpgradeId[1]] + " DNA";
    upLetBtn.innerText = 'Upgrade Lethality: ' + requiredDNA[2][nextUpgradeId[2]] + " DNA";
    table.rows[1].cells[0].innerHTML = 'Infectivity: ' + testVirus.infectivity;
    table.rows[1].cells[1].innerHTML = 'Severity: ' + testVirus.severity;
    table.rows[1].cells[2].innerHTML = 'Lethality: ' + testVirus.lethality;
}
function upgradeVirus(arg) {
    if (testVirus.DNA >= requiredDNA[arg][nextUpgradeId[arg]]) {
        if (arg == 0) {
            testVirus.infectivity += upgrades[arg][nextUpgradeId[arg]];
        }
        if (arg == 1) {
            testVirus.severity += upgrades[arg][nextUpgradeId[arg]];
        }
        if (arg == 2) {
            testVirus.lethality += upgrades[arg][nextUpgradeId[arg]];
        }
        testVirus.DNA -= requiredDNA[arg][nextUpgradeId[arg]];
        nextUpgradeId[arg]++;
        updateTable();
    }
};