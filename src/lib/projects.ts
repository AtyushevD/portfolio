export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  isNDA: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Маркетплейс для крупного ритейлера",
    description: "Разработка фронтенда для B2C-платформы с 1M+ пользователей",
    role: "Frontend-разработчик",
    technologies: ["TypeScript", "React", "Redux", "Node.js"],
    features: [
      "Оптимизация производительности",
      "Реализация микрофронтенд-архитектуры",
    ],
    isNDA: true
  },
  {
    id: "2",
    title: "Корпоративная аналитическая платформа",
    description: "Дашборды для анализа больших данных",
    role: "Frontend-разработчик",
    technologies: ["JS", "DataLens", "SQL", "ClickHouse"],
    features: [
      "Реализация сложных интерактивных графиков",
      "Оптимизация рендеринга больших датасетов",
    ],
    isNDA: true
  },
  {
    id: "3",
    title: "Инфрасруктура тестов для крупных B2C/B2B команд",
    description: "Уменьшение времени написания тестов и увелечение их стабильности",
    role: "Frontend-разработчик",
    technologies: ["TypeScript", "Jest", "Bash", "Testplane", "Webdriver"],
    features: [
      "Перевод 1000+ тестов с exports интерфейса на BDD",
      "Уменьшение количества флаки тестов практически до 0",
      "Быстрое реагирование на появление новых флаки тестов за счет алертов"
    ],
    isNDA: true
  }
];