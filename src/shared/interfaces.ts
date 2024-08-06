export interface IusersAPI {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItems': number;
  id: number;
  email: string;
  roles: string[];
  password: string;
  articles: string[];
  userIdentifier: string;
}

export interface Iarticle {
  id: number;
  title: string;
  visible: boolean;
  createdAt: string; // Assuming the date format remains as "dd/MM/yyyy"
  category: {
    id: number;
    name: string;
  };
  author: {
    email: string;
  };
}

//Interface pour l'authentification

export interface IUser {
  email: string;
  password: string;
}
