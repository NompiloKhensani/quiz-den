const sections = [
  {
    "id": "geography",
    "name": "Geography",
    "emoji": "🌍",
    "questions": [
      {
        "question": "What is the capital of Brazil?",
        "answers": [
          {
            "text": "Brasília",
            "correct": true
          },
          {
            "text": "Rio de Janeiro",
            "correct": false
          },
          {
            "text": "São Paulo",
            "correct": false
          },
          {
            "text": "Salvador",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Mount Fuji is in which country?",
        "answers": [
          {
            "text": "Japan",
            "correct": true
          },
          {
            "text": "China",
            "correct": false
          },
          {
            "text": "South Korea",
            "correct": false
          },
          {
            "text": "Nepal",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which river flows through London?",
        "answers": [
          {
            "text": "The Thames",
            "correct": true
          },
          {
            "text": "The Seine",
            "correct": false
          },
          {
            "text": "The Rhine",
            "correct": false
          },
          {
            "text": "The Danube",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Great Barrier Reef is off the coast of which country?",
        "answers": [
          {
            "text": "Australia",
            "correct": true
          },
          {
            "text": "South Africa",
            "correct": false
          },
          {
            "text": "Brazil",
            "correct": false
          },
          {
            "text": "Mexico",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Ghana?",
        "answers": [
          {
            "text": "Accra",
            "correct": true
          },
          {
            "text": "Lagos",
            "correct": false
          },
          {
            "text": "Nairobi",
            "correct": false
          },
          {
            "text": "Dakar",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Istanbul is in which country?",
        "answers": [
          {
            "text": "Turkey",
            "correct": true
          },
          {
            "text": "Greece",
            "correct": false
          },
          {
            "text": "Egypt",
            "correct": false
          },
          {
            "text": "Italy",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which ocean lies between Africa and Australia?",
        "answers": [
          {
            "text": "The Indian Ocean",
            "correct": true
          },
          {
            "text": "The Atlantic Ocean",
            "correct": false
          },
          {
            "text": "The Pacific Ocean",
            "correct": false
          },
          {
            "text": "The Southern Ocean",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Morocco?",
        "answers": [
          {
            "text": "Rabat",
            "correct": true
          },
          {
            "text": "Casablanca",
            "correct": false
          },
          {
            "text": "Marrakech",
            "correct": false
          },
          {
            "text": "Tunis",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Victoria Falls is on which river?",
        "answers": [
          {
            "text": "The Zambezi",
            "correct": true
          },
          {
            "text": "The Nile",
            "correct": false
          },
          {
            "text": "The Orange",
            "correct": false
          },
          {
            "text": "The Congo",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Serengeti is mainly in which country?",
        "answers": [
          {
            "text": "Tanzania",
            "correct": true
          },
          {
            "text": "Kenya",
            "correct": false
          },
          {
            "text": "South Africa",
            "correct": false
          },
          {
            "text": "Botswana",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of New Zealand?",
        "answers": [
          {
            "text": "Wellington",
            "correct": true
          },
          {
            "text": "Auckland",
            "correct": false
          },
          {
            "text": "Christchurch",
            "correct": false
          },
          {
            "text": "Sydney",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Eswatini was formerly known as what?",
        "answers": [
          {
            "text": "Swaziland",
            "correct": true
          },
          {
            "text": "Basutoland",
            "correct": false
          },
          {
            "text": "Bechuanaland",
            "correct": false
          },
          {
            "text": "Rhodesia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Lake Victoria is shared by Kenya, Uganda and which country?",
        "answers": [
          {
            "text": "Tanzania",
            "correct": true
          },
          {
            "text": "Rwanda",
            "correct": false
          },
          {
            "text": "Ethiopia",
            "correct": false
          },
          {
            "text": "South Sudan",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Senegal?",
        "answers": [
          {
            "text": "Dakar",
            "correct": true
          },
          {
            "text": "Bamako",
            "correct": false
          },
          {
            "text": "Abidjan",
            "correct": false
          },
          {
            "text": "Conakry",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Suez Canal connects the Mediterranean Sea to which sea?",
        "answers": [
          {
            "text": "The Red Sea",
            "correct": true
          },
          {
            "text": "The Black Sea",
            "correct": false
          },
          {
            "text": "The Arabian Sea",
            "correct": false
          },
          {
            "text": "The Caspian Sea",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Greenland is an autonomous territory of which country?",
        "answers": [
          {
            "text": "Denmark",
            "correct": true
          },
          {
            "text": "Norway",
            "correct": false
          },
          {
            "text": "Canada",
            "correct": false
          },
          {
            "text": "Iceland",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of France?",
        "answers": [
          {
            "text": "Paris",
            "correct": true
          },
          {
            "text": "Madrid",
            "correct": false
          },
          {
            "text": "Rome",
            "correct": false
          },
          {
            "text": "Berlin",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Italy?",
        "answers": [
          {
            "text": "Rome",
            "correct": true
          },
          {
            "text": "Milan",
            "correct": false
          },
          {
            "text": "Venice",
            "correct": false
          },
          {
            "text": "Naples",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Egypt?",
        "answers": [
          {
            "text": "Cairo",
            "correct": true
          },
          {
            "text": "Alexandria",
            "correct": false
          },
          {
            "text": "Luxor",
            "correct": false
          },
          {
            "text": "Tunis",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which is the largest continent by area?",
        "answers": [
          {
            "text": "Asia",
            "correct": true
          },
          {
            "text": "Africa",
            "correct": false
          },
          {
            "text": "Europe",
            "correct": false
          },
          {
            "text": "North America",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which ocean is the largest?",
        "answers": [
          {
            "text": "The Pacific Ocean",
            "correct": true
          },
          {
            "text": "The Atlantic Ocean",
            "correct": false
          },
          {
            "text": "The Indian Ocean",
            "correct": false
          },
          {
            "text": "The Arctic Ocean",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Canada?",
        "answers": [
          {
            "text": "Ottawa",
            "correct": true
          },
          {
            "text": "Toronto",
            "correct": false
          },
          {
            "text": "Vancouver",
            "correct": false
          },
          {
            "text": "Montreal",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Australia?",
        "answers": [
          {
            "text": "Canberra",
            "correct": true
          },
          {
            "text": "Sydney",
            "correct": false
          },
          {
            "text": "Melbourne",
            "correct": false
          },
          {
            "text": "Perth",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Germany?",
        "answers": [
          {
            "text": "Berlin",
            "correct": true
          },
          {
            "text": "Munich",
            "correct": false
          },
          {
            "text": "Hamburg",
            "correct": false
          },
          {
            "text": "Frankfurt",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Spain?",
        "answers": [
          {
            "text": "Madrid",
            "correct": true
          },
          {
            "text": "Barcelona",
            "correct": false
          },
          {
            "text": "Seville",
            "correct": false
          },
          {
            "text": "Valencia",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Kenya?",
        "answers": [
          {
            "text": "Nairobi",
            "correct": true
          },
          {
            "text": "Mombasa",
            "correct": false
          },
          {
            "text": "Kisumu",
            "correct": false
          },
          {
            "text": "Kampala",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Nigeria?",
        "answers": [
          {
            "text": "Abuja",
            "correct": true
          },
          {
            "text": "Lagos",
            "correct": false
          },
          {
            "text": "Kano",
            "correct": false
          },
          {
            "text": "Accra",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Amazon rainforest is mostly in which country?",
        "answers": [
          {
            "text": "Brazil",
            "correct": true
          },
          {
            "text": "Peru",
            "correct": false
          },
          {
            "text": "Colombia",
            "correct": false
          },
          {
            "text": "Argentina",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which line divides Earth into the Northern and Southern Hemispheres?",
        "answers": [
          {
            "text": "The Equator",
            "correct": true
          },
          {
            "text": "The Tropic of Cancer",
            "correct": false
          },
          {
            "text": "The Prime Meridian",
            "correct": false
          },
          {
            "text": "The Arctic Circle",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Kazakhstan?",
        "answers": [
          {
            "text": "Astana",
            "correct": true
          },
          {
            "text": "Almaty",
            "correct": false
          },
          {
            "text": "Bishkek",
            "correct": false
          },
          {
            "text": "Tashkent",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Mongolia?",
        "answers": [
          {
            "text": "Ulaanbaatar",
            "correct": true
          },
          {
            "text": "Astana",
            "correct": false
          },
          {
            "text": "Beijing",
            "correct": false
          },
          {
            "text": "Kathmandu",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Bhutan?",
        "answers": [
          {
            "text": "Thimphu",
            "correct": true
          },
          {
            "text": "Kathmandu",
            "correct": false
          },
          {
            "text": "Dhaka",
            "correct": false
          },
          {
            "text": "Colombo",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Madagascar?",
        "answers": [
          {
            "text": "Antananarivo",
            "correct": true
          },
          {
            "text": "Maputo",
            "correct": false
          },
          {
            "text": "Nairobi",
            "correct": false
          },
          {
            "text": "Port Louis",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Mount Kilimanjaro is in which country?",
        "answers": [
          {
            "text": "Tanzania",
            "correct": true
          },
          {
            "text": "Kenya",
            "correct": false
          },
          {
            "text": "Uganda",
            "correct": false
          },
          {
            "text": "Ethiopia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Danube River flows into which sea?",
        "answers": [
          {
            "text": "The Black Sea",
            "correct": true
          },
          {
            "text": "The Mediterranean Sea",
            "correct": false
          },
          {
            "text": "The Baltic Sea",
            "correct": false
          },
          {
            "text": "The Caspian Sea",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Strait of Gibraltar separates Spain from which country?",
        "answers": [
          {
            "text": "Morocco",
            "correct": true
          },
          {
            "text": "Portugal",
            "correct": false
          },
          {
            "text": "Algeria",
            "correct": false
          },
          {
            "text": "Tunisia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Japan?",
        "answers": [
          {
            "text": "Tokyo",
            "correct": true
          },
          {
            "text": "Osaka",
            "correct": false
          },
          {
            "text": "Kyoto",
            "correct": false
          },
          {
            "text": "Hiroshima",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of the United States?",
        "answers": [
          {
            "text": "Washington, D.C.",
            "correct": true
          },
          {
            "text": "New York",
            "correct": false
          },
          {
            "text": "Los Angeles",
            "correct": false
          },
          {
            "text": "Chicago",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Nile River is in which continent?",
        "answers": [
          {
            "text": "Africa",
            "correct": true
          },
          {
            "text": "Asia",
            "correct": false
          },
          {
            "text": "Europe",
            "correct": false
          },
          {
            "text": "South America",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which desert is the world's largest hot desert?",
        "answers": [
          {
            "text": "The Sahara",
            "correct": true
          },
          {
            "text": "The Gobi",
            "correct": false
          },
          {
            "text": "The Kalahari",
            "correct": false
          },
          {
            "text": "The Arabian",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of China?",
        "answers": [
          {
            "text": "Beijing",
            "correct": true
          },
          {
            "text": "Shanghai",
            "correct": false
          },
          {
            "text": "Hong Kong",
            "correct": false
          },
          {
            "text": "Guangzhou",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the smallest continent by area?",
        "answers": [
          {
            "text": "Australia",
            "correct": true
          },
          {
            "text": "Europe",
            "correct": false
          },
          {
            "text": "Antarctica",
            "correct": false
          },
          {
            "text": "South America",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of India?",
        "answers": [
          {
            "text": "New Delhi",
            "correct": true
          },
          {
            "text": "Mumbai",
            "correct": false
          },
          {
            "text": "Kolkata",
            "correct": false
          },
          {
            "text": "Chennai",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Amazon River is in which continent?",
        "answers": [
          {
            "text": "South America",
            "correct": true
          },
          {
            "text": "Africa",
            "correct": false
          },
          {
            "text": "Asia",
            "correct": false
          },
          {
            "text": "North America",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the capital of Argentina?",
        "answers": [
          {
            "text": "Buenos Aires",
            "correct": true
          },
          {
            "text": "Santiago",
            "correct": false
          },
          {
            "text": "Lima",
            "correct": false
          },
          {
            "text": "Montevideo",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Turkey?",
        "answers": [
          {
            "text": "Ankara",
            "correct": true
          },
          {
            "text": "Istanbul",
            "correct": false
          },
          {
            "text": "Izmir",
            "correct": false
          },
          {
            "text": "Antalya",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Andes mountains are mainly in which continent?",
        "answers": [
          {
            "text": "South America",
            "correct": true
          },
          {
            "text": "North America",
            "correct": false
          },
          {
            "text": "Asia",
            "correct": false
          },
          {
            "text": "Europe",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Thailand?",
        "answers": [
          {
            "text": "Bangkok",
            "correct": true
          },
          {
            "text": "Phuket",
            "correct": false
          },
          {
            "text": "Chiang Mai",
            "correct": false
          },
          {
            "text": "Manila",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which US state is the largest by area?",
        "answers": [
          {
            "text": "Alaska",
            "correct": true
          },
          {
            "text": "Texas",
            "correct": false
          },
          {
            "text": "California",
            "correct": false
          },
          {
            "text": "Montana",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Portugal?",
        "answers": [
          {
            "text": "Lisbon",
            "correct": true
          },
          {
            "text": "Porto",
            "correct": false
          },
          {
            "text": "Madrid",
            "correct": false
          },
          {
            "text": "Seville",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Sweden?",
        "answers": [
          {
            "text": "Stockholm",
            "correct": true
          },
          {
            "text": "Oslo",
            "correct": false
          },
          {
            "text": "Copenhagen",
            "correct": false
          },
          {
            "text": "Helsinki",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Greece?",
        "answers": [
          {
            "text": "Athens",
            "correct": true
          },
          {
            "text": "Sparta",
            "correct": false
          },
          {
            "text": "Thessaloniki",
            "correct": false
          },
          {
            "text": "Rome",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the capital of Ethiopia?",
        "answers": [
          {
            "text": "Addis Ababa",
            "correct": true
          },
          {
            "text": "Nairobi",
            "correct": false
          },
          {
            "text": "Khartoum",
            "correct": false
          },
          {
            "text": "Kampala",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Atacama Desert is mainly in which country?",
        "answers": [
          {
            "text": "Chile",
            "correct": true
          },
          {
            "text": "Peru",
            "correct": false
          },
          {
            "text": "Argentina",
            "correct": false
          },
          {
            "text": "Bolivia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Ukraine?",
        "answers": [
          {
            "text": "Kyiv",
            "correct": true
          },
          {
            "text": "Moscow",
            "correct": false
          },
          {
            "text": "Minsk",
            "correct": false
          },
          {
            "text": "Warsaw",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Ural Mountains separate Europe from which continent?",
        "answers": [
          {
            "text": "Asia",
            "correct": true
          },
          {
            "text": "Africa",
            "correct": false
          },
          {
            "text": "North America",
            "correct": false
          },
          {
            "text": "Australia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the deepest ocean trench called?",
        "answers": [
          {
            "text": "The Mariana Trench",
            "correct": true
          },
          {
            "text": "The Puerto Rico Trench",
            "correct": false
          },
          {
            "text": "The Java Trench",
            "correct": false
          },
          {
            "text": "The Tonga Trench",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Peru?",
        "answers": [
          {
            "text": "Lima",
            "correct": true
          },
          {
            "text": "Cusco",
            "correct": false
          },
          {
            "text": "Quito",
            "correct": false
          },
          {
            "text": "Bogotá",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the capital of Hungary?",
        "answers": [
          {
            "text": "Budapest",
            "correct": true
          },
          {
            "text": "Bucharest",
            "correct": false
          },
          {
            "text": "Belgrade",
            "correct": false
          },
          {
            "text": "Prague",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Mekong River empties into which sea?",
        "answers": [
          {
            "text": "The South China Sea",
            "correct": true
          },
          {
            "text": "The Red Sea",
            "correct": false
          },
          {
            "text": "The Black Sea",
            "correct": false
          },
          {
            "text": "The Caspian Sea",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  },
  {
    "id": "sports",
    "name": "Sports",
    "emoji": "🏆",
    "questions": [
      {
        "question": "The Premier League is the top football league in which country?",
        "answers": [
          {
            "text": "England",
            "correct": true
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Italy",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Etihad Stadium is home to which club?",
        "answers": [
          {
            "text": "Manchester City",
            "correct": true
          },
          {
            "text": "Manchester United",
            "correct": false
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "Arsenal",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Jack Grealish joined Manchester City from which club?",
        "answers": [
          {
            "text": "Aston Villa",
            "correct": true
          },
          {
            "text": "Everton",
            "correct": false
          },
          {
            "text": "Tottenham",
            "correct": false
          },
          {
            "text": "Wolves",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which basketball player is nicknamed the Greek Freak?",
        "answers": [
          {
            "text": "Giannis Antetokounmpo",
            "correct": true
          },
          {
            "text": "Luka Dončić",
            "correct": false
          },
          {
            "text": "Nikola Jokić",
            "correct": false
          },
          {
            "text": "Joel Embiid",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Lionel Messi is from which country?",
        "answers": [
          {
            "text": "Argentina",
            "correct": true
          },
          {
            "text": "Brazil",
            "correct": false
          },
          {
            "text": "Portugal",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Michael Jordan is most associated with which NBA team?",
        "answers": [
          {
            "text": "Chicago Bulls",
            "correct": true
          },
          {
            "text": "Los Angeles Lakers",
            "correct": false
          },
          {
            "text": "Boston Celtics",
            "correct": false
          },
          {
            "text": "New York Knicks",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Wimbledon is played on which surface?",
        "answers": [
          {
            "text": "Grass",
            "correct": true
          },
          {
            "text": "Clay",
            "correct": false
          },
          {
            "text": "Hard court",
            "correct": false
          },
          {
            "text": "Carpet",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which tennis player is known as the King of Clay?",
        "answers": [
          {
            "text": "Rafael Nadal",
            "correct": true
          },
          {
            "text": "Roger Federer",
            "correct": false
          },
          {
            "text": "Novak Djokovic",
            "correct": false
          },
          {
            "text": "Andy Murray",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Roger Federer is from which country?",
        "answers": [
          {
            "text": "Switzerland",
            "correct": true
          },
          {
            "text": "Sweden",
            "correct": false
          },
          {
            "text": "Austria",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which club appointed Pep Guardiola as manager in 2016?",
        "answers": [
          {
            "text": "Manchester City",
            "correct": true
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "Liverpool",
            "correct": false
          },
          {
            "text": "Arsenal",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who managed Arsenal during their unbeaten 2003–04 league season?",
        "answers": [
          {
            "text": "Arsène Wenger",
            "correct": true
          },
          {
            "text": "José Mourinho",
            "correct": false
          },
          {
            "text": "Sir Alex Ferguson",
            "correct": false
          },
          {
            "text": "Pep Guardiola",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who managed Leicester City to their Premier League title?",
        "answers": [
          {
            "text": "Claudio Ranieri",
            "correct": true
          },
          {
            "text": "Jürgen Klopp",
            "correct": false
          },
          {
            "text": "Antonio Conte",
            "correct": false
          },
          {
            "text": "Carlo Ancelotti",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Anfield is the home stadium of which club?",
        "answers": [
          {
            "text": "Liverpool",
            "correct": true
          },
          {
            "text": "Everton",
            "correct": false
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "Arsenal",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Stephen Curry won his NBA titles with which team?",
        "answers": [
          {
            "text": "Golden State Warriors",
            "correct": true
          },
          {
            "text": "Los Angeles Lakers",
            "correct": false
          },
          {
            "text": "Boston Celtics",
            "correct": false
          },
          {
            "text": "Chicago Bulls",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which team drafted LeBron James in 2003?",
        "answers": [
          {
            "text": "Cleveland Cavaliers",
            "correct": true
          },
          {
            "text": "Miami Heat",
            "correct": false
          },
          {
            "text": "Los Angeles Lakers",
            "correct": false
          },
          {
            "text": "Chicago Bulls",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Toronto Raptors are based in which country?",
        "answers": [
          {
            "text": "Canada",
            "correct": true
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "Mexico",
            "correct": false
          },
          {
            "text": "The United Kingdom",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The French Open is played on which surface?",
        "answers": [
          {
            "text": "Clay",
            "correct": true
          },
          {
            "text": "Grass",
            "correct": false
          },
          {
            "text": "Hard court",
            "correct": false
          },
          {
            "text": "Carpet",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Novak Djokovic is from which country?",
        "answers": [
          {
            "text": "Serbia",
            "correct": true
          },
          {
            "text": "Croatia",
            "correct": false
          },
          {
            "text": "Slovenia",
            "correct": false
          },
          {
            "text": "Bosnia and Herzegovina",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Erling Haaland joined Manchester City from which club?",
        "answers": [
          {
            "text": "Borussia Dortmund",
            "correct": true
          },
          {
            "text": "RB Leipzig",
            "correct": false
          },
          {
            "text": "Red Bull Salzburg",
            "correct": false
          },
          {
            "text": "Ajax",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Kevin De Bruyne is from which country?",
        "answers": [
          {
            "text": "Belgium",
            "correct": true
          },
          {
            "text": "The Netherlands",
            "correct": false
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Selhurst Park is the home of which Premier League club?",
        "answers": [
          {
            "text": "Crystal Palace",
            "correct": true
          },
          {
            "text": "Brighton",
            "correct": false
          },
          {
            "text": "Brentford",
            "correct": false
          },
          {
            "text": "Fulham",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The 1992 United States Olympic basketball team was nicknamed what?",
        "answers": [
          {
            "text": "The Dream Team",
            "correct": true
          },
          {
            "text": "The Fab Five",
            "correct": false
          },
          {
            "text": "The Monstars",
            "correct": false
          },
          {
            "text": "Team USA Classic",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who coached the 1992 United States Olympic basketball team?",
        "answers": [
          {
            "text": "Chuck Daly",
            "correct": true
          },
          {
            "text": "Phil Jackson",
            "correct": false
          },
          {
            "text": "Gregg Popovich",
            "correct": false
          },
          {
            "text": "Mike Krzyzewski",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who scored the winning goal in the 2023 Champions League final?",
        "answers": [
          {
            "text": "Rodri",
            "correct": true
          },
          {
            "text": "Kevin De Bruyne",
            "correct": false
          },
          {
            "text": "Erling Haaland",
            "correct": false
          },
          {
            "text": "Julián Álvarez",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The US Open tennis tournament is held in which New York borough?",
        "answers": [
          {
            "text": "Queens",
            "correct": true
          },
          {
            "text": "Manhattan",
            "correct": false
          },
          {
            "text": "Brooklyn",
            "correct": false
          },
          {
            "text": "The Bronx",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Rafael Nadal won a record number of titles at which Grand Slam?",
        "answers": [
          {
            "text": "The French Open",
            "correct": true
          },
          {
            "text": "Wimbledon",
            "correct": false
          },
          {
            "text": "The US Open",
            "correct": false
          },
          {
            "text": "The Australian Open",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Australian Open is played in which city?",
        "answers": [
          {
            "text": "Melbourne",
            "correct": true
          },
          {
            "text": "Sydney",
            "correct": false
          },
          {
            "text": "Auckland",
            "correct": false
          },
          {
            "text": "London",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which player is known as CR7?",
        "answers": [
          {
            "text": "Cristiano Ronaldo",
            "correct": true
          },
          {
            "text": "Lionel Messi",
            "correct": false
          },
          {
            "text": "Neymar",
            "correct": false
          },
          {
            "text": "Kylian Mbappé",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Usain Bolt represented which country?",
        "answers": [
          {
            "text": "Jamaica",
            "correct": true
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "Kenya",
            "correct": false
          },
          {
            "text": "Great Britain",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Stamford Bridge is the home of which club?",
        "answers": [
          {
            "text": "Chelsea",
            "correct": true
          },
          {
            "text": "Arsenal",
            "correct": false
          },
          {
            "text": "Tottenham",
            "correct": false
          },
          {
            "text": "West Ham",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Serena Williams is from which country?",
        "answers": [
          {
            "text": "The United States",
            "correct": true
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "Australia",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Australian Open is played on which surface?",
        "answers": [
          {
            "text": "Hard court",
            "correct": true
          },
          {
            "text": "Grass",
            "correct": false
          },
          {
            "text": "Clay",
            "correct": false
          },
          {
            "text": "Carpet",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Emirates Stadium is the home of which club?",
        "answers": [
          {
            "text": "Arsenal",
            "correct": true
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "Liverpool",
            "correct": false
          },
          {
            "text": "Tottenham",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The French Open is held in which city?",
        "answers": [
          {
            "text": "Paris",
            "correct": true
          },
          {
            "text": "Lyon",
            "correct": false
          },
          {
            "text": "Madrid",
            "correct": false
          },
          {
            "text": "Rome",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who beat Roger Federer in the 2019 Wimbledon final?",
        "answers": [
          {
            "text": "Novak Djokovic",
            "correct": true
          },
          {
            "text": "Rafael Nadal",
            "correct": false
          },
          {
            "text": "Andy Murray",
            "correct": false
          },
          {
            "text": "Stan Wawrinka",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Tottenham Hotspur Stadium is the home of which club?",
        "answers": [
          {
            "text": "Tottenham",
            "correct": true
          },
          {
            "text": "Arsenal",
            "correct": false
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "West Ham",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "How many players does a football team have on the pitch?",
        "answers": [
          {
            "text": "11",
            "correct": true
          },
          {
            "text": "10",
            "correct": false
          },
          {
            "text": "9",
            "correct": false
          },
          {
            "text": "15",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Super Bowl is the final of which sport?",
        "answers": [
          {
            "text": "American football",
            "correct": true
          },
          {
            "text": "Basketball",
            "correct": false
          },
          {
            "text": "Baseball",
            "correct": false
          },
          {
            "text": "Ice hockey",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Cristiano Ronaldo is from which country?",
        "answers": [
          {
            "text": "Portugal",
            "correct": true
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Brazil",
            "correct": false
          },
          {
            "text": "Argentina",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The NBA is the top league in which sport?",
        "answers": [
          {
            "text": "Basketball",
            "correct": true
          },
          {
            "text": "Baseball",
            "correct": false
          },
          {
            "text": "American football",
            "correct": false
          },
          {
            "text": "Ice hockey",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "How many holes are played in a standard round of golf?",
        "answers": [
          {
            "text": "18",
            "correct": true
          },
          {
            "text": "9",
            "correct": false
          },
          {
            "text": "12",
            "correct": false
          },
          {
            "text": "21",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "A hat-trick in football means how many goals?",
        "answers": [
          {
            "text": "3",
            "correct": true
          },
          {
            "text": "2",
            "correct": false
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "5",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Olympic Games are normally held every how many years?",
        "answers": [
          {
            "text": "4",
            "correct": true
          },
          {
            "text": "2",
            "correct": false
          },
          {
            "text": "3",
            "correct": false
          },
          {
            "text": "5",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "How many points is a rugby union try worth?",
        "answers": [
          {
            "text": "5",
            "correct": true
          },
          {
            "text": "3",
            "correct": false
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "7",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "How many players from one team are on a basketball court at once?",
        "answers": [
          {
            "text": "5",
            "correct": true
          },
          {
            "text": "6",
            "correct": false
          },
          {
            "text": "7",
            "correct": false
          },
          {
            "text": "11",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Six Nations Championship is contested in which sport?",
        "answers": [
          {
            "text": "Rugby union",
            "correct": true
          },
          {
            "text": "Football",
            "correct": false
          },
          {
            "text": "Cricket",
            "correct": false
          },
          {
            "text": "Tennis",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which country has won the most FIFA World Cups?",
        "answers": [
          {
            "text": "Brazil",
            "correct": true
          },
          {
            "text": "Germany",
            "correct": false
          },
          {
            "text": "Italy",
            "correct": false
          },
          {
            "text": "Argentina",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Old Trafford is the home of which club?",
        "answers": [
          {
            "text": "Manchester United",
            "correct": true
          },
          {
            "text": "Liverpool",
            "correct": false
          },
          {
            "text": "Manchester City",
            "correct": false
          },
          {
            "text": "Everton",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Stanley Cup is awarded in which sport?",
        "answers": [
          {
            "text": "Ice hockey",
            "correct": true
          },
          {
            "text": "American football",
            "correct": false
          },
          {
            "text": "Basketball",
            "correct": false
          },
          {
            "text": "Baseball",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "How long is a standard football match, not including extra time?",
        "answers": [
          {
            "text": "90 minutes",
            "correct": true
          },
          {
            "text": "80 minutes",
            "correct": false
          },
          {
            "text": "60 minutes",
            "correct": false
          },
          {
            "text": "120 minutes",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which country hosted the 2022 FIFA World Cup?",
        "answers": [
          {
            "text": "Qatar",
            "correct": true
          },
          {
            "text": "Russia",
            "correct": false
          },
          {
            "text": "Brazil",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Ryder Cup is contested in which sport?",
        "answers": [
          {
            "text": "Golf",
            "correct": true
          },
          {
            "text": "Tennis",
            "correct": false
          },
          {
            "text": "Cricket",
            "correct": false
          },
          {
            "text": "Rugby",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the Premier League's all-time top scorer?",
        "answers": [
          {
            "text": "Alan Shearer",
            "correct": true
          },
          {
            "text": "Wayne Rooney",
            "correct": false
          },
          {
            "text": "Harry Kane",
            "correct": false
          },
          {
            "text": "Thierry Henry",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Which club has won the most UEFA Champions League titles?",
        "answers": [
          {
            "text": "Real Madrid",
            "correct": true
          },
          {
            "text": "AC Milan",
            "correct": false
          },
          {
            "text": "Bayern Munich",
            "correct": false
          },
          {
            "text": "Liverpool",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Ashes is a cricket series between England and which country?",
        "answers": [
          {
            "text": "Australia",
            "correct": true
          },
          {
            "text": "India",
            "correct": false
          },
          {
            "text": "South Africa",
            "correct": false
          },
          {
            "text": "New Zealand",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who won the 2022 FIFA World Cup?",
        "answers": [
          {
            "text": "Argentina",
            "correct": true
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "Brazil",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "A perfect game in ten-pin bowling is how many points?",
        "answers": [
          {
            "text": "300",
            "correct": true
          },
          {
            "text": "200",
            "correct": false
          },
          {
            "text": "250",
            "correct": false
          },
          {
            "text": "100",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Muhammad Ali competed in which sport?",
        "answers": [
          {
            "text": "Boxing",
            "correct": true
          },
          {
            "text": "Wrestling",
            "correct": false
          },
          {
            "text": "MMA",
            "correct": false
          },
          {
            "text": "American football",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Kylian Mbappé plays internationally for which country?",
        "answers": [
          {
            "text": "France",
            "correct": true
          },
          {
            "text": "Belgium",
            "correct": false
          },
          {
            "text": "Portugal",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "How many Formula 1 world titles did Michael Schumacher win?",
        "answers": [
          {
            "text": "7",
            "correct": true
          },
          {
            "text": "5",
            "correct": false
          },
          {
            "text": "6",
            "correct": false
          },
          {
            "text": "8",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  },
  {
    "id": "film",
    "name": "Film & TV",
    "emoji": "🎬",
    "questions": [
      {
        "question": "Wakanda is the home of which superhero?",
        "answers": [
          {
            "text": "Black Panther",
            "correct": true
          },
          {
            "text": "Superman",
            "correct": false
          },
          {
            "text": "Spider-Man",
            "correct": false
          },
          {
            "text": "Batman",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Batman protects which fictional city?",
        "answers": [
          {
            "text": "Gotham City",
            "correct": true
          },
          {
            "text": "Metropolis",
            "correct": false
          },
          {
            "text": "Star City",
            "correct": false
          },
          {
            "text": "Central City",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who plays Captain Jack Sparrow?",
        "answers": [
          {
            "text": "Johnny Depp",
            "correct": true
          },
          {
            "text": "Orlando Bloom",
            "correct": false
          },
          {
            "text": "Brad Pitt",
            "correct": false
          },
          {
            "text": "Tom Cruise",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "In The Lion King, who is Simba’s uncle?",
        "answers": [
          {
            "text": "Scar",
            "correct": true
          },
          {
            "text": "Mufasa",
            "correct": false
          },
          {
            "text": "Timon",
            "correct": false
          },
          {
            "text": "Rafiki",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Harry Potter is sorted into which house?",
        "answers": [
          {
            "text": "Gryffindor",
            "correct": true
          },
          {
            "text": "Slytherin",
            "correct": false
          },
          {
            "text": "Hufflepuff",
            "correct": false
          },
          {
            "text": "Ravenclaw",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The series Wednesday is about a daughter of which family?",
        "answers": [
          {
            "text": "The Addams Family",
            "correct": true
          },
          {
            "text": "The Incredibles",
            "correct": false
          },
          {
            "text": "The Simpsons",
            "correct": false
          },
          {
            "text": "The Royals",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Where does SpongeBob SquarePants live?",
        "answers": [
          {
            "text": "Bikini Bottom",
            "correct": true
          },
          {
            "text": "Atlantis",
            "correct": false
          },
          {
            "text": "Coral Bay",
            "correct": false
          },
          {
            "text": "Shell City",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "A glass slipper belongs to which fairy-tale character?",
        "answers": [
          {
            "text": "Cinderella",
            "correct": true
          },
          {
            "text": "Snow White",
            "correct": false
          },
          {
            "text": "Belle",
            "correct": false
          },
          {
            "text": "Ariel",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Friends is set in which city?",
        "answers": [
          {
            "text": "New York",
            "correct": true
          },
          {
            "text": "London",
            "correct": false
          },
          {
            "text": "Los Angeles",
            "correct": false
          },
          {
            "text": "Chicago",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is Iron Man’s real name?",
        "answers": [
          {
            "text": "Tony Stark",
            "correct": true
          },
          {
            "text": "Steve Rogers",
            "correct": false
          },
          {
            "text": "Bruce Banner",
            "correct": false
          },
          {
            "text": "Peter Parker",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who is the demigod in Moana?",
        "answers": [
          {
            "text": "Maui",
            "correct": true
          },
          {
            "text": "Tamatoa",
            "correct": false
          },
          {
            "text": "Heihei",
            "correct": false
          },
          {
            "text": "Te Fiti",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Squid Game was made in which country?",
        "answers": [
          {
            "text": "South Korea",
            "correct": true
          },
          {
            "text": "Japan",
            "correct": false
          },
          {
            "text": "China",
            "correct": false
          },
          {
            "text": "Thailand",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Mandalorian belongs to which film world?",
        "answers": [
          {
            "text": "Star Wars",
            "correct": true
          },
          {
            "text": "Star Trek",
            "correct": false
          },
          {
            "text": "Marvel",
            "correct": false
          },
          {
            "text": "Harry Potter",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Bridgerton is set mainly in which city?",
        "answers": [
          {
            "text": "London",
            "correct": true
          },
          {
            "text": "Paris",
            "correct": false
          },
          {
            "text": "New York",
            "correct": false
          },
          {
            "text": "Bath",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Owen Grady in Jurassic World?",
        "answers": [
          {
            "text": "Chris Pratt",
            "correct": true
          },
          {
            "text": "Sam Neill",
            "correct": false
          },
          {
            "text": "Bryce Dallas Howard",
            "correct": false
          },
          {
            "text": "Jeff Goldblum",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Thor in the Marvel films?",
        "answers": [
          {
            "text": "Chris Hemsworth",
            "correct": true
          },
          {
            "text": "Chris Evans",
            "correct": false
          },
          {
            "text": "Tom Holland",
            "correct": false
          },
          {
            "text": "Robert Downey Jr.",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Paul Atreides in the Dune films?",
        "answers": [
          {
            "text": "Timothée Chalamet",
            "correct": true
          },
          {
            "text": "Zendaya",
            "correct": false
          },
          {
            "text": "Austin Butler",
            "correct": false
          },
          {
            "text": "Oscar Isaac",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the family name in Encanto?",
        "answers": [
          {
            "text": "Madrigal",
            "correct": true
          },
          {
            "text": "Addams",
            "correct": false
          },
          {
            "text": "Bridgerton",
            "correct": false
          },
          {
            "text": "Skywalker",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In The Lord of the Rings, the Ring is destroyed in which mountain?",
        "answers": [
          {
            "text": "Mount Doom",
            "correct": true
          },
          {
            "text": "Mount Everest",
            "correct": false
          },
          {
            "text": "Weathertop",
            "correct": false
          },
          {
            "text": "Caradhras",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who played the main Ken in the 2023 Barbie film?",
        "answers": [
          {
            "text": "Ryan Gosling",
            "correct": true
          },
          {
            "text": "Ryan Reynolds",
            "correct": false
          },
          {
            "text": "Timothée Chalamet",
            "correct": false
          },
          {
            "text": "Austin Butler",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In The Matrix, which pill does Neo take to learn the truth?",
        "answers": [
          {
            "text": "The red pill",
            "correct": true
          },
          {
            "text": "The blue pill",
            "correct": false
          },
          {
            "text": "The green pill",
            "correct": false
          },
          {
            "text": "The white pill",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who plays Evelyn Wang in Everything Everywhere All at Once?",
        "answers": [
          {
            "text": "Michelle Yeoh",
            "correct": true
          },
          {
            "text": "Awkwafina",
            "correct": false
          },
          {
            "text": "Sandra Oh",
            "correct": false
          },
          {
            "text": "Maggie Cheung",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who plays the Genie in the 2019 Aladdin?",
        "answers": [
          {
            "text": "Will Smith",
            "correct": true
          },
          {
            "text": "Robin Williams",
            "correct": false
          },
          {
            "text": "Donald Glover",
            "correct": false
          },
          {
            "text": "Idris Elba",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Wednesday Addams attends which school?",
        "answers": [
          {
            "text": "Nevermore Academy",
            "correct": true
          },
          {
            "text": "Hogwarts",
            "correct": false
          },
          {
            "text": "Ilvermorny",
            "correct": false
          },
          {
            "text": "Xavier's School",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who played Barbie in the 2023 film?",
        "answers": [
          {
            "text": "Margot Robbie",
            "correct": true
          },
          {
            "text": "Emma Stone",
            "correct": false
          },
          {
            "text": "Florence Pugh",
            "correct": false
          },
          {
            "text": "Zendaya",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who played Jack Dawson in Titanic?",
        "answers": [
          {
            "text": "Leonardo DiCaprio",
            "correct": true
          },
          {
            "text": "Brad Pitt",
            "correct": false
          },
          {
            "text": "Matt Damon",
            "correct": false
          },
          {
            "text": "Tom Cruise",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "What is the name of the coffee shop in Friends?",
        "answers": [
          {
            "text": "Central Perk",
            "correct": true
          },
          {
            "text": "Central Park",
            "correct": false
          },
          {
            "text": "The Grind",
            "correct": false
          },
          {
            "text": "Monk's Café",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who voices Woody in Toy Story?",
        "answers": [
          {
            "text": "Tom Hanks",
            "correct": true
          },
          {
            "text": "Tim Allen",
            "correct": false
          },
          {
            "text": "Robin Williams",
            "correct": false
          },
          {
            "text": "Billy Crystal",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Katniss Everdeen?",
        "answers": [
          {
            "text": "Jennifer Lawrence",
            "correct": true
          },
          {
            "text": "Emma Watson",
            "correct": false
          },
          {
            "text": "Shailene Woodley",
            "correct": false
          },
          {
            "text": "Zendaya",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who played Harry Potter in the films?",
        "answers": [
          {
            "text": "Daniel Radcliffe",
            "correct": true
          },
          {
            "text": "Rupert Grint",
            "correct": false
          },
          {
            "text": "Tom Holland",
            "correct": false
          },
          {
            "text": "Elijah Wood",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In Frozen, what is the snowman's name?",
        "answers": [
          {
            "text": "Olaf",
            "correct": true
          },
          {
            "text": "Sven",
            "correct": false
          },
          {
            "text": "Kristoff",
            "correct": false
          },
          {
            "text": "Elsa",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Eleven in Stranger Things?",
        "answers": [
          {
            "text": "Millie Bobby Brown",
            "correct": true
          },
          {
            "text": "Sadie Sink",
            "correct": false
          },
          {
            "text": "Winona Ryder",
            "correct": false
          },
          {
            "text": "Maya Hawke",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who played the Joker in The Dark Knight?",
        "answers": [
          {
            "text": "Heath Ledger",
            "correct": true
          },
          {
            "text": "Joaquin Phoenix",
            "correct": false
          },
          {
            "text": "Jack Nicholson",
            "correct": false
          },
          {
            "text": "Jared Leto",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In Inception, what object does Cobb use as a totem?",
        "answers": [
          {
            "text": "A spinning top",
            "correct": true
          },
          {
            "text": "A coin",
            "correct": false
          },
          {
            "text": "A die",
            "correct": false
          },
          {
            "text": "A chess piece",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who voices Miles Morales in the Spider-Verse films?",
        "answers": [
          {
            "text": "Shameik Moore",
            "correct": true
          },
          {
            "text": "Donald Glover",
            "correct": false
          },
          {
            "text": "Tom Holland",
            "correct": false
          },
          {
            "text": "Jake Johnson",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Which film won Best Picture at the 2024 Oscars?",
        "answers": [
          {
            "text": "Oppenheimer",
            "correct": true
          },
          {
            "text": "Barbie",
            "correct": false
          },
          {
            "text": "Poor Things",
            "correct": false
          },
          {
            "text": "Killers of the Flower Moon",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is Spider-Man's real name?",
        "answers": [
          {
            "text": "Peter Parker",
            "correct": true
          },
          {
            "text": "Clark Kent",
            "correct": false
          },
          {
            "text": "Bruce Wayne",
            "correct": false
          },
          {
            "text": "Tony Stark",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Elsa is a character from which film?",
        "answers": [
          {
            "text": "Frozen",
            "correct": true
          },
          {
            "text": "Moana",
            "correct": false
          },
          {
            "text": "Tangled",
            "correct": false
          },
          {
            "text": "Brave",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the name of Harry Potter's owl?",
        "answers": [
          {
            "text": "Hedwig",
            "correct": true
          },
          {
            "text": "Errol",
            "correct": false
          },
          {
            "text": "Crookshanks",
            "correct": false
          },
          {
            "text": "Scabbers",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Minions appear in which film series?",
        "answers": [
          {
            "text": "Despicable Me",
            "correct": true
          },
          {
            "text": "Shrek",
            "correct": false
          },
          {
            "text": "Toy Story",
            "correct": false
          },
          {
            "text": "Ice Age",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who directed Titanic?",
        "answers": [
          {
            "text": "James Cameron",
            "correct": true
          },
          {
            "text": "Steven Spielberg",
            "correct": false
          },
          {
            "text": "Christopher Nolan",
            "correct": false
          },
          {
            "text": "Ridley Scott",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "May the Force be with you comes from which franchise?",
        "answers": [
          {
            "text": "Star Wars",
            "correct": true
          },
          {
            "text": "Star Trek",
            "correct": false
          },
          {
            "text": "The Matrix",
            "correct": false
          },
          {
            "text": "Guardians of the Galaxy",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who played T'Challa in Black Panther?",
        "answers": [
          {
            "text": "Chadwick Boseman",
            "correct": true
          },
          {
            "text": "Michael B. Jordan",
            "correct": false
          },
          {
            "text": "John Boyega",
            "correct": false
          },
          {
            "text": "Idris Elba",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Finding Nemo is about a father searching for his what?",
        "answers": [
          {
            "text": "Son",
            "correct": true
          },
          {
            "text": "Brother",
            "correct": false
          },
          {
            "text": "Friend",
            "correct": false
          },
          {
            "text": "Wife",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who plays Iron Man in the Marvel films?",
        "answers": [
          {
            "text": "Robert Downey Jr.",
            "correct": true
          },
          {
            "text": "Chris Evans",
            "correct": false
          },
          {
            "text": "Chris Hemsworth",
            "correct": false
          },
          {
            "text": "Mark Ruffalo",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who directed Jurassic Park?",
        "answers": [
          {
            "text": "Steven Spielberg",
            "correct": true
          },
          {
            "text": "James Cameron",
            "correct": false
          },
          {
            "text": "George Lucas",
            "correct": false
          },
          {
            "text": "Peter Jackson",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who plays Deadpool?",
        "answers": [
          {
            "text": "Ryan Reynolds",
            "correct": true
          },
          {
            "text": "Hugh Jackman",
            "correct": false
          },
          {
            "text": "Chris Pratt",
            "correct": false
          },
          {
            "text": "Tom Holland",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who directed Inception?",
        "answers": [
          {
            "text": "Christopher Nolan",
            "correct": true
          },
          {
            "text": "Denis Villeneuve",
            "correct": false
          },
          {
            "text": "Zack Snyder",
            "correct": false
          },
          {
            "text": "Ridley Scott",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Game of Thrones is based on books by whom?",
        "answers": [
          {
            "text": "George R.R. Martin",
            "correct": true
          },
          {
            "text": "J.R.R. Tolkien",
            "correct": false
          },
          {
            "text": "C.S. Lewis",
            "correct": false
          },
          {
            "text": "J.K. Rowling",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Godfather is about which crime family?",
        "answers": [
          {
            "text": "The Corleones",
            "correct": true
          },
          {
            "text": "The Sopranos",
            "correct": false
          },
          {
            "text": "The Gambinos",
            "correct": false
          },
          {
            "text": "The Goodfellas",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who directed Pulp Fiction?",
        "answers": [
          {
            "text": "Quentin Tarantino",
            "correct": true
          },
          {
            "text": "Martin Scorsese",
            "correct": false
          },
          {
            "text": "Francis Ford Coppola",
            "correct": false
          },
          {
            "text": "Guy Ritchie",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who voices Shrek?",
        "answers": [
          {
            "text": "Mike Myers",
            "correct": true
          },
          {
            "text": "Eddie Murphy",
            "correct": false
          },
          {
            "text": "Cameron Diaz",
            "correct": false
          },
          {
            "text": "John Goodman",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who directed Parasite?",
        "answers": [
          {
            "text": "Bong Joon-ho",
            "correct": true
          },
          {
            "text": "Park Chan-wook",
            "correct": false
          },
          {
            "text": "Lee Isaac Chung",
            "correct": false
          },
          {
            "text": "Hirokazu Kore-eda",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who composed the music for Star Wars?",
        "answers": [
          {
            "text": "John Williams",
            "correct": true
          },
          {
            "text": "Hans Zimmer",
            "correct": false
          },
          {
            "text": "Ennio Morricone",
            "correct": false
          },
          {
            "text": "Howard Shore",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who directed the original Alien?",
        "answers": [
          {
            "text": "Ridley Scott",
            "correct": true
          },
          {
            "text": "James Cameron",
            "correct": false
          },
          {
            "text": "George Lucas",
            "correct": false
          },
          {
            "text": "Stanley Kubrick",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who directed Get Out?",
        "answers": [
          {
            "text": "Jordan Peele",
            "correct": true
          },
          {
            "text": "Jordan Hines",
            "correct": false
          },
          {
            "text": "Spike Lee",
            "correct": false
          },
          {
            "text": "John Singleton",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In Blade Runner, the artificial humans are called what?",
        "answers": [
          {
            "text": "Replicants",
            "correct": true
          },
          {
            "text": "Cylons",
            "correct": false
          },
          {
            "text": "Androids",
            "correct": false
          },
          {
            "text": "Hosts",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who won Best Actor for Oppenheimer?",
        "answers": [
          {
            "text": "Cillian Murphy",
            "correct": true
          },
          {
            "text": "Robert Downey Jr.",
            "correct": false
          },
          {
            "text": "Bradley Cooper",
            "correct": false
          },
          {
            "text": "Paul Giamatti",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Shawshank Redemption is based on a story by whom?",
        "answers": [
          {
            "text": "Stephen King",
            "correct": true
          },
          {
            "text": "John Grisham",
            "correct": false
          },
          {
            "text": "James Patterson",
            "correct": false
          },
          {
            "text": "Dean Koontz",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "2001: A Space Odyssey was directed by whom?",
        "answers": [
          {
            "text": "Stanley Kubrick",
            "correct": true
          },
          {
            "text": "Steven Spielberg",
            "correct": false
          },
          {
            "text": "Ridley Scott",
            "correct": false
          },
          {
            "text": "George Lucas",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  },
  {
    "id": "music",
    "name": "Music",
    "emoji": "🎵",
    "questions": [
      {
        "question": "How many strings does a standard guitar have?",
        "answers": [
          {
            "text": "6",
            "correct": true
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "5",
            "correct": false
          },
          {
            "text": "8",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "A violin is usually played with what?",
        "answers": [
          {
            "text": "A bow",
            "correct": true
          },
          {
            "text": "Drumsticks",
            "correct": false
          },
          {
            "text": "A pick",
            "correct": false
          },
          {
            "text": "A keyboard",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who is known as the King of Pop?",
        "answers": [
          {
            "text": "Michael Jackson",
            "correct": true
          },
          {
            "text": "Elvis Presley",
            "correct": false
          },
          {
            "text": "Prince",
            "correct": false
          },
          {
            "text": "Justin Timberlake",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who sang Shape of You?",
        "answers": [
          {
            "text": "Ed Sheeran",
            "correct": true
          },
          {
            "text": "Shawn Mendes",
            "correct": false
          },
          {
            "text": "Justin Bieber",
            "correct": false
          },
          {
            "text": "Bruno Mars",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Beyoncé was a member of which group?",
        "answers": [
          {
            "text": "Destiny’s Child",
            "correct": true
          },
          {
            "text": "The Spice Girls",
            "correct": false
          },
          {
            "text": "TLC",
            "correct": false
          },
          {
            "text": "Fifth Harmony",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Beatles were formed in which city?",
        "answers": [
          {
            "text": "Liverpool",
            "correct": true
          },
          {
            "text": "London",
            "correct": false
          },
          {
            "text": "Manchester",
            "correct": false
          },
          {
            "text": "Birmingham",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who was the lead singer of Queen?",
        "answers": [
          {
            "text": "Freddie Mercury",
            "correct": true
          },
          {
            "text": "Mick Jagger",
            "correct": false
          },
          {
            "text": "Robert Plant",
            "correct": false
          },
          {
            "text": "Axl Rose",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which rapper is also known as Slim Shady?",
        "answers": [
          {
            "text": "Eminem",
            "correct": true
          },
          {
            "text": "Snoop Dogg",
            "correct": false
          },
          {
            "text": "Dr. Dre",
            "correct": false
          },
          {
            "text": "50 Cent",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who is known as the King of Rock and Roll?",
        "answers": [
          {
            "text": "Elvis Presley",
            "correct": true
          },
          {
            "text": "Chuck Berry",
            "correct": false
          },
          {
            "text": "Johnny Cash",
            "correct": false
          },
          {
            "text": "Buddy Holly",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "AC/DC are from which country?",
        "answers": [
          {
            "text": "Australia",
            "correct": true
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "The United Kingdom",
            "correct": false
          },
          {
            "text": "Canada",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Metallica is best known for which genre?",
        "answers": [
          {
            "text": "Heavy metal",
            "correct": true
          },
          {
            "text": "Disco",
            "correct": false
          },
          {
            "text": "Country",
            "correct": false
          },
          {
            "text": "Reggae",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "We Will Rock You was recorded by which band?",
        "answers": [
          {
            "text": "Queen",
            "correct": true
          },
          {
            "text": "The Rolling Stones",
            "correct": false
          },
          {
            "text": "The Who",
            "correct": false
          },
          {
            "text": "Kiss",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "How many strings does a standard bass guitar usually have?",
        "answers": [
          {
            "text": "4",
            "correct": true
          },
          {
            "text": "6",
            "correct": false
          },
          {
            "text": "5",
            "correct": false
          },
          {
            "text": "8",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Bob Marley is best known for which genre?",
        "answers": [
          {
            "text": "Reggae",
            "correct": true
          },
          {
            "text": "Jazz",
            "correct": false
          },
          {
            "text": "Blues",
            "correct": false
          },
          {
            "text": "Soul",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who was the lead singer of Nirvana?",
        "answers": [
          {
            "text": "Kurt Cobain",
            "correct": true
          },
          {
            "text": "Eddie Vedder",
            "correct": false
          },
          {
            "text": "Chris Cornell",
            "correct": false
          },
          {
            "text": "Layne Staley",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "A piano is played using black and white what?",
        "answers": [
          {
            "text": "Keys",
            "correct": true
          },
          {
            "text": "Strings",
            "correct": false
          },
          {
            "text": "Pedals",
            "correct": false
          },
          {
            "text": "Pipes",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who sang Umbrella?",
        "answers": [
          {
            "text": "Rihanna",
            "correct": true
          },
          {
            "text": "Beyoncé",
            "correct": false
          },
          {
            "text": "Alicia Keys",
            "correct": false
          },
          {
            "text": "Christina Aguilera",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "BTS are from which country?",
        "answers": [
          {
            "text": "South Korea",
            "correct": true
          },
          {
            "text": "Japan",
            "correct": false
          },
          {
            "text": "China",
            "correct": false
          },
          {
            "text": "Thailand",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who played guitar on Purple Haze?",
        "answers": [
          {
            "text": "Jimi Hendrix",
            "correct": true
          },
          {
            "text": "Eric Clapton",
            "correct": false
          },
          {
            "text": "Jimmy Page",
            "correct": false
          },
          {
            "text": "Slash",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Eminem grew up in which US city?",
        "answers": [
          {
            "text": "Detroit",
            "correct": true
          },
          {
            "text": "Chicago",
            "correct": false
          },
          {
            "text": "Atlanta",
            "correct": false
          },
          {
            "text": "Los Angeles",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Drake is from which country?",
        "answers": [
          {
            "text": "Canada",
            "correct": true
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "The United Kingdom",
            "correct": false
          },
          {
            "text": "Jamaica",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the lead singer of Coldplay?",
        "answers": [
          {
            "text": "Chris Martin",
            "correct": true
          },
          {
            "text": "Adam Levine",
            "correct": false
          },
          {
            "text": "Bruno Mars",
            "correct": false
          },
          {
            "text": "Bono",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who sings Blinding Lights?",
        "answers": [
          {
            "text": "The Weeknd",
            "correct": true
          },
          {
            "text": "Drake",
            "correct": false
          },
          {
            "text": "Bruno Mars",
            "correct": false
          },
          {
            "text": "Post Malone",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the lead singer of Maroon 5?",
        "answers": [
          {
            "text": "Adam Levine",
            "correct": true
          },
          {
            "text": "Bruno Mars",
            "correct": false
          },
          {
            "text": "Chris Martin",
            "correct": false
          },
          {
            "text": "Justin Timberlake",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Bob Marley was from which country?",
        "answers": [
          {
            "text": "Jamaica",
            "correct": true
          },
          {
            "text": "Trinidad and Tobago",
            "correct": false
          },
          {
            "text": "Barbados",
            "correct": false
          },
          {
            "text": "Ghana",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Uptown Funk was a hit for Mark Ronson and which singer?",
        "answers": [
          {
            "text": "Bruno Mars",
            "correct": true
          },
          {
            "text": "Pharrell Williams",
            "correct": false
          },
          {
            "text": "The Weeknd",
            "correct": false
          },
          {
            "text": "Justin Timberlake",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the lead singer of the Rolling Stones?",
        "answers": [
          {
            "text": "Mick Jagger",
            "correct": true
          },
          {
            "text": "Keith Richards",
            "correct": false
          },
          {
            "text": "Roger Daltrey",
            "correct": false
          },
          {
            "text": "Steven Tyler",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Stairway to Heaven is a song by which band?",
        "answers": [
          {
            "text": "Led Zeppelin",
            "correct": true
          },
          {
            "text": "Pink Floyd",
            "correct": false
          },
          {
            "text": "The Who",
            "correct": false
          },
          {
            "text": "Deep Purple",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Dr. Dre was a member of which group?",
        "answers": [
          {
            "text": "N.W.A",
            "correct": true
          },
          {
            "text": "Wu-Tang Clan",
            "correct": false
          },
          {
            "text": "Public Enemy",
            "correct": false
          },
          {
            "text": "Outkast",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who sang Humble?",
        "answers": [
          {
            "text": "Kendrick Lamar",
            "correct": true
          },
          {
            "text": "J. Cole",
            "correct": false
          },
          {
            "text": "Drake",
            "correct": false
          },
          {
            "text": "Travis Scott",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the lead singer of U2?",
        "answers": [
          {
            "text": "Bono",
            "correct": true
          },
          {
            "text": "The Edge",
            "correct": false
          },
          {
            "text": "Chris Martin",
            "correct": false
          },
          {
            "text": "Mick Jagger",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Dark Side of the Moon is an album by which band?",
        "answers": [
          {
            "text": "Pink Floyd",
            "correct": true
          },
          {
            "text": "Led Zeppelin",
            "correct": false
          },
          {
            "text": "The Beatles",
            "correct": false
          },
          {
            "text": "Queen",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Johnny Cash is best known for which genre?",
        "answers": [
          {
            "text": "Country",
            "correct": true
          },
          {
            "text": "Jazz",
            "correct": false
          },
          {
            "text": "Disco",
            "correct": false
          },
          {
            "text": "Reggae",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Adele is from which country?",
        "answers": [
          {
            "text": "England",
            "correct": true
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "Australia",
            "correct": false
          },
          {
            "text": "Canada",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is the lead singer of Guns N' Roses?",
        "answers": [
          {
            "text": "Axl Rose",
            "correct": true
          },
          {
            "text": "Slash",
            "correct": false
          },
          {
            "text": "Duff McKagan",
            "correct": false
          },
          {
            "text": "Steven Adler",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Oasis were led by which brothers?",
        "answers": [
          {
            "text": "Noel and Liam Gallagher",
            "correct": true
          },
          {
            "text": "Ray and Dave Davies",
            "correct": false
          },
          {
            "text": "The Bee Gees",
            "correct": false
          },
          {
            "text": "The Jacksons",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "As It Was was a hit for which singer?",
        "answers": [
          {
            "text": "Harry Styles",
            "correct": true
          },
          {
            "text": "Ed Sheeran",
            "correct": false
          },
          {
            "text": "The Weeknd",
            "correct": false
          },
          {
            "text": "Bruno Mars",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Tupac Shakur is also known as what?",
        "answers": [
          {
            "text": "2Pac",
            "correct": true
          },
          {
            "text": "Biggie",
            "correct": false
          },
          {
            "text": "Nas",
            "correct": false
          },
          {
            "text": "Ice Cube",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Red Hot Chili Peppers formed in which US city?",
        "answers": [
          {
            "text": "Los Angeles",
            "correct": true
          },
          {
            "text": "Seattle",
            "correct": false
          },
          {
            "text": "New York",
            "correct": false
          },
          {
            "text": "Chicago",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Seven Nation Army is a song by which band?",
        "answers": [
          {
            "text": "The White Stripes",
            "correct": true
          },
          {
            "text": "The Black Keys",
            "correct": false
          },
          {
            "text": "Foo Fighters",
            "correct": false
          },
          {
            "text": "Arctic Monkeys",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Calm Down was a hit for which artist?",
        "answers": [
          {
            "text": "Rema",
            "correct": true
          },
          {
            "text": "Wizkid",
            "correct": false
          },
          {
            "text": "Burna Boy",
            "correct": false
          },
          {
            "text": "Davido",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Made in Lagos is an album by which artist?",
        "answers": [
          {
            "text": "Wizkid",
            "correct": true
          },
          {
            "text": "Burna Boy",
            "correct": false
          },
          {
            "text": "Davido",
            "correct": false
          },
          {
            "text": "Black Coffee",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "After Hours is an album by which artist?",
        "answers": [
          {
            "text": "The Weeknd",
            "correct": true
          },
          {
            "text": "Drake",
            "correct": false
          },
          {
            "text": "Bruno Mars",
            "correct": false
          },
          {
            "text": "Justin Bieber",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Despacito was a worldwide hit for which singer?",
        "answers": [
          {
            "text": "Luis Fonsi",
            "correct": true
          },
          {
            "text": "Bad Bunny",
            "correct": false
          },
          {
            "text": "J Balvin",
            "correct": false
          },
          {
            "text": "Maluma",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "African Giant is an album by which artist?",
        "answers": [
          {
            "text": "Burna Boy",
            "correct": true
          },
          {
            "text": "Wizkid",
            "correct": false
          },
          {
            "text": "Davido",
            "correct": false
          },
          {
            "text": "Olamide",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Illmatic is a debut album by which rapper?",
        "answers": [
          {
            "text": "Nas",
            "correct": true
          },
          {
            "text": "Jay-Z",
            "correct": false
          },
          {
            "text": "The Notorious B.I.G.",
            "correct": false
          },
          {
            "text": "Rakim",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Nevermind is a breakthrough album by which band?",
        "answers": [
          {
            "text": "Nirvana",
            "correct": true
          },
          {
            "text": "Pearl Jam",
            "correct": false
          },
          {
            "text": "Soundgarden",
            "correct": false
          },
          {
            "text": "Alice in Chains",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Back in Black is an album by which band?",
        "answers": [
          {
            "text": "AC/DC",
            "correct": true
          },
          {
            "text": "Metallica",
            "correct": false
          },
          {
            "text": "Guns N' Roses",
            "correct": false
          },
          {
            "text": "Bon Jovi",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Abbey Road is an album by which band?",
        "answers": [
          {
            "text": "The Beatles",
            "correct": true
          },
          {
            "text": "The Rolling Stones",
            "correct": false
          },
          {
            "text": "The Beach Boys",
            "correct": false
          },
          {
            "text": "The Kinks",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who is the lead guitarist of Queen?",
        "answers": [
          {
            "text": "Brian May",
            "correct": true
          },
          {
            "text": "Freddie Mercury",
            "correct": false
          },
          {
            "text": "John Deacon",
            "correct": false
          },
          {
            "text": "Roger Taylor",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the stage name of Guns N' Roses guitarist Saul Hudson?",
        "answers": [
          {
            "text": "Slash",
            "correct": true
          },
          {
            "text": "Buckethead",
            "correct": false
          },
          {
            "text": "Zakk Wylde",
            "correct": false
          },
          {
            "text": "Joe Perry",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who founded Motown Records?",
        "answers": [
          {
            "text": "Berry Gordy",
            "correct": true
          },
          {
            "text": "Ahmet Ertegun",
            "correct": false
          },
          {
            "text": "Clive Davis",
            "correct": false
          },
          {
            "text": "Rick Rubin",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Kind of Blue is a landmark album by which jazz musician?",
        "answers": [
          {
            "text": "Miles Davis",
            "correct": true
          },
          {
            "text": "John Coltrane",
            "correct": false
          },
          {
            "text": "Louis Armstrong",
            "correct": false
          },
          {
            "text": "Duke Ellington",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "To Pimp a Butterfly is an album by which rapper?",
        "answers": [
          {
            "text": "Kendrick Lamar",
            "correct": true
          },
          {
            "text": "J. Cole",
            "correct": false
          },
          {
            "text": "Kanye West",
            "correct": false
          },
          {
            "text": "Tyler, the Creator",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is The Weeknd's real name?",
        "answers": [
          {
            "text": "Abel Tesfaye",
            "correct": true
          },
          {
            "text": "Aubrey Graham",
            "correct": false
          },
          {
            "text": "Austin Post",
            "correct": false
          },
          {
            "text": "Shaffer Smith",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Daft Punk are from which country?",
        "answers": [
          {
            "text": "France",
            "correct": true
          },
          {
            "text": "Belgium",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          },
          {
            "text": "Canada",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Fela Kuti, pioneer of Afrobeat, was from which country?",
        "answers": [
          {
            "text": "Nigeria",
            "correct": true
          },
          {
            "text": "Ghana",
            "correct": false
          },
          {
            "text": "Senegal",
            "correct": false
          },
          {
            "text": "Cameroon",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Enter Sandman is a hit by which band?",
        "answers": [
          {
            "text": "Metallica",
            "correct": true
          },
          {
            "text": "Iron Maiden",
            "correct": false
          },
          {
            "text": "Megadeth",
            "correct": false
          },
          {
            "text": "Slayer",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who rapped on Empire State of Mind with Alicia Keys?",
        "answers": [
          {
            "text": "Jay-Z",
            "correct": true
          },
          {
            "text": "Nas",
            "correct": false
          },
          {
            "text": "Notorious B.I.G.",
            "correct": false
          },
          {
            "text": "P. Diddy",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Wall is a rock opera album by which band?",
        "answers": [
          {
            "text": "Pink Floyd",
            "correct": true
          },
          {
            "text": "The Who",
            "correct": false
          },
          {
            "text": "Genesis",
            "correct": false
          },
          {
            "text": "Yes",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  },
  {
    "id": "history",
    "name": "History",
    "emoji": "🏛️",
    "questions": [
      {
        "question": "Which ancient city was buried by Mount Vesuvius?",
        "answers": [
          {
            "text": "Pompeii",
            "correct": true
          },
          {
            "text": "Athens",
            "correct": false
          },
          {
            "text": "Rome",
            "correct": false
          },
          {
            "text": "Carthage",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "In which year was the Great Fire of London?",
        "answers": [
          {
            "text": "1666",
            "correct": true
          },
          {
            "text": "1066",
            "correct": false
          },
          {
            "text": "1776",
            "correct": false
          },
          {
            "text": "1812",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which ship carried the Pilgrims to America in 1620?",
        "answers": [
          {
            "text": "The Mayflower",
            "correct": true
          },
          {
            "text": "The Santa María",
            "correct": false
          },
          {
            "text": "The Titanic",
            "correct": false
          },
          {
            "text": "The Beagle",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Industrial Revolution began in which country?",
        "answers": [
          {
            "text": "Britain",
            "correct": true
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "The United States",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The first modern Olympic Games, in 1896, were held in which city?",
        "answers": [
          {
            "text": "Athens",
            "correct": true
          },
          {
            "text": "Paris",
            "correct": false
          },
          {
            "text": "London",
            "correct": false
          },
          {
            "text": "Rome",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Whose tomb did Howard Carter discover in 1922?",
        "answers": [
          {
            "text": "Tutankhamun",
            "correct": true
          },
          {
            "text": "Cleopatra",
            "correct": false
          },
          {
            "text": "Ramesses II",
            "correct": false
          },
          {
            "text": "Nefertiti",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who was the first emperor of Rome?",
        "answers": [
          {
            "text": "Augustus",
            "correct": true
          },
          {
            "text": "Julius Caesar",
            "correct": false
          },
          {
            "text": "Nero",
            "correct": false
          },
          {
            "text": "Constantine",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In which year did the First World War end?",
        "answers": [
          {
            "text": "1918",
            "correct": true
          },
          {
            "text": "1914",
            "correct": false
          },
          {
            "text": "1939",
            "correct": false
          },
          {
            "text": "1945",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who introduced movable-type printing to Europe?",
        "answers": [
          {
            "text": "Johannes Gutenberg",
            "correct": true
          },
          {
            "text": "Leonardo da Vinci",
            "correct": false
          },
          {
            "text": "Martin Luther",
            "correct": false
          },
          {
            "text": "Isaac Newton",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Ottomans conquered Constantinople in which year?",
        "answers": [
          {
            "text": "1453",
            "correct": true
          },
          {
            "text": "1066",
            "correct": false
          },
          {
            "text": "1492",
            "correct": false
          },
          {
            "text": "1517",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Meiji Restoration modernised which country?",
        "answers": [
          {
            "text": "Japan",
            "correct": true
          },
          {
            "text": "China",
            "correct": false
          },
          {
            "text": "India",
            "correct": false
          },
          {
            "text": "Ethiopia",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who was the first president of the United States?",
        "answers": [
          {
            "text": "George Washington",
            "correct": true
          },
          {
            "text": "Abraham Lincoln",
            "correct": false
          },
          {
            "text": "Thomas Jefferson",
            "correct": false
          },
          {
            "text": "John Adams",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who painted the Mona Lisa?",
        "answers": [
          {
            "text": "Leonardo da Vinci",
            "correct": true
          },
          {
            "text": "Michelangelo",
            "correct": false
          },
          {
            "text": "Vincent van Gogh",
            "correct": false
          },
          {
            "text": "Pablo Picasso",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who wrote Romeo and Juliet?",
        "answers": [
          {
            "text": "William Shakespeare",
            "correct": true
          },
          {
            "text": "Charles Dickens",
            "correct": false
          },
          {
            "text": "Jane Austen",
            "correct": false
          },
          {
            "text": "Homer",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "In which year did the Second World War end?",
        "answers": [
          {
            "text": "1945",
            "correct": true
          },
          {
            "text": "1939",
            "correct": false
          },
          {
            "text": "1918",
            "correct": false
          },
          {
            "text": "1941",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who was the first person to walk on the Moon?",
        "answers": [
          {
            "text": "Neil Armstrong",
            "correct": true
          },
          {
            "text": "Buzz Aldrin",
            "correct": false
          },
          {
            "text": "Yuri Gagarin",
            "correct": false
          },
          {
            "text": "John Glenn",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Great Wall is in which country?",
        "answers": [
          {
            "text": "China",
            "correct": true
          },
          {
            "text": "Japan",
            "correct": false
          },
          {
            "text": "India",
            "correct": false
          },
          {
            "text": "Mongolia",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which ancient civilization built the pyramids at Giza?",
        "answers": [
          {
            "text": "The Egyptians",
            "correct": true
          },
          {
            "text": "The Romans",
            "correct": false
          },
          {
            "text": "The Greeks",
            "correct": false
          },
          {
            "text": "The Persians",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "In which year did the French Revolution begin?",
        "answers": [
          {
            "text": "1789",
            "correct": true
          },
          {
            "text": "1776",
            "correct": false
          },
          {
            "text": "1815",
            "correct": false
          },
          {
            "text": "1848",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In which year did the Berlin Wall fall?",
        "answers": [
          {
            "text": "1989",
            "correct": true
          },
          {
            "text": "1961",
            "correct": false
          },
          {
            "text": "1991",
            "correct": false
          },
          {
            "text": "1979",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who was the first human to travel into space?",
        "answers": [
          {
            "text": "Yuri Gagarin",
            "correct": true
          },
          {
            "text": "Neil Armstrong",
            "correct": false
          },
          {
            "text": "Buzz Aldrin",
            "correct": false
          },
          {
            "text": "John Glenn",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Magna Carta was signed in which country?",
        "answers": [
          {
            "text": "England",
            "correct": true
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Italy",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The ancient Olympic Games began in which country?",
        "answers": [
          {
            "text": "Greece",
            "correct": true
          },
          {
            "text": "Italy",
            "correct": false
          },
          {
            "text": "Egypt",
            "correct": false
          },
          {
            "text": "Turkey",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who is credited with inventing the telephone?",
        "answers": [
          {
            "text": "Alexander Graham Bell",
            "correct": true
          },
          {
            "text": "Thomas Edison",
            "correct": false
          },
          {
            "text": "Nikola Tesla",
            "correct": false
          },
          {
            "text": "Guglielmo Marconi",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In which year did the Titanic sink?",
        "answers": [
          {
            "text": "1912",
            "correct": true
          },
          {
            "text": "1905",
            "correct": false
          },
          {
            "text": "1918",
            "correct": false
          },
          {
            "text": "1921",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In which year did the Second World War begin in Europe?",
        "answers": [
          {
            "text": "1939",
            "correct": true
          },
          {
            "text": "1914",
            "correct": false
          },
          {
            "text": "1941",
            "correct": false
          },
          {
            "text": "1945",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Cleopatra was a ruler of which ancient kingdom?",
        "answers": [
          {
            "text": "Egypt",
            "correct": true
          },
          {
            "text": "Rome",
            "correct": false
          },
          {
            "text": "Greece",
            "correct": false
          },
          {
            "text": "Persia",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Treaty of Versailles was signed in which year?",
        "answers": [
          {
            "text": "1919",
            "correct": true
          },
          {
            "text": "1914",
            "correct": false
          },
          {
            "text": "1918",
            "correct": false
          },
          {
            "text": "1945",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who wrote The Communist Manifesto with Friedrich Engels?",
        "answers": [
          {
            "text": "Karl Marx",
            "correct": true
          },
          {
            "text": "Vladimir Lenin",
            "correct": false
          },
          {
            "text": "Leon Trotsky",
            "correct": false
          },
          {
            "text": "Adam Smith",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In which year was the Battle of Hastings?",
        "answers": [
          {
            "text": "1066",
            "correct": true
          },
          {
            "text": "1215",
            "correct": false
          },
          {
            "text": "1415",
            "correct": false
          },
          {
            "text": "1588",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Terracotta Army was built for which emperor?",
        "answers": [
          {
            "text": "Qin Shi Huang",
            "correct": true
          },
          {
            "text": "Kublai Khan",
            "correct": false
          },
          {
            "text": "Emperor Wu",
            "correct": false
          },
          {
            "text": "Sun Yat-sen",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who led the Haitian Revolution?",
        "answers": [
          {
            "text": "Toussaint Louverture",
            "correct": true
          },
          {
            "text": "Simón Bolívar",
            "correct": false
          },
          {
            "text": "Napoleon Bonaparte",
            "correct": false
          },
          {
            "text": "Henri Christophe",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Machu Picchu was built by which civilisation?",
        "answers": [
          {
            "text": "The Inca",
            "correct": true
          },
          {
            "text": "The Aztec",
            "correct": false
          },
          {
            "text": "The Maya",
            "correct": false
          },
          {
            "text": "The Olmec",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The city of Constantinople is now called what?",
        "answers": [
          {
            "text": "Istanbul",
            "correct": true
          },
          {
            "text": "Athens",
            "correct": false
          },
          {
            "text": "Ankara",
            "correct": false
          },
          {
            "text": "Baghdad",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who was the Aztec ruler when the Spanish arrived in 1519?",
        "answers": [
          {
            "text": "Moctezuma II",
            "correct": true
          },
          {
            "text": "Atahualpa",
            "correct": false
          },
          {
            "text": "Huayna Capac",
            "correct": false
          },
          {
            "text": "Pachacuti",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Renaissance began in which country?",
        "answers": [
          {
            "text": "Italy",
            "correct": true
          },
          {
            "text": "France",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Greece",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Roman Colosseum is in which city?",
        "answers": [
          {
            "text": "Rome",
            "correct": true
          },
          {
            "text": "Athens",
            "correct": false
          },
          {
            "text": "Istanbul",
            "correct": false
          },
          {
            "text": "Paris",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who was the British prime minister for most of the Second World War?",
        "answers": [
          {
            "text": "Winston Churchill",
            "correct": true
          },
          {
            "text": "Neville Chamberlain",
            "correct": false
          },
          {
            "text": "Clement Attlee",
            "correct": false
          },
          {
            "text": "Margaret Thatcher",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Statue of Liberty was a gift from which country?",
        "answers": [
          {
            "text": "France",
            "correct": true
          },
          {
            "text": "Britain",
            "correct": false
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Italy",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who is commonly credited with inventing the light bulb?",
        "answers": [
          {
            "text": "Thomas Edison",
            "correct": true
          },
          {
            "text": "Nikola Tesla",
            "correct": false
          },
          {
            "text": "Alexander Graham Bell",
            "correct": false
          },
          {
            "text": "Benjamin Franklin",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Mahatma Gandhi led the independence movement in which country?",
        "answers": [
          {
            "text": "India",
            "correct": true
          },
          {
            "text": "Pakistan",
            "correct": false
          },
          {
            "text": "South Africa",
            "correct": false
          },
          {
            "text": "Kenya",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Vikings originally came from which region?",
        "answers": [
          {
            "text": "Scandinavia",
            "correct": true
          },
          {
            "text": "Germany",
            "correct": false
          },
          {
            "text": "Russia",
            "correct": false
          },
          {
            "text": "Scotland",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Titanic sank in which ocean?",
        "answers": [
          {
            "text": "The Atlantic Ocean",
            "correct": true
          },
          {
            "text": "The Pacific Ocean",
            "correct": false
          },
          {
            "text": "The Indian Ocean",
            "correct": false
          },
          {
            "text": "The Arctic Ocean",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who was assassinated in Dallas in 1963?",
        "answers": [
          {
            "text": "John F. Kennedy",
            "correct": true
          },
          {
            "text": "Martin Luther King Jr.",
            "correct": false
          },
          {
            "text": "Abraham Lincoln",
            "correct": false
          },
          {
            "text": "Robert Kennedy",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "In which year did Christopher Columbus reach the Americas?",
        "answers": [
          {
            "text": "1492",
            "correct": true
          },
          {
            "text": "1066",
            "correct": false
          },
          {
            "text": "1776",
            "correct": false
          },
          {
            "text": "1588",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Cold War was mainly between the United States and which country?",
        "answers": [
          {
            "text": "The Soviet Union",
            "correct": true
          },
          {
            "text": "China",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          },
          {
            "text": "Japan",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Battle of Waterloo was fought in which year?",
        "answers": [
          {
            "text": "1815",
            "correct": true
          },
          {
            "text": "1789",
            "correct": false
          },
          {
            "text": "1914",
            "correct": false
          },
          {
            "text": "1945",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who was the first female Prime Minister of the United Kingdom?",
        "answers": [
          {
            "text": "Margaret Thatcher",
            "correct": true
          },
          {
            "text": "Theresa May",
            "correct": false
          },
          {
            "text": "Queen Victoria",
            "correct": false
          },
          {
            "text": "Angela Merkel",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "In which year did the Soviet Union collapse?",
        "answers": [
          {
            "text": "1991",
            "correct": true
          },
          {
            "text": "1989",
            "correct": false
          },
          {
            "text": "1994",
            "correct": false
          },
          {
            "text": "1985",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Hundred Years' War was mainly between England and which country?",
        "answers": [
          {
            "text": "France",
            "correct": true
          },
          {
            "text": "Spain",
            "correct": false
          },
          {
            "text": "Germany",
            "correct": false
          },
          {
            "text": "Scotland",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Hannibal crossed the Alps with elephants to fight which people?",
        "answers": [
          {
            "text": "The Romans",
            "correct": true
          },
          {
            "text": "The Greeks",
            "correct": false
          },
          {
            "text": "The Persians",
            "correct": false
          },
          {
            "text": "The Egyptians",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who was the principal author of the US Declaration of Independence?",
        "answers": [
          {
            "text": "Thomas Jefferson",
            "correct": true
          },
          {
            "text": "George Washington",
            "correct": false
          },
          {
            "text": "Benjamin Franklin",
            "correct": false
          },
          {
            "text": "John Adams",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who founded the Mongol Empire?",
        "answers": [
          {
            "text": "Genghis Khan",
            "correct": true
          },
          {
            "text": "Kublai Khan",
            "correct": false
          },
          {
            "text": "Attila the Hun",
            "correct": false
          },
          {
            "text": "Tamerlane",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The Spanish Armada sailed against England in which year?",
        "answers": [
          {
            "text": "1588",
            "correct": true
          },
          {
            "text": "1492",
            "correct": false
          },
          {
            "text": "1666",
            "correct": false
          },
          {
            "text": "1815",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In which year did India gain independence?",
        "answers": [
          {
            "text": "1947",
            "correct": true
          },
          {
            "text": "1945",
            "correct": false
          },
          {
            "text": "1950",
            "correct": false
          },
          {
            "text": "1939",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who painted the ceiling of the Sistine Chapel?",
        "answers": [
          {
            "text": "Michelangelo",
            "correct": true
          },
          {
            "text": "Leonardo da Vinci",
            "correct": false
          },
          {
            "text": "Raphael",
            "correct": false
          },
          {
            "text": "Donatello",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The D-Day landings took place in which year?",
        "answers": [
          {
            "text": "1944",
            "correct": true
          },
          {
            "text": "1940",
            "correct": false
          },
          {
            "text": "1942",
            "correct": false
          },
          {
            "text": "1945",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who wrote The Prince?",
        "answers": [
          {
            "text": "Niccolò Machiavelli",
            "correct": true
          },
          {
            "text": "Thomas More",
            "correct": false
          },
          {
            "text": "Voltaire",
            "correct": false
          },
          {
            "text": "John Locke",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Julius Caesar was assassinated in which year?",
        "answers": [
          {
            "text": "44 BC",
            "correct": true
          },
          {
            "text": "27 BC",
            "correct": false
          },
          {
            "text": "79 AD",
            "correct": false
          },
          {
            "text": "31 BC",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who was the last tsar of Russia?",
        "answers": [
          {
            "text": "Nicholas II",
            "correct": true
          },
          {
            "text": "Peter the Great",
            "correct": false
          },
          {
            "text": "Alexander II",
            "correct": false
          },
          {
            "text": "Ivan the Terrible",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  },
  {
    "id": "south-africa",
    "name": "South Africa",
    "emoji": "🇿🇦",
    "questions": [
      {
        "question": "Table Mountain overlooks which city?",
        "answers": [
          {
            "text": "Cape Town",
            "correct": true
          },
          {
            "text": "Durban",
            "correct": false
          },
          {
            "text": "Pretoria",
            "correct": false
          },
          {
            "text": "Johannesburg",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the currency?",
        "answers": [
          {
            "text": "The rand",
            "correct": true
          },
          {
            "text": "The pula",
            "correct": false
          },
          {
            "text": "The dollar",
            "correct": false
          },
          {
            "text": "The naira",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which ocean lies off Durban?",
        "answers": [
          {
            "text": "The Indian Ocean",
            "correct": true
          },
          {
            "text": "The Atlantic Ocean",
            "correct": false
          },
          {
            "text": "The Pacific Ocean",
            "correct": false
          },
          {
            "text": "The Arctic Ocean",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "How many provinces are there?",
        "answers": [
          {
            "text": "9",
            "correct": true
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "7",
            "correct": false
          },
          {
            "text": "12",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Springboks play which sport?",
        "answers": [
          {
            "text": "Rugby union",
            "correct": true
          },
          {
            "text": "Cricket",
            "correct": false
          },
          {
            "text": "Football",
            "correct": false
          },
          {
            "text": "Tennis",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Proteas play which sport?",
        "answers": [
          {
            "text": "Cricket",
            "correct": true
          },
          {
            "text": "Rugby",
            "correct": false
          },
          {
            "text": "Football",
            "correct": false
          },
          {
            "text": "Basketball",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Who had a global hit with Water?",
        "answers": [
          {
            "text": "Tyla",
            "correct": true
          },
          {
            "text": "Beyoncé",
            "correct": false
          },
          {
            "text": "Rihanna",
            "correct": false
          },
          {
            "text": "Adele",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Lucky Dube was best known for which style of music?",
        "answers": [
          {
            "text": "Reggae",
            "correct": true
          },
          {
            "text": "Opera",
            "correct": false
          },
          {
            "text": "Kwaito",
            "correct": false
          },
          {
            "text": "Jazz",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Nelson Mandela became president in which year?",
        "answers": [
          {
            "text": "1994",
            "correct": true
          },
          {
            "text": "1990",
            "correct": false
          },
          {
            "text": "1984",
            "correct": false
          },
          {
            "text": "2000",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Freedom Day is on which date?",
        "answers": [
          {
            "text": "27 April",
            "correct": true
          },
          {
            "text": "16 June",
            "correct": false
          },
          {
            "text": "21 March",
            "correct": false
          },
          {
            "text": "24 September",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Youth Day remembers events in which year?",
        "answers": [
          {
            "text": "1976",
            "correct": true
          },
          {
            "text": "1960",
            "correct": false
          },
          {
            "text": "1994",
            "correct": false
          },
          {
            "text": "1948",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Robben Island lies off the coast of which city?",
        "answers": [
          {
            "text": "Cape Town",
            "correct": true
          },
          {
            "text": "Durban",
            "correct": false
          },
          {
            "text": "Gqeberha",
            "correct": false
          },
          {
            "text": "East London",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "The Union Buildings are in which city?",
        "answers": [
          {
            "text": "Pretoria",
            "correct": true
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Bloemfontein",
            "correct": false
          },
          {
            "text": "Johannesburg",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the holiday on 21 March called?",
        "answers": [
          {
            "text": "Human Rights Day",
            "correct": true
          },
          {
            "text": "Freedom Day",
            "correct": false
          },
          {
            "text": "Youth Day",
            "correct": false
          },
          {
            "text": "Heritage Day",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the nickname of the men's national football team?",
        "answers": [
          {
            "text": "Bafana Bafana",
            "correct": true
          },
          {
            "text": "Banyana Banyana",
            "correct": false
          },
          {
            "text": "The Springboks",
            "correct": false
          },
          {
            "text": "The Proteas",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "What is the nickname of the women's national football team?",
        "answers": [
          {
            "text": "Banyana Banyana",
            "correct": true
          },
          {
            "text": "Bafana Bafana",
            "correct": false
          },
          {
            "text": "The Proteas",
            "correct": false
          },
          {
            "text": "The Springboks",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Kaizer Chiefs are also known as what?",
        "answers": [
          {
            "text": "Amakhosi",
            "correct": true
          },
          {
            "text": "The Buccaneers",
            "correct": false
          },
          {
            "text": "The Brazilians",
            "correct": false
          },
          {
            "text": "Matsatsantsa",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Orlando Pirates are also known as what?",
        "answers": [
          {
            "text": "The Buccaneers",
            "correct": true
          },
          {
            "text": "Amakhosi",
            "correct": false
          },
          {
            "text": "The Brazilians",
            "correct": false
          },
          {
            "text": "The Glamour Boys",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Johannesburg is in which province?",
        "answers": [
          {
            "text": "Gauteng",
            "correct": true
          },
          {
            "text": "Limpopo",
            "correct": false
          },
          {
            "text": "Mpumalanga",
            "correct": false
          },
          {
            "text": "North West",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which political party did Nelson Mandela lead?",
        "answers": [
          {
            "text": "The African National Congress",
            "correct": true
          },
          {
            "text": "The DA",
            "correct": false
          },
          {
            "text": "The PAC",
            "correct": false
          },
          {
            "text": "The IFP",
            "correct": false
          }
        ],
        "difficulty": "easy"
      },
      {
        "question": "Which city is the legislative capital?",
        "answers": [
          {
            "text": "Cape Town",
            "correct": true
          },
          {
            "text": "Pretoria",
            "correct": false
          },
          {
            "text": "Bloemfontein",
            "correct": false
          },
          {
            "text": "Johannesburg",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which city is the administrative capital?",
        "answers": [
          {
            "text": "Pretoria",
            "correct": true
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Durban",
            "correct": false
          },
          {
            "text": "Bloemfontein",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Kruger National Park is famous for protecting which animals?",
        "answers": [
          {
            "text": "The Big Five",
            "correct": true
          },
          {
            "text": "Penguins",
            "correct": false
          },
          {
            "text": "Polar bears",
            "correct": false
          },
          {
            "text": "Kangaroos",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "OR Tambo International Airport serves which city?",
        "answers": [
          {
            "text": "Johannesburg",
            "correct": true
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Durban",
            "correct": false
          },
          {
            "text": "Gqeberha",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Cape Town’s Atlantic Seaboard faces which ocean?",
        "answers": [
          {
            "text": "The Atlantic Ocean",
            "correct": true
          },
          {
            "text": "The Indian Ocean",
            "correct": false
          },
          {
            "text": "The Pacific Ocean",
            "correct": false
          },
          {
            "text": "The Mediterranean Sea",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which desert stretches across Botswana, Namibia and the Northern Cape?",
        "answers": [
          {
            "text": "The Kalahari",
            "correct": true
          },
          {
            "text": "The Sahara",
            "correct": false
          },
          {
            "text": "The Namib",
            "correct": false
          },
          {
            "text": "The Gobi",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which province has the most people?",
        "answers": [
          {
            "text": "Gauteng",
            "correct": true
          },
          {
            "text": "KwaZulu-Natal",
            "correct": false
          },
          {
            "text": "Western Cape",
            "correct": false
          },
          {
            "text": "Limpopo",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who captained the Springboks to the 2019 Rugby World Cup?",
        "answers": [
          {
            "text": "Siya Kolisi",
            "correct": true
          },
          {
            "text": "François Pienaar",
            "correct": false
          },
          {
            "text": "John Smit",
            "correct": false
          },
          {
            "text": "Schalk Burger",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "The Soweto Derby is between Orlando Pirates and which club?",
        "answers": [
          {
            "text": "Kaizer Chiefs",
            "correct": true
          },
          {
            "text": "Mamelodi Sundowns",
            "correct": false
          },
          {
            "text": "SuperSport United",
            "correct": false
          },
          {
            "text": "Stellenbosch",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "District 9 is set in which city?",
        "answers": [
          {
            "text": "Johannesburg",
            "correct": true
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Lagos",
            "correct": false
          },
          {
            "text": "Nairobi",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Invictus tells the story of which team?",
        "answers": [
          {
            "text": "The Springboks",
            "correct": true
          },
          {
            "text": "Bafana Bafana",
            "correct": false
          },
          {
            "text": "The Proteas",
            "correct": false
          },
          {
            "text": "Kaizer Chiefs",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which Oscar-winning film follows a young man in Soweto?",
        "answers": [
          {
            "text": "Tsotsi",
            "correct": true
          },
          {
            "text": "District 9",
            "correct": false
          },
          {
            "text": "Invictus",
            "correct": false
          },
          {
            "text": "Sarafina!",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Trevor Noah hosted which American show?",
        "answers": [
          {
            "text": "The Daily Show",
            "correct": true
          },
          {
            "text": "Saturday Night Live",
            "correct": false
          },
          {
            "text": "The Tonight Show",
            "correct": false
          },
          {
            "text": "Late Night",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Ladysmith Black Mambazo appeared on which Paul Simon album?",
        "answers": [
          {
            "text": "Graceland",
            "correct": true
          },
          {
            "text": "Thriller",
            "correct": false
          },
          {
            "text": "Abbey Road",
            "correct": false
          },
          {
            "text": "Lemonade",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Mandoza’s hit Nkalakatha is an example of which style?",
        "answers": [
          {
            "text": "Kwaito",
            "correct": true
          },
          {
            "text": "Amapiano",
            "correct": false
          },
          {
            "text": "Jazz",
            "correct": false
          },
          {
            "text": "Reggae",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Gqom began in which city?",
        "answers": [
          {
            "text": "Durban",
            "correct": true
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Johannesburg",
            "correct": false
          },
          {
            "text": "Pretoria",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "On which date in 1976 did the Soweto uprising begin?",
        "answers": [
          {
            "text": "16 June",
            "correct": true
          },
          {
            "text": "21 March",
            "correct": false
          },
          {
            "text": "27 April",
            "correct": false
          },
          {
            "text": "9 August",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who chaired the Truth and Reconciliation Commission?",
        "answers": [
          {
            "text": "Desmond Tutu",
            "correct": true
          },
          {
            "text": "Nelson Mandela",
            "correct": false
          },
          {
            "text": "F.W. de Klerk",
            "correct": false
          },
          {
            "text": "Thabo Mbeki",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Who became president after Nelson Mandela?",
        "answers": [
          {
            "text": "Thabo Mbeki",
            "correct": true
          },
          {
            "text": "Jacob Zuma",
            "correct": false
          },
          {
            "text": "Cyril Ramaphosa",
            "correct": false
          },
          {
            "text": "Kgalema Motlanthe",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Lucas Radebe spent most of his European career at which club?",
        "answers": [
          {
            "text": "Leeds United",
            "correct": true
          },
          {
            "text": "Arsenal",
            "correct": false
          },
          {
            "text": "Chelsea",
            "correct": false
          },
          {
            "text": "Manchester City",
            "correct": false
          }
        ],
        "difficulty": "medium"
      },
      {
        "question": "Which city is the judicial capital?",
        "answers": [
          {
            "text": "Bloemfontein",
            "correct": true
          },
          {
            "text": "Pretoria",
            "correct": false
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Johannesburg",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the southernmost point of the African continent?",
        "answers": [
          {
            "text": "Cape Agulhas",
            "correct": true
          },
          {
            "text": "Cape Point",
            "correct": false
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "Durban",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Port Elizabeth is now officially called what?",
        "answers": [
          {
            "text": "Gqeberha",
            "correct": true
          },
          {
            "text": "Mbombela",
            "correct": false
          },
          {
            "text": "Polokwane",
            "correct": false
          },
          {
            "text": "Makhanda",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Which is the longest river?",
        "answers": [
          {
            "text": "The Orange River",
            "correct": true
          },
          {
            "text": "The Vaal River",
            "correct": false
          },
          {
            "text": "The Limpopo River",
            "correct": false
          },
          {
            "text": "The Tugela River",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The name Soweto comes from which phrase?",
        "answers": [
          {
            "text": "South Western Townships",
            "correct": true
          },
          {
            "text": "South West Territory",
            "correct": false
          },
          {
            "text": "Southern West Town",
            "correct": false
          },
          {
            "text": "Soweto Valley",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Polokwane is the capital of which province?",
        "answers": [
          {
            "text": "Limpopo",
            "correct": true
          },
          {
            "text": "Mpumalanga",
            "correct": false
          },
          {
            "text": "North West",
            "correct": false
          },
          {
            "text": "Free State",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "King Shaka International Airport serves which city?",
        "answers": [
          {
            "text": "Durban",
            "correct": true
          },
          {
            "text": "Johannesburg",
            "correct": false
          },
          {
            "text": "Cape Town",
            "correct": false
          },
          {
            "text": "East London",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who reached the 2018 Wimbledon men's singles final?",
        "answers": [
          {
            "text": "Kevin Anderson",
            "correct": true
          },
          {
            "text": "Wayne Ferreira",
            "correct": false
          },
          {
            "text": "Lloyd Harris",
            "correct": false
          },
          {
            "text": "Raven Klaasen",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "How many men's Rugby World Cups have the Springboks won?",
        "answers": [
          {
            "text": "4",
            "correct": true
          },
          {
            "text": "2",
            "correct": false
          },
          {
            "text": "3",
            "correct": false
          },
          {
            "text": "5",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who kicked the winning drop goal in the 1995 Rugby World Cup final?",
        "answers": [
          {
            "text": "Joel Stransky",
            "correct": true
          },
          {
            "text": "François Pienaar",
            "correct": false
          },
          {
            "text": "Naas Botha",
            "correct": false
          },
          {
            "text": "Handré Pollard",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Wayde van Niekerk won Olympic gold in which event?",
        "answers": [
          {
            "text": "The 400 metres",
            "correct": true
          },
          {
            "text": "The 100 metres",
            "correct": false
          },
          {
            "text": "The 200 metres",
            "correct": false
          },
          {
            "text": "The 800 metres",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Hugh Masekela had a 1968 hit with which instrumental?",
        "answers": [
          {
            "text": "Grazing in the Grass",
            "correct": true
          },
          {
            "text": "Mannenberg",
            "correct": false
          },
          {
            "text": "Pata Pata",
            "correct": false
          },
          {
            "text": "The Click Song",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "What is the DJ Black Coffee’s real name?",
        "answers": [
          {
            "text": "Nkosinathi Maphumulo",
            "correct": true
          },
          {
            "text": "Kiernan Forbes",
            "correct": false
          },
          {
            "text": "Themba Sekowe",
            "correct": false
          },
          {
            "text": "Sizwe Dhlomo",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Nelson Mandela’s prison number is often remembered as what?",
        "answers": [
          {
            "text": "46664",
            "correct": true
          },
          {
            "text": "27464",
            "correct": false
          },
          {
            "text": "19644",
            "correct": false
          },
          {
            "text": "4664",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Steve Biko was a leader of which movement?",
        "answers": [
          {
            "text": "Black Consciousness",
            "correct": true
          },
          {
            "text": "The Defiance Campaign",
            "correct": false
          },
          {
            "text": "The Great Trek",
            "correct": false
          },
          {
            "text": "Umkhonto we Sizwe",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "In which year did the Sharpeville massacre take place?",
        "answers": [
          {
            "text": "1960",
            "correct": true
          },
          {
            "text": "1948",
            "correct": false
          },
          {
            "text": "1976",
            "correct": false
          },
          {
            "text": "1990",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "The 1879 Battle of Isandlwana was won by which kingdom?",
        "answers": [
          {
            "text": "The Zulu Kingdom",
            "correct": true
          },
          {
            "text": "The British Empire",
            "correct": false
          },
          {
            "text": "The Boer Republics",
            "correct": false
          },
          {
            "text": "The Xhosa Kingdom",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who coached the side that won the 1996 Africa Cup of Nations?",
        "answers": [
          {
            "text": "Clive Barker",
            "correct": true
          },
          {
            "text": "Pitso Mosimane",
            "correct": false
          },
          {
            "text": "Carlos Queiroz",
            "correct": false
          },
          {
            "text": "Gordon Igesund",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Who is the men's national football team's all-time top scorer?",
        "answers": [
          {
            "text": "Benni McCarthy",
            "correct": true
          },
          {
            "text": "Shaun Bartlett",
            "correct": false
          },
          {
            "text": "Siphiwe Tshabalala",
            "correct": false
          },
          {
            "text": "Katlego Mphela",
            "correct": false
          }
        ],
        "difficulty": "hard"
      },
      {
        "question": "Doctor Khumalo is a legend of which club?",
        "answers": [
          {
            "text": "Kaizer Chiefs",
            "correct": true
          },
          {
            "text": "Orlando Pirates",
            "correct": false
          },
          {
            "text": "Mamelodi Sundowns",
            "correct": false
          },
          {
            "text": "Jomo Cosmos",
            "correct": false
          }
        ],
        "difficulty": "hard"
      }
    ]
  }
];
