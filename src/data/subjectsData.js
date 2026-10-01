/**
 * Subjects dataset for BTEUP Study platform.
 *
 * Currently contains Semester 1 curriculum subjects.
 * Chapter, unit, and syllabus details will be populated once provided by the project owner.
 */

export const semester1Subjects = [
  {
    id: 'applied-physics-1',
    name: 'Applied Physics - 1',
    semesterId: 1,
  },
  {
    id: 'fundamental-electrical-electronics',
    name: 'Fundamental of Electrical and Electronics Engineering',
    semesterId: 1,
  },
  {
    id: 'introduction-to-it',
    name: 'Introduction to IT',
    semesterId: 1,
  },
  {
    id: 'mathematics-1',
    name: 'Mathematics - 1',
    semesterId: 1,
  },
  {
    id: 'applied-chemistry',
    name: 'Applied Chemistry',
    semesterId: 1,
  },
  {
    id: 'communication-skills-english',
    name: 'Communication Skills in English',
    semesterId: 1,
  },
];

export const semester3Subjects = [
  {
    id: 'dbms',
    name: 'DBMS',
    semesterId: 3,
  },
  {
    id: 'computer-network',
    name: 'Computer Network',
    semesterId: 3,
  },
  {
    id: 'operating-system',
    name: 'Operating System',
    semesterId: 3,
  },
];

export const semester5Subjects = [
  {
    id: 'information-security',
    name: 'Information Security',
    semesterId: 5,
  },
  {
    id: 'multimedia-technologies',
    name: 'Multimedia Technologies',
    semesterId: 5,
  },
];

export const subjectsData = {
  1: semester1Subjects,
  3: semester3Subjects,
  5: semester5Subjects,
};

/**
 * Reusable Common Semester 1 configuration for all BTEUP polytechnic branches.
 * First semester syllabus is unified across CSE, Mechanical, Electronics,
 * Instrumentation & Control, and Information Technology.
 */
export const COMMON_SEMESTER_1 = {
  id: 1,
  number: 1,
  title: '1st Semester',
  shortName: 'Sem 1',
  isCommon: true,
  commonLabel: 'Common BTEUP Semester',
  commonBadge: 'Semester 1 • Common Across Branches',
  description: 'Common foundational curriculum for all BTEUP polytechnic engineering branches (CSE, Mechanical, Electronics, Instrumentation, and IT).',
  subjects: semester1Subjects,
};

/**
 * Branch-specific curriculum mappings.
 * All branches share the exact same COMMON_SEMESTER_1.subjects.
 */
export const branchSubjects = {
  cse: {
    1: COMMON_SEMESTER_1.subjects,
    3: semester3Subjects,
    5: semester5Subjects,
  },
  mechanical: {
    1: COMMON_SEMESTER_1.subjects,
    3: [],
    5: [],
  },
  electronics: {
    1: COMMON_SEMESTER_1.subjects,
    3: [],
    5: [],
  },
  instrumentation: {
    1: COMMON_SEMESTER_1.subjects,
    3: [],
    5: [],
  },
  'information-technology': {
    1: COMMON_SEMESTER_1.subjects,
    3: [],
    5: [],
  },
};

/**
 * Get all subjects for a specific semester and branch.
 * Semester 1 always returns the verified common BTEUP Semester 1 subjects.
 *
 * @param {number|string} semesterId
 * @param {string} [branchId='cse']
 * @returns {Array} List of subjects or empty array
 */
export const getSubjectsBySemester = (semesterId, branchId = 'cse') => {
  const numericId = parseInt(semesterId, 10);
  
  // Semester 1 is COMMON across all BTEUP engineering streams
  if (numericId === 1) {
    return COMMON_SEMESTER_1.subjects;
  }

  // Branch-specific subjects for upper semesters (Sem 3, Sem 5)
  const cleanBranch = String(branchId || 'cse').toLowerCase().trim();
  const normalizedBranch = 
    cleanBranch === 'me' ? 'mechanical' :
    cleanBranch === 'ece' ? 'electronics' :
    cleanBranch === 'ic' ? 'instrumentation' :
    cleanBranch === 'it' ? 'information-technology' :
    cleanBranch;

  if (branchSubjects[normalizedBranch] && branchSubjects[normalizedBranch][numericId]) {
    return branchSubjects[normalizedBranch][numericId];
  }

  // Fallback for default backward compatibility (CSE odd semesters)
  if (!branchId || normalizedBranch === 'cse') {
    return subjectsData[numericId] || [];
  }

  return [];
};

/**
 * Get a subject by its unique clean ID.
 * @param {string} subjectId
 * @returns {Object|null} Subject details or null
 */
export const getSubjectById = (subjectId) => {
  if (!subjectId) return null;

  // Search across all configured semesters
  for (const list of Object.values(subjectsData)) {
    const found = list.find((s) => s.id === subjectId);
    if (found) return found;
  }

  // Fallback for template preview route if accessed directly
  if (subjectId === 'template-preview') {
    return {
      id: 'template-preview',
      name: 'Curriculum Subject Preview',
      semesterId: 1,
    };
  }

  return null;
};

