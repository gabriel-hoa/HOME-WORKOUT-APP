import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}
export const user: User = {
  name: "Gabriel Araujo",
  profile: require("../assets/images/avatar.jpeg"),
};

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Agachamento",
  },
  {
    id: 2,
    name: "Flexão Abdominal",
  },
  {
    id: 3,
    name: "Flexão de Braços",
  },
  {
    id: 4,
    name: "Fortalecimento Muscular",
  },
  {
    id: 5,
    name: "Panturrilha",
  },
 
];

interface Exercise {
  id: number;
  name: string;
  time: string;
  image: ImageSourcePropType;
  set: number;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Agachamento",
    time: "30 s",
    image: require("../assets/images/exercises/Squats.jpeg"),
    set:2
  },
  {
    id: 2,
    name: "Flexão de braços",
    time: "30 s",
    image: require("../assets/images/exercises/Pushup.jpeg"),
    set:2
  },
  {
    id: 3,
    name: "Flexão Abdominal",
    time: "30 s",
    image: require("../assets/images/exercises/Jumping.jpeg"),
    set:2
  },
];

export interface Workout {
  id: number;
  name: string;
  coach: string;
  image: ImageSourcePropType;
  exercises: Exercise[];
  rating: number;
  minutes: number;
  calories: number;
  description: string;
}

export const workouts: Workout[] = [
  {
    id: 1,
    name: "Agachamento",
    coach: "Roberta Carbonari",
    image: require("../assets/images/workouts/Squats.jpg"),
    exercises,
    rating: 5,
    minutes: 25,
    calories: 700,
    description:
      "No agachamento, o quadril realiza uma flexão durante a fase excêntrica no movimento, isso é, na descida. O movimento aproxima a coxa do tronco durante a realização do exercício. No decorrer da fase concêntrica acontece também uma extensão de quadril, que leva o membro inferior para trás do plano sagital",
  },
  {
    id: 2,
    name: "Fortalecimento muscular",
    coach: "Paulo Muzy",
    image: require("../assets/images/workouts/fortalecimentomuscular.jpeg"),
    exercises,
    rating: 5,
    minutes: 35,
    calories: 650,
    description:
      "Tem como principal objetivo aumentar a força e a resistência da musculatura.",
  },
  {
    id: 3,
    name: "Body Pump",
    coach: "Paloma Straus",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    exercises,
    rating: 5,
    minutes: 60,
    calories: 1800,
    description:
      "movimentos tradicionais da musculação em ritmo acelerado e sincronizado com músicas agitadas.",
  },
  {
    id: 4,
    name: "Panturrilha",
    coach: "Paulo Muzy",
    image: require("../assets/images/workouts/panturrilhas.jpeg"),
    exercises,
    rating: 5,
    minutes: 12,
    calories: 200,
    description:
      "A panturrilha é uma região que deve ser exercitada para melhorar a circulação e prevenir doenças vasculares.",
  },
  {
    id: 5,
    name: "Flexão Abdominal",
    coach: "Roberta Carbonari",
    image: require("../assets/images/workouts/flexaoabdominal.jpeg"),
    exercises,
    rating: 5,
    minutes: 12,
    calories: 100,
    description:
      "Melhora a força e a resistência dos membros superiores; Melhora da capacidade de estabilização da coluna.",
  },
];

interface Plan {
  id: number;
  name: string;
  duration: string;
  image: ImageSourcePropType;
  location: string;
  rating: number;
  minutes: number;
  calories: number;
  description: string;
}

export const workoutPlans: Plan[] = [
  {
    id: 1,
    name: "Body Pump",
    duration: "8 semanas",
    location: "Home",
    image: require("../assets/images/workouts/photo-1434682966726-19ad3a76e143.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "",
  },
  {
    id: 2,
    name: "Agachamento",
    duration: "8 semanas",
    location: "Home",
    image: require("../assets/images/workouts/Squats.jpg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "",
  },
  {
    id: 3,
    name: "Fortalecimento Muscular",
    duration: "8 semanas",
    location: "Home",
    image: require("../assets/images/workouts/fortalecimentomuscular.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "",
  },
  {
    id: 4,
    name: "Flexão Abdominal",
    duration: "8 semanas",
    location: "Home",
    image: require("../assets/images/workouts/flexaoabdominal.jpeg"),
    rating: 5,
    minutes: 52,
    calories: 350,
    description:
      "",
  },
];
