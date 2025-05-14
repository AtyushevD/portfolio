export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "Yandex.Market",
    position: "Frontend-разработчик",
    period: "Сентябрь 2022 — Март 2025",
    description: [
      "Оптимизировал CI/CD процессы",
      "Рефакторинг легаси-кода с переносом логики на бэкенд",
      "Внедрение микрофронтендов и монорепозитория",
      "Написание продуктового кода под новые контракты API",
      "Оптимизация времени прохождения тестов и их стабильность",
    ],
    tags: ["TypeScript", "React", "Node.js", "Redux", "Jest", "Testplane"],
  }
];