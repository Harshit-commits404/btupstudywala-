/**
 * Semester availability configuration for BTEUP Study platform.
 *
 * Current Academic State: ODD SEMESTERS
 * - Available: 1st, 3rd, 5th Semester
 * - Coming Soon: 2nd, 4th, 6th Semester
 *
 * Note: Subject and chapter details are NOT included here.
 * Real syllabus data will be populated once provided by the project owner.
 */

export const ACADEMIC_CYCLE = {
  currentTerm: 'Odd Semesters',
  academicYear: '2025–2026',
  note: 'Odd semesters (1st, 3rd, 5th) are active. Even semesters (2nd, 4th, 6th) are coming soon.',
};

export const semestersData = [
  {
    id: 1,
    number: 1,
    title: '1st Semester',
    shortName: 'Sem 1',
    year: '1st Year',
    cycle: 'Odd Semester',
    isAvailable: true,
    isOdd: true,
    statusText: 'Available',
    description: 'Foundational curriculum for first-year polytechnic engineering diploma students.',
    tagline: 'First Year • Odd Semester',
  },
  {
    id: 2,
    number: 2,
    title: '2nd Semester',
    shortName: 'Sem 2',
    year: '1st Year',
    cycle: 'Even Semester',
    isAvailable: false,
    isOdd: false,
    statusText: 'Coming Soon',
    description: 'Second semester diploma curriculum. Available in the upcoming academic session.',
    tagline: 'First Year • Even Semester',
  },
  {
    id: 3,
    number: 3,
    title: '3rd Semester',
    shortName: 'Sem 3',
    year: '2nd Year',
    cycle: 'Odd Semester',
    isAvailable: true,
    isOdd: true,
    statusText: 'Available',
    description: 'Core specialization engineering diploma curriculum for second-year students.',
    tagline: 'Second Year • Odd Semester',
  },
  {
    id: 4,
    number: 4,
    title: '4th Semester',
    shortName: 'Sem 4',
    year: '2nd Year',
    cycle: 'Even Semester',
    isAvailable: false,
    isOdd: false,
    statusText: 'Coming Soon',
    description: 'Fourth semester diploma curriculum. Available in the upcoming academic session.',
    tagline: 'Second Year • Even Semester',
  },
  {
    id: 5,
    number: 5,
    title: '5th Semester',
    shortName: 'Sem 5',
    year: '3rd Year',
    cycle: 'Odd Semester',
    isAvailable: true,
    isOdd: true,
    statusText: 'Available',
    description: 'Advanced diploma technical curriculum for final-year polytechnic students.',
    tagline: 'Final Year • Odd Semester',
  },
  {
    id: 6,
    number: 6,
    title: '6th Semester',
    shortName: 'Sem 6',
    year: '3rd Year',
    cycle: 'Even Semester',
    isAvailable: false,
    isOdd: false,
    statusText: 'Coming Soon',
    description: 'Final semester diploma curriculum and project work. Available in the upcoming academic session.',
    tagline: 'Final Year • Even Semester',
  },
];

export const getSemesterById = (id) => {
  const numericId = parseInt(id, 10);
  return semestersData.find((s) => s.id === numericId || s.number === numericId) || null;
};

export {
  semester1Subjects,
  semester3Subjects,
  semester5Subjects,
  subjectsData,
  getSubjectsBySemester,
  getSubjectById,
} from './subjectsData.js';



