// script.js
const equipments = [
    { name: "1 Cx Ativa [Datrel] 250wrms (Bluetooth)", price: 150 },
    { name: "1 Cx Passiva [Datrel] 250wrms", price: 75 },
    { name: "1 Cx Sub Grave L", price: 150 },
    { name: "1 Cx Sub Grave R", price: 150 },
    { name: "1 Cx 12 Polegadas L + Corneta", price: 150 },
    { name: "1 Cx 12 Polegadas R + Corneta", price: 150 },
    { name: "1 Mesa de Som 6 Canais", price: 100 },
    { name: "1 Microfone sem fio (Shure)", price: 50 },

    // Adicione mais equipamentos conforme necessário
];

const equipmentsSection = document.getElementById('equipments');
const totalSection = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');

let selectedEquipments = [];

function renderEquipments() {
    equipmentsSection.innerHTML = '';
    equipments.forEach(equipment => {
        const equipmentDiv = document.createElement('div'); // Criar uma div para o conjunto de elementos
        equipmentDiv.classList.add('equipment-item'); // Adicionando uma classe à div para estilização opcional

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = equipment.name;
        checkbox.value = equipment.price;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                selectedEquipments.push(equipment);
            } else {
                selectedEquipments = selectedEquipments.filter(item => item.name !== equipment.name);
            }
            renderTotal();
        });

        const label = document.createElement('label');
        label.htmlFor = equipment.name;
        label.textContent = `${equipment.name} - R$ ${equipment.price.toFixed(2).replace('.', ',')}`; // Formatando o preço com vírgula

        const br = document.createElement('br');

        equipmentDiv.appendChild(checkbox); // Adicionando checkbox à div
        equipmentDiv.appendChild(label); // Adicionando label à div
        equipmentDiv.appendChild(br); // Adicionando quebra de linha à div

        equipmentsSection.appendChild(equipmentDiv); // Adicionando a div de equipamento à seção de equipamentos
    });
}

function renderTotal() {
    const total = selectedEquipments.reduce((acc, curr) => acc + curr.price, 0);
    totalSection.textContent = `Total: R$ ${total.toFixed(2)}/dia`;
}

checkoutButton.addEventListener('click', () => {
    const whatsappURL = `https://wa.me/5561982902177?text=Quero alugar os seguintes equipamentos:%0A${selectedEquipments.map(item => `${item.name} - R$ ${item.price.toFixed(2)}`).join('%0A')}`;
    window.location.href = whatsappURL;
});

renderEquipments();
