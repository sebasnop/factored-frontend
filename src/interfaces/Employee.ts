import type { Skills } from './Skills'

interface Employee {
  city: string;
  country: string;
  email: string;
  english: string;
  id: number;
  name: string;
  position: string;
  skills: Skills
}

export type { Employee }