// Simulating the campers.json content as a string
const campersJSON = `[
  {
    "id": 1,
    "name": "Alice Johnson",
    "dob": "2016-04-01",
    "contact": {
      "phone": "613-555-0101",
      "email": "alice.johnson@example.com"
    },
    "enrolled_camps": [
      {
        "camp_id": 101,
        "camp_name": "Arts & Crafts",
        "enrollment_date": "2024-06-01"
      },
      {
        "camp_id": 102,
        "camp_name": "Science Explorers",
        "enrollment_date": "2024-06-15"
      }
    ]
  },
  {
    "id": 2,
    "name": "Tom Smith",
    "dob": "2014-05-21",
    "contact": {
      "phone": "613-555-0202",
      "email": "tom.smith@example.com"
    },
    "enrolled_camps": [
      {
        "camp_id": 101,
        "camp_name": "Arts & Crafts",
        "enrollment_date": "2024-06-01"
      }
    ]
  },
  {
    "id": 3,
    "name": "Emma Brown",
    "dob": "2017-09-15",
    "contact": {
      "phone": "613-555-0303",
      "email": "emma.brown@example.com"
    },
    "enrolled_camps": [
      {
        "camp_id": 103,
        "camp_name": "Outdoor Adventures",
        "enrollment_date": "2024-06-20"
      }
    ]
  },
  {
    "id": 4,
    "name": "Jake Wilson",
    "dob": "2015-11-11",
    "contact": {
      "phone": "613-555-0404",
      "email": "jake.wilson@example.com"
    },
    "enrolled_camps": [
      {
        "camp_id": 102,
        "camp_name": "Science Explorers",
        "enrollment_date": "2024-06-15"
      }
    ]
  }
]`;

// Parse the campers JSON string to a JavaScript object
const campers = JSON.parse(campersJSON);

// Function to display campers on the page
function displayCampers() {
const container = document.getElementById('campersContainer');

// Clear the container
container.innerHTML = '';

// Iterate over the campers array and create HTML elements for each camper
campers.forEach(camper => {
  const camperDiv = document.createElement('div');
  camperDiv.classList.add('camper');

  // Add camper details
  camperDiv.innerHTML = `
    <h3>Name: ${camper.name}</h3>
    <p>Date of Birth: ${camper.dob}</p>
    <p>Phone: ${camper.contact.phone}</p>
    <p>Email: ${camper.contact.email}</p>
    <h4>Enrolled Camps:</h4>
    <ul>
      ${camper.enrolled_camps.map(camp => `
        <li class="camp">
          ${camp.camp_name} (Enrolled on: ${camp.enrollment_date})
        </li>
      `).join('')}
    </ul>
  `;

  // Append camperDiv to the container
  container.appendChild(camperDiv);
});
}

// Function to hide campers by clearing the container
function hideCampers() {
const container = document.getElementById('campersContainer');
container.innerHTML = ''; // Clear the container to hide campers
}

// Add event listeners to the buttons
document.getElementById('showCampersBtn').addEventListener('click', displayCampers);
document.getElementById('hideCampersBtn').addEventListener('click', hideCampers);




// Function to fetch and display campers data

// async function fetchCampers() {
//   try {
//     const response = await fetch('./campers.json'); // Fetch the JSON file
//     const campers = await response.json(); // Parse the JSON data
//     displayCampers(campers); // Call the display function with campers data
//   } catch (error) {
//     console.error('Error loading campers data:', error);
//   }
// }

// // Function to display campers on the page
// function displayCampers(campers) {
//   const container = document.getElementById('campersContainer');

//   // Clear the container
//   container.innerHTML = '';

//   // Iterate over the campers array and create HTML elements for each camper
//   campers.forEach(camper => {
//     const camperDiv = document.createElement('div');
//     camperDiv.classList.add('camper');

//     // Add camper details
//     camperDiv.innerHTML = `
//       <h3>Name: ${camper.name}</h3>
//       <p>Date of Birth: ${camper.dob}</p>
//       <p>Phone: ${camper.contact.phone}</p>
//       <p>Email: ${camper.contact.email}</p>
//       <h4>Enrolled Camps:</h4>
//       <ul>
//         ${camper.enrolled_camps.map(camp => `
//           <li class="camp">
//             ${camp.camp_name} (Enrolled on: ${camp.enrollment_date})
//           </li>
//         `).join('')}
//       </ul>
//     `;

//     // Append camperDiv to the container
//     container.appendChild(camperDiv);
//   });
// }

// function hideCampers() {
//   const container = document.getElementById('campersContainer');
//   container.innerHTML = ''; // Clear the container to hide campers
// }

// // Add event listener to the buttons
// document.getElementById('showCampersBtn').addEventListener('click', fetchCampers);
// document.getElementById('hideCampersBtn').addEventListener('click', hideCampers);

