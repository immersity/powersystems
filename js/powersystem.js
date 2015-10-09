/**
 * Created by iabarca on 09-10-15.
 */

var nodes = new vis.DataSet([ { id: 'B_M_Isla', label: 'B_M_Isla' },
    { id: 'OJOSDEAGUA', label: 'OJOSDEAGUA' },
    { id: 'B_C_Isla', label: 'B_C_Isla' },
    { id: 'ISLA', label: 'ISLA' },
    { id: 'CURILLINQUE', label: 'CURILLINQUE' },
    { id: 'LOMAALTA', label: 'LOMAALTA' },
    { id: 'B_Maule', label: 'B_Maule' },
    { id: 'SAN_CLEMENTE', label: 'SAN_CLEMENTE' },
    { id: 'Rio_Melado', label: 'Rio_Melado' },
    { id: 'R_Maitenes', label: 'R_Maitenes' },
    { id: 'C_Melado', label: 'C_Melado' },
    { id: 'MACHICURA', label: 'MACHICURA' },
    { id: 'ROBLERIA', label: 'ROBLERIA' },
    { id: 'R_Sur123_SCDZ', label: 'R_Sur123_SCDZ' },
    { id: 'SANIGNACIO', label: 'SANIGNACIO' },
    { id: 'R_Molino', label: 'R_Molino' },
    { id: 'ALTOPOLC', label: 'ALTOPOLC' },
    { id: 'BLANCO', label: 'BLANCO' },
    { id: 'ABANICO', label: 'ABANICO' },
    { id: 'CANACO', label: 'CANACO' },
    { id: 'ANTUCO', label: 'ANTUCO' },
    { id: 'CANCOLOR', label: 'CANCOLOR' },
    { id: 'CANECOL', label: 'CANECOL' },
    { id: 'LOSQUILOS', label: 'LOSQUILOS' },
    { id: 'CANCHAC', label: 'CANCHAC' },
    { id: 'CHACABUQUITO', label: 'CHACABUQUITO' },
    { id: 'PALMUCHO', label: 'PALMUCHO' },
    { id: 'LMAULE', label: 'LMAULE' },
    { id: 'MARIPOSAS', label: 'MARIPOSAS' },
    { id: 'CIPRESES', label: 'CIPRESES' },
    { id: 'LIRCAY', label: 'LIRCAY' },
    { id: 'PEHUENCHE', label: 'PEHUENCHE' },
    { id: 'PROVIDENCIA', label: 'PROVIDENCIA' },
    { id: 'COLBUN', label: 'COLBUN' },
    { id: 'ELTORO', label: 'ELTORO' },
    { id: 'RAPEL', label: 'RAPEL' },
    { id: 'CANUTILLAR', label: 'CANUTILLAR' },
    { id: 'RALCO', label: 'RALCO' },
    { id: 'PANGUE', label: 'PANGUE' },
    { id: 'R_Melado', label: 'R_Melado' },
    { id: 'HIERROS', label: 'HIERROS' },
    { id: 'B_Canelon', label: 'B_Canelon' },
    { id: 'B_Cmn_Tronco', label: 'B_Cmn_Tronco' },
    { id: 'B_Petril_Col', label: 'B_Petril_Col' },
    { id: 'B_Paso_Nevado', label: 'B_Paso_Nevado' },
    { id: 'CMN_A', label: 'CMN_A' },
    { id: 'CANRUCUE', label: 'CANRUCUE' },
    { id: 'CMN_B', label: 'CMN_B' },
    { id: 'CLAJRUCUE', label: 'CLAJRUCUE' },
    { id: 'CHIBURGO', label: 'CHIBURGO' },
    { id: 'RUCUE', label: 'RUCUE' },
    { id: 'R_Maule_sur', label: 'R_Maule_sur' },
    { id: 'QUILLECO', label: 'QUILLECO' },
    { id: 'TUCAPEL', label: 'TUCAPEL' },
    { id: 'EL_DIUTO', label: 'EL_DIUTO' },
    { id: 'CANHORN', label: 'CANHORN' },
    { id: 'AFL_CONFLUENCIA', label: 'AFL_CONFLUENCIA' },
    { id: 'HORNITOS', label: 'HORNITOS' },
    { id: 'AFL_HIGUERA', label: 'AFL_HIGUERA' },
    { id: 'JUNCAL', label: 'JUNCAL' },
    { id: 'AFL_CACH', label: 'AFL_CACH' },
    { id: 'CANBLANCO', label: 'CANBLANCO' } ]
);
var edges = new vis.DataSet([ { from: 'B_M_Isla', to: 'ISLA' },
  { from: 'B_M_Isla', to: 'B_Maule' },
  { from: 'OJOSDEAGUA', to: 'B_C_Isla' },
  { from: 'OJOSDEAGUA', to: 'B_C_Isla' },
  { from: 'B_C_Isla', to: 'ISLA' },
  { from: 'B_C_Isla', to: 'B_Maule' },
  { from: 'ISLA', to: 'CURILLINQUE' },
  { from: 'ISLA', to: 'B_Maule' },
  { from: 'CURILLINQUE', to: 'LOMAALTA' },
  { from: 'CURILLINQUE', to: 'B_Maule' },
  { from: 'LOMAALTA', to: 'B_Maule' },
  { from: 'LOMAALTA', to: 'B_Maule' },
  { from: 'B_Maule', to: 'PEHUENCHE' },
  { from: 'B_Maule', to: 'B_Cmn_Tronco' },
  { from: 'SAN_CLEMENTE', to: 'R_Maitenes' },
  { from: 'SAN_CLEMENTE', to: 'R_Maitenes' },
  { from: 'Rio_Melado', to: 'C_Melado' },
  { from: 'Rio_Melado', to: 'PEHUENCHE' },
  { from: 'C_Melado', to: 'ROBLERIA' },
  { from: 'C_Melado', to: 'HIERROS' },
  { from: 'MACHICURA', to: 'R_Sur123_SCDZ' },
  { from: 'MACHICURA', to: 'R_Sur123_SCDZ' },
  { from: 'ROBLERIA', to: 'R_Melado' },
  { from: 'ROBLERIA', to: 'R_Melado' },
  { from: 'R_Sur123_SCDZ', to: 'SANIGNACIO' },
  { from: 'R_Sur123_SCDZ', to: 'SANIGNACIO' },
  { from: 'SANIGNACIO', to: 'R_Molino' },
  { from: 'SANIGNACIO', to: 'R_Molino' },
  { from: 'BLANCO', to: 'CANACO' },
  { from: 'BLANCO', to: 'CANACO' },
  { from: 'ABANICO', to: 'ANTUCO' },
  { from: 'ABANICO', to: 'ANTUCO' },
  { from: 'CANACO', to: 'LOSQUILOS' },
  { from: 'CANACO', to: 'CANCHAC' },
  { from: 'ANTUCO', to: 'CLAJRUCUE' },
  { from: 'ANTUCO', to: 'CLAJRUCUE' },
  { from: 'CANCOLOR', to: 'LOSQUILOS' },
  { from: 'CANECOL', to: 'CANRUCUE' },
  { from: 'CANECOL', to: 'TUCAPEL' },
  { from: 'LOSQUILOS', to: 'CHACABUQUITO' },
  { from: 'CANCHAC', to: 'CHACABUQUITO' },
  { from: 'PALMUCHO', to: 'PANGUE' },
  { from: 'PALMUCHO', to: 'PANGUE' },
  { from: 'LMAULE', to: 'B_M_Isla' },
  { from: 'LMAULE', to: 'B_M_Isla' },
  { from: 'MARIPOSAS', to: 'CMN_A' },
  { from: 'MARIPOSAS', to: 'CMN_A' },
  { from: 'CIPRESES', to: 'B_C_Isla' },
  { from: 'CIPRESES', to: 'OJOSDEAGUA' },
  { from: 'LIRCAY', to: 'PROVIDENCIA' },
  { from: 'LIRCAY', to: 'PROVIDENCIA' },
  { from: 'PEHUENCHE', to: 'B_Canelon' },
  { from: 'PEHUENCHE', to: 'B_Cmn_Tronco' },
  { from: 'PROVIDENCIA', to: 'CMN_B' },
  { from: 'PROVIDENCIA', to: 'CMN_B' },
  { from: 'COLBUN', to: 'MACHICURA' },
  { from: 'ELTORO', to: 'ANTUCO' },
  { from: 'ELTORO', to: 'ABANICO' },
  { from: 'RALCO', to: 'PANGUE' },
  { from: 'RALCO', to: 'PALMUCHO' },
  { from: 'HIERROS', to: 'PEHUENCHE' },
  { from: 'B_Canelon', to: 'B_Petril_Col' },
  { from: 'B_Canelon', to: 'COLBUN' },
  { from: 'B_Cmn_Tronco', to: 'B_Paso_Nevado' },
  { from: 'B_Cmn_Tronco', to: 'B_Canelon' },
  { from: 'B_Petril_Col', to: 'LIRCAY' },
  { from: 'B_Petril_Col', to: 'SAN_CLEMENTE' },
  { from: 'B_Paso_Nevado', to: 'MARIPOSAS' },
  { from: 'B_Paso_Nevado', to: 'B_Petril_Col' },
  { from: 'CANRUCUE', to: 'RUCUE' },
  { from: 'CANRUCUE', to: 'TUCAPEL' },
  { from: 'CLAJRUCUE', to: 'RUCUE' },
  { from: 'CLAJRUCUE', to: 'TUCAPEL' },
  { from: 'CHIBURGO', to: 'R_Maule_sur' },
  { from: 'CHIBURGO', to: 'R_Maule_sur' },
  { from: 'RUCUE', to: 'QUILLECO' },
  { from: 'RUCUE', to: 'QUILLECO' },
  { from: 'QUILLECO', to: 'TUCAPEL' },
  { from: 'QUILLECO', to: 'TUCAPEL' },
  { from: 'TUCAPEL', to: 'EL_DIUTO' },
  { from: 'TUCAPEL', to: 'EL_DIUTO' },
  { from: 'CANHORN', to: 'HORNITOS' },
  { from: 'CANHORN', to: 'JUNCAL' },
  { from: 'HORNITOS', to: 'JUNCAL' },
  { from: 'HORNITOS', to: 'JUNCAL' },
  { from: 'JUNCAL', to: 'CANACO' },
  { from: 'JUNCAL', to: 'CANACO' },
  { from: 'CANBLANCO', to: 'BLANCO' },
  { from: 'CANBLANCO', to: 'CANACO' },
  { from: 'ELTORO', to: 'ABANICO' },
  { from: 'COLBUN', to: 'SAN_CLEMENTE' },
  { from: 'CIPRESES', to: 'OJOSDEAGUA' },
  { from: 'COLBUN', to: 'CHIBURGO' },
  { from: 'COLBUN', to: 'B_Petril_Col' } ]);

var container = document.getElementById('mynetwork');

var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  physics: {enabled: true},
  /*
  configure: {
    enabled: false,
    filter: 'physics',
    container: undefined,
    showButton: true
  },
  */
  manipulation: {
    addNode: function(nodeData,callback) {
      document.getElementById('operation').innerHTML = "Add Node";
      document.getElementById('node-id').value = nodeData.id;
      document.getElementById('node-label').value = nodeData.label;
      document.getElementById('saveButton').onclick = saveData.bind(this, nodeData, callback);
      document.getElementById('cancelButton').onclick = clearPopUp.bind();
      document.getElementById('network-popUp').style.display = 'block';
    },
    editNode: function (data, callback) {
      // filling in the popup DOM elements

      console.log(data);

      document.getElementById('operation').innerHTML = "Edit Node";
      document.getElementById('node-id').value = data.id;
      document.getElementById('node-label').value = data.label;
      document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
      document.getElementById('cancelButton').onclick = cancelEdit.bind(this,callback);
      document.getElementById('network-popUp').style.display = 'block';
    },
    addEdge: function (data, callback) {
      if (data.from == data.to) {
        var r = confirm("Do you want to connect the node to itself?");
        if (r == true) {
          callback(data);
        }
      }
      else {
        callback(data);
      }
    }
  },
  layout: {
    randomSeed: undefined,
    improvedLayout:true,
    hierarchical: false,
  },
  edges:{
    physics: true
  }
};

var network = new vis.Network(container, data, options);

function clearPopUp() {
  document.getElementById('saveButton').onclick = null;
  document.getElementById('cancelButton').onclick = null;
  document.getElementById('network-popUp').style.display = 'none';
}

function cancelEdit(callback) {
  clearPopUp();
  callback(null);
}

function saveData(data,callback) {
  data.id = document.getElementById('node-id').value;
  data.label = document.getElementById('node-label').value;
  data.informacion = 'Holaaa';
  clearPopUp();
  callback(data);
}

function changePhysicsStatus(){
  var dropdown = document.getElementById("physics");

  if(dropdown.value == 'enable'){
    options.physics.enabled = true;
  } else {
    options.physics.enabled = false;
  }

  network.setOptions(options);
}

function changeHierarchicalStatus(){
  var dropdown = document.getElementById("hierarchy");

  if(dropdown.value == 'enable'){
    options.layout.hierarchical = {
      enabled:true,
      levelSeparation: 150,
      direction: 'UD',   // UD, DU, LR, RL
      sortMethod: 'directed' // hubsize, directed
    }
  } else {
    options.layout.hierarchical = false;
  }

  network.setOptions(options);
}


