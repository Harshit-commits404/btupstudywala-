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
    isCommon: true,
    commonLabel: 'Common BTEUP Semester',
    commonBadge: 'Semester 1 • Common Across Branches',
    statusText: 'Available',
    description: 'Common foundational curriculum across all BTEUP polytechnic engineering streams (CSE, Mechanical, Electronics, Instrumentation, and IT).',
    tagline: 'First Year • Common Across Branches',
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

/**
 * Get all semesters structured for a specific engineering branch.
 * Semester 1 is COMMON and active across all branches.
 *
 * @param {string} [branchId='cse']
 * @returns {Array} List of semester objects tailored for the branch
 */
export const getSemestersByBranch = (branchId = 'cse') => {
  const cleanBranch = String(branchId || 'cse').toLowerCase().trim();
  const normalizedBranch = 
    cleanBranch === 'me' ? 'mechanical' :
    cleanBranch === 'ece' ? 'electronics' :
    cleanBranch === 'ic' ? 'instrumentation' :
    cleanBranch === 'it' ? 'information-technology' :
    cleanBranch;

  const isCse = normalizedBranch === 'cse';

  return semestersData.map((sem) => {
    // Semester 1 is ALWAYS common and available
    if (sem.number === 1) {
      return {
        ...sem,
        isAvailable: true,
        isCommon: true,
        commonLabel: 'Common BTEUP Semester',
        commonBadge: 'Semester 1 • Common Across Branches',
        statusText: 'Available Now',
      };
    }

    // Even semesters are always Even Cycle (Coming Soon)
    if (!sem.isOdd) {
      return {
        ...sem,
        isAvailable: false,
        statusText: 'Coming Soon',
      };
    }

    // Odd semesters 3 and 5 are available for CSE, and in review for other branches
    if (isCse) {
      return {
        ...sem,
        isAvailable: true,
        statusText: 'Available',
      };
    }

    return {
      ...sem,
      isAvailable: false,
      statusText: 'Curriculum in Review',
      description: `Branch-specific ${sem.title} curriculum notes are currently under preparation for this stream.`,
    };
  });
};

/**
 * Get semester configuration by semester ID, optionally tailored for a branch.
 * Semester 1 is always returned as common and available.
 *
 * @param {number|string} id
 * @param {string} [branchId='cse']
 * @returns {Object|null}
 */
export const getSemesterById = (id, branchId = 'cse') => {
  const numericId = parseInt(id, 10);
  const branchSemesters = getSemestersByBranch(branchId);
  return branchSemesters.find((s) => s.id === numericId || s.number === numericId) || null;
};

export {
  COMMON_SEMESTER_1,
  branchSubjects,
  semester1Subjects,
  semester3Subjects,
  semester5Subjects,
  subjectsData,
  getSubjectsBySemester,
  getSubjectById,
} from './subjectsData.js';




