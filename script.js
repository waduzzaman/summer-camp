// Array of camper objects
const campers = [
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
    },
    {
      "id": 5,
      "name": "Sophie Davis",
      "dob": "2016-02-19",
      "contact": {
        "phone": "613-555-0505",
        "email": "sophie.davis@example.com"
      },
      "enrolled_camps": [
        {
          "camp_id": 104,
          "camp_name": "Music Camp",
          "enrollment_date": "2024-06-10"
        }
      ]
    },
    {
      "id": 6,
      "name": "Liam Garcia",
      "dob": "2013-12-24",
      "contact": {
        "phone": "613-555-0606",
        "email": "liam.garcia@example.com"
      },
      "enrolled_camps": [
        {
          "camp_id": 105,
          "camp_name": "Sports Camp",
          "enrollment_date": "2024-06-25"
        }
      ]
    },
    {
      "id": 7,
      "name": "Mia Martin",
      "dob": "2015-07-30",
      "contact": {
        "phone": "613-555-0707",
        "email": "mia.martin@example.com"
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
      "id": 8,
      "name": "Noah Thompson",
      "dob": "2014-10-05",
      "contact": {
        "phone": "613-555-0808",
        "email": "noah.thompson@example.com"
      },
      "enrolled_camps": [
        {
          "camp_id": 106,
          "camp_name": "Coding Camp",
          "enrollment_date": "2024-06-30"
        }
      ]
    },
    {
      "id": 9,
      "name": "Olivia White",
      "dob": "2016-06-12",
      "contact": {
        "phone": "613-555-0909",
        "email": "olivia.white@example.com"
      },
      "enrolled_camps": [
        {
          "camp_id": 102,
          "camp_name": "Science Explorers",
          "enrollment_date": "2024-06-15"
        }
      ]
    },
    {
      "id": 10,
      "name": "Ethan Harris",
      "dob": "2013-03-22",
      "contact": {
        "phone": "613-555-1010",
        "email": "ethan.harris@example.com"
      },
      "enrolled_camps": [
        {
          "camp_id": 105,
          "camp_name": "Sports Camp",
          "enrollment_date": "2024-06-25"
        }
      ]
    }
  ];
  
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

  function hideCampers() {
    const container = document.getElementById('campersContainer');
    container.innerHTML = ''; // Clear the container to hide campers
  }
  
  // Add event listener to the buttons
  document.getElementById('showCampersBtn').addEventListener('click', displayCampers);
  document.getElementById('hideCampersBtn').addEventListener('click', hideCampers);
  