import louise_event_helper from '../assets/louise_event_helper.png';
import louise_beach from '../assets/louise_beach.png';
import louise_babysitter from '../assets/louise_babysitter.png';
import max_gardening from '../assets/max_gardening.png';
import max_coding from '../assets/max_coding.png';
import max_food from '../assets/max_food.png';
import jordan_coding from '../assets/jordan_coding.png';
import riley_design from '../assets/riley_design.png';
import riley_arts from '../assets/riley_arts.png';
import jaden_music from '../assets/jaden_music.png';




import louise from '../assets/louise.png';
import riley from '../assets/riley.png';
import jaden from '../assets/jaden.png';
import max from '../assets/max.png';
import jordan from '../assets/jordan.png';



export const users = [
  {
    "id": 1,
    "first_name": "Jaden",
    "last_name": "Hums",
    "pronouns": "he/him",
    "email": "jadenhums51@gmail.com",
    "age": "17",
    "employment": "volunteer",
    "bio": "I'm a hard-working high school senior who loves events in Inglewood!",
    "postal_code": "V6T1X1",
    "location": "Vancouver",
    "skills": [
      "JavaScript", "HTML", "CSS", "React"
    ],
    "open_to": ["Volunteering", "Internship", "Part-time", "Full-time"],
    "imageUrl": jaden,
    "prompts": [
      {
        "id": 1,
        "question": "my weekends look like...",
        "answer": "live music with friends"
      },
      {
        "id": 2,
        "question": "my biggest strength is...",
        "answer": "I can keep the team spirit up in a hard time!"
      }
    ],
    "vibe": ["Love music", "Social", "Easy-going"],
    "experiences": [
      {
        "id": 1,
        "title": "Backstage Helper",
        "subtitle": "Calgary",
        "duration": "2 days",
        "tags": ["Music Equipment"],
        "bullet_point": "Managed 200 amps and guitars for a rock festival",
        "imageUrl": jaden_music
      },
      {
        "id": 2,
        "title": "Childcare",
        "subtitle": "Family Help",
        "bullet_point": "Babysat and tutored four kids between 3 and 11 years old",
        "duration": "3 years",
        "tags": ["4 kids"],
        "imageUrl": louise_babysitter
      }
    ],
    "rejected_events": [],
    "accepted_events": [1],
    "matched_events": []
  },
  {
    "id": 2,
    "first_name": "Max",
    "last_name": "Smith",
    "pronouns": "he/him",
    "email": "max.smith@example.com",
    "age": "17",
    "employment": "student",
    "bio": "I'm a college sophomore passionate about tech, machinery, and sustainability.",
    "postal_code": "M5J2H3",
    "location": "Vancouver, BC",
    "skills": ["Nature advocacy", "Public Speaking", "Research"],
      "open_to": ["Volunteering", "Internship", "Part-time"],
      "imageUrl": max,
    "prompts": [
      {
        "id": 1,
        "question": "my weekends look like...",
        "answer": "attending climate change awareness events"
      },
      {
        "id": 2,
        "question": "my biggest strength is...",
        "answer": "connecting with diverse groups of people"
      }
    ],
    "vibe": ["Innovation Junkie", "Tech for Good", "Adventure Seeker"],
    "experiences": [
      {
        "id": 1,
        "title": "Garden Helper",
        "subtitle": "Green Earth Initiative",
        "duration": "8 months",
        "tags": ["Gardening", "Sustainability", "Nature"],
        "bullet_point": "Dedicated over 100 volunteer hours to Terra Nova Garden, actively participating in tasks such as planting, weeding, and harvesting.",
        "imageUrl": max_gardening,
      },
      {
        "id": 2,
        "title": "Code Tutor",
        "subtitle": "Freelance",
        "duration": "3 years",
        "tags": ["Coding", "Tutoring", "Working with Children"],
        "bullet_point": "Mentored aspiring coders, providing personalized tutoring sessions in programming languages such as Python and JavaScript to enhance their coding skills.",
        "imageUrl": max_coding
      },
      {
        "id": 3,
        "title": "Food Service",
        "subtitle": "The Door is Open",
        "duration": "1 month",
        "tags": ["Food Charity", "Community Service", "Compassion"],
        "bullet_point": "Served over 500 nutritious meals to community members in need, fostering a sense of warmth and inclusion.",
        "imageUrl": max_food
      }
    ],
    "rejected_events": [],
    "accepted_events": [],
    "matched_events": []
  },
  {
    "id": 3,
    "first_name": "Riley",
    "last_name": "Nguyen",
    "pronouns": "they/them",
    "email": "riley.nguyen@example.com",
    "age": "22",
    "employment": "freelancer",
    "bio": "I'm a creative soul who enjoys bringing ideas to life through art and design.",
    "postal_code": "H2X1Y8",
    "location": "Vancouver",
    "skills": ["Graphic design", "Illustration", "Photography"],
    "imageUrl": riley,
    "open_to": ["Volunteering", "Internship"],
    "prompts": [
      {
        "id": 1,
        "question": "my weekends look like...",
        "answer": "exploring new art exhibitions and creating my own pieces"
      },
      {
        "id": 2,
        "question": "my biggest strength is...",
        "answer": "translating emotions into visual storytelling"
      }
    ],
    "vibe": ["Artistic", "Imaginative", "Open-minded"],
    "experiences": [
      {
        "id": 1,
        "title": "Graphic Designer",
        "subtitle": "",
        "duration": "2 years",
        "tags": ["Visual Arts"],
        "bullet_point": "Worked with clients to create visually appealing and effective designs.",
        "imageUrl": riley_design
      },
      {
        "id": 2,
        "title": "Art Workshop",
        "subtitle": "Community Art Center",
        "duration": "1 year",
        "tags": ["Art Education"],
        "bullet_point": "Conducted workshops to inspire creativity and artistic expression in participants.",
        "imageUrl": riley_arts
      }
    ],
    "rejected_events": [2],
    "accepted_events": [3],
    "matched_events": []
  },
  {
    "id": 4,
    "first_name": "Jordan",
    "last_name": "Davis",
    "pronouns": "she/her",
    "email": "jordandavis@example.com",
    "age": "25",
    "employment": "software engineer",
    "bio": "I'm a tech enthusiast who loves coding and contributing to open-source projects.",
    "postal_code": "K1P5M7",
    "location": "Vancouver",
    "skills": ["Python", "JavaScript", "React", "Git"],
    "imageUrl": jordan,
    "open_to": ["Volunteering", "Internship", "Full-time"],
    "prompts": [
      {
        "id": 1,
        "question": "my weekends look like...",
        "answer": "coding new features for personal projects and collaborating on GitHub"
      },
      {
        "id": 2,
        "question": "my biggest strength is...",
        "answer": "problem-solving and debugging complex issues"
      }
    ],
    "vibe": ["Tech-savvy", "Innovative", "Collaborative"],
    "experiences": [
      {
        "id": 1,
        "title": "Contributor",
        "subtitle": "GitHub Community",
        "duration": "3 years",
        "tags": ["Open Source"],
        "bullet_point": "Contributed code and collaborated with developers on various open-source projects.",
        "imageUrl": jordan_coding
      },
      {
        "id": 2,
        "title": "Software Dev",
        "subtitle": "Tech Innovations Inc.",
        "duration": "6 months",
        "tags": ["Software Development"],
        "bullet_point": "Assisted in developing and testing software solutions for clients.",
        "imageUrl": max_coding
      }
    ],
    "rejected_events": [1],
    "accepted_events": [],
    "matched_events": []
  },
  {
    "id": 5,
    "first_name": "Louise",
    "last_name": "Arora",
    "pronouns": "she/her",
    "email": "louise@gmail.com",
    "age": "17",
    "employment": "volunteer",
    "bio": "Lively high school sophomore who loves events in Van!",
    "postal_code": "V6T1X1",
    "location": "Vancouver",
    "skills": ["Recycling" , "Excel", "Childcare"],
      "open_to": ["Volunteering", "Internship", "Part-time"],
      "imageUrl": louise,
    "prompts": [
      {
        "id": 1,
        "question": "my weekends look like...",
        "answer": "live music with friends"
      },
      {
        "id": 2,
        "question": "my biggest strength is...",
        "answer": "I can keep the team spirit up in a hard time!"
      }
    ],
    "vibe": ["Chatty", "Social", "Easy-going"],
    "experiences": [
      {
        "id": 1,
        "title": "Beach Cleanup",
        "subtitle": "SurfGuardians",
        "duration": "1 week",
        "tags": ["Environment", "Community Service", "Marine Protection"],
        "bullet_point": "Volunteered with a non-profit to clean Wreck Beach at UBC, removing 300+ pounds of plastic.",
        "imageUrl": louise_beach
      },
      {
        "id": 2,
        "title": "Babysitter",
        "subtitle": "Freelance",
        "bullet_point": "Provided top-notch childcare services for families, creating a safe and engaging environment for children to learn and play.",
        "duration": "3 years",
        "tags": ["4 Kids", "Childcare", "First Aid"],
        "imageUrl": louise_babysitter
      },
      {
        "id": 3,
        "title": 'Event Helper',
        "subtitle": "Vancouver Sun Run",
        "bullet_point": 'Coordinated the hydration station, ensuring all participants stayed refreshed during the Vancouver Sun Run marathon, contributing to the team\'s recognition for outstanding volunteer support.\n',
        "duration": '1 day',
        "tags": ['Marathon Support', 'Community', 'Teamwork'],
        "imageUrl": louise_event_helper
      },
    ],
    "rejected_events": [],
    "accepted_events": [1],
    "matched_events": []
  },
]
