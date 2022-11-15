const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
const git = gitExtension.getAPI(1);

const ceviche = ['Pescado','Mariscos','Cebolla'];
ceviche.splice(1,0,'liomn');
console.log(ceviche);

let test = true;
console.log(test);