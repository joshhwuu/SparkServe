import louise_event_helper from '../assets/louise_event_helper.png';
import louise_beach from '../assets/louise_beach.png';
import louise from '../assets/louise.png';

import max from '../assets/max.png';
import max_babysitter from '../assets/louise_babysitter.png';

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
      "JavaScript", "HTML", "CSS", "React", "Node.js", "SQL", "Git", "Responsive Design", "Problem Solving"
    ],
    "open_to": ["volunteering", "internship", "part-time", "full-time"],
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
    "vibe": ["love music", "social", "easy-going"],
    "experiences": [
      {
        "id": 1,
        "title": "Backstage Helper",
        "subtitle": "Calgary",
        "duration": "Weekend",
        "tags": ["Music Equipment"],
        "bullet_point": "Description of Experience 1",
        "imageUrl": louise_beach
      },
      {
        "id": 2,
        "title": "Childcare",
        "subtitle": "",
        "bullet_point": "Babysat and tutored four kids between 3 and 11 years old",
        "duration": "3 years",
        "tags": ["4 kids"],
        "imageUrl": louise_event_helper
      }
    ],
    "rejected_events": [],
    "accepted_events": [1],
    "matched_events": []
  },
  {
    "id": 2,
    "first_name": "Avery",
    "last_name": "Smith",
    "pronouns": "she/her",
    "email": "avery.smith@example.com",
    "age": "19",
    "employment": "student",
    "bio": "I'm a college sophomore passionate about environmental sustainability.",
    "postal_code": "M5J2H3",
    "location": "Vancouver",
    "skills": ["environmental advocacy", "public speaking", "research", "social media"],
    "open_to": ["volunteering", "internship", "part-time", "full-time"],
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
    "vibe": ["green loving", "community-focused", "dedicated", "outgoing", "collaborative", "open-minded"],
    "experiences": [
      {
        "id": 1,
        "title": "Campaign Helper",
        "subtitle": "Green Earth Initiative",
        "duration": "6 months",
        "tags": ["Childcare", "Babysitting", "First Aid"],
        "bullet_point": "Coordinated and led campaigns to raise awareness about climate change.",
        "imageUrl": max_babysitter
      },
      {
        "id": 2,
        "title": "Volunteer",
        "subtitle": "Local Wildlife Conservation",
        "duration": "1 year",
        "tags": ["Wildlife Protection"],
        "bullet_point": "Engaged with the community to promote wildlife conservation initiatives."
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
    "skills": ["graphic design", "illustration", "photography", "creative writing"],
    "open_to": ["volunteering", "internship", "part-time"],
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
    "vibe": ["artistic", "imaginative", "open-minded"],
    "experiences": [
      {
        "id": 1,
        "title": "Graphic Designer",
        "subtitle": "",
        "duration": "2 years",
        "tags": ["Visual Arts"],
        "bullet_point": "Worked with clients to create visually appealing and effective designs."
      },
      {
        "id": 2,
        "title": "Art Workshop",
        "subtitle": "Community Art Center",
        "duration": "1 year",
        "tags": ["Art Education"],
        "bullet_point": "Conducted workshops to inspire creativity and artistic expression in participants."
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
    "pronouns": "he/him",
    "email": "jordandavis@example.com",
    "age": "25",
    "employment": "software engineer",
    "bio": "I'm a tech enthusiast who loves coding and contributing to open-source projects. adsfas dfdas asf asd fasda d fads adsf asd",
    "postal_code": "K1P5M7",
    "location": "Vancouver",
    "imageUrl": jordan,
    "skills": ["Python", "JavaScript", "React", "Git"],
    "open_to": ["internship", "part-time", "full-time"],
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
    "vibe": ["tech-savvy", "innovative", "collaborative"],
    "experiences": [
      {
        "id": 1,
        "title": "Contributor",
        "subtitle": "GitHub Community",
        "duration": "3 years",
        "tags": ["Open Source"],
        "bullet_point": "Contributed code and collaborated with developers on various open-source projects."
      },
      {
        "id": 2,
        "title": "Software Developer",
        "subtitle": "Tech Innovations Inc.",
        "duration": "6 months",
        "tags": ["Software Development"],
        "bullet_point": "Assisted in developing and testing software solutions for clients."
      }
    ],
    "rejected_events": [1],
    "accepted_events": [],
    "matched_events": []
  }  
]
