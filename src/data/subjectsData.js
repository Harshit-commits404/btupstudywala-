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
 * Get all subjects for a specific semester.
 * @param {number|string} semesterId
 * @returns {Array} List of subjects or empty array
 */
export const getSubjectsBySemester = (semesterId) => {
  const numericId = parseInt(semesterId, 10);
  return subjectsData[numericId] || [];
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
