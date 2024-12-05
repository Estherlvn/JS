// 1. Ajout d’une todoCard

// Écouteur d'évènement pour appeler une fonction 'ajouter'
const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", addTask); // Ajouter une tâche au clic

// Fonction 'ajouter'
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");
const cardCount = document.querySelector("#cardCount");

function addTask() {
  const newTask = taskCard.cloneNode(true); // clone la carte de tâche
  const newDelBtn = newTask.querySelector(".delBtn");
  const newTextArea = newTask.querySelector(".task");

  newTextArea.value = "New Task"; // définit le texte de la nouvelle tâche à "New Task"

  newDelBtn.addEventListener("click", function () {
    deleteTask(newTask);
  });

  tasksContainer.appendChild(newTask); // ajoute une nouvelle task au container
  updateCount(); // met à jour le compteur de cartes
}

// 2. Suppression d'une todoCard

// écouteur d’évènement sur le bouton pour appeler une fonction 'suppression'
const delBtn = document.querySelector(".delBtn");
delBtn.addEventListener("click", function () {
  // supprime une carte au clic
  deleteTask(taskCard); // cible la bonne carte
  updateCount(); // met à jour le compteur de cartes
});

// Fonction 'suppression'
function deleteTask(task) {
  task.remove(); // retire la tâche
  updateCount(); // met à jour le compteur de cartes
}

/* 3. Ajouter écouteur d'évènement sur l'élément CLONE dans la fonction d'ajout
afin de faire fonctionner le bouton suppression sur les nouvelles cards : lignes 15 à 21*/

// 4. Fonction pour mettre à jour le compteur de cartes
function updateCount() {
  const numberOfTasks = tasksContainer.querySelectorAll(".todoCard").length;
  cardCount.textContent = `Number of tasks: ${numberOfTasks}`;
}

// Initialiser le compteur de cartes au chargement de la page
updateCount();
