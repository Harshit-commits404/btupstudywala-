import { Laptop, Wrench, Radio, Sliders, Cpu } from 'lucide-react';

/**
 * Branch definitions for BTEUP Polytechnic Engineering.
 *
 * All branches share the common BTEUP 1st Semester curriculum:
 * - Applied Physics - 1
 * - Fundamental of Electrical and Electronics Engineering (FEEE)
 * - Introduction to IT (IT & AI)
 * - Mathematics - 1
 * - Applied Chemistry
 * - Communication Skills in English
 */

export const branchesData = [
  {
    id: 'cse',
    code: 'CSE',
    name: 'Computer Science & Engineering',
    fullName: 'Diploma in Computer Science & Engineering',
    shortName: 'Computer Science',
    slugs: ['cse', 'computer-science', 'cs'],
    description: 'Programming, DBMS, Networks, Operating Systems aur core computer concepts.',
    semestersAvailable: 'Sem 1, 3, 5 Open',
    activeSemesters: [1, 3, 5],
    isAvailable: true,
    statusText: 'Available Now',
    icon: Laptop,
    link: '/cse/semester-1',
  },
  {
    id: 'mechanical',
    code: 'ME',
    name: 'Mechanical Engineering',
    fullName: 'Diploma in Mechanical Engineering',
    shortName: 'Mechanical',
    slugs: ['mechanical', 'me', 'mechanical-engineering'],
    description: 'Machines, manufacturing, thermodynamics aur mechanical fundamentals.',
    semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
    activeSemesters: [1],
    isAvailable: true,
    statusText: 'Sem 1 Live',
    icon: Wrench,
    link: '/mechanical/semester-1',
  },
  {
    id: 'electronics',
    code: 'ECE',
    name: 'Electronics Engineering',
    fullName: 'Diploma in Electronics Engineering',
    shortName: 'Electronics',
    slugs: ['electronics', 'ece', 'electronics-engineering'],
    description: 'Electronic devices, circuits, communication aur digital concepts.',
    semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
    activeSemesters: [1],
    isAvailable: true,
    statusText: 'Sem 1 Live',
    icon: Radio,
    link: '/electronics/semester-1',
  },
  {
    id: 'instrumentation',
    code: 'IC',
    name: 'Instrumentation & Control',
    fullName: 'Diploma in Instrumentation & Control',
    shortName: 'Instrumentation',
    slugs: ['instrumentation', 'ic', 'instrumentation-control'],
    description: 'Measurement, sensors, control systems aur instrumentation concepts.',
    semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
    activeSemesters: [1],
    isAvailable: true,
    statusText: 'Sem 1 Live',
    icon: Sliders,
    link: '/instrumentation/semester-1',
  },
  {
    id: 'information-technology',
    code: 'IT',
    name: 'Information Technology',
    fullName: 'Diploma in Information Technology',
    shortName: 'Info Tech',
    slugs: ['information-technology', 'it', 'info-tech'],
    description: 'IT fundamentals, programming, networking aur modern technology concepts.',
    semestersAvailable: 'Sem 1 Common Open • Sem 3, 5 Soon',
    activeSemesters: [1],
    isAvailable: true,
    statusText: 'Sem 1 Live',
    icon: Cpu,
    link: '/information-technology/semester-1',
  },
];

/**
 * Normalizes branch ID or slug to canonical branch ID.
 * @param {string} branchIdOrSlug
 * @returns {string} Canonical branch ID (default 'cse')
 */
export const normalizeBranchId = (branchIdOrSlug) => {
  if (!branchIdOrSlug) return 'cse';
  const clean = String(branchIdOrSlug).toLowerCase().trim();
  const matched = branchesData.find(
    (b) => b.id === clean || b.code.toLowerCase() === clean || b.slugs.includes(clean)
  );
  return matched ? matched.id : 'cse';
};

/**
 * Get branch by ID, code, or slug.
 * @param {string} branchIdOrSlug
 * @returns {Object} Branch object (defaults to CSE if not found)
 */
export const getBranchById = (branchIdOrSlug) => {
  if (!branchIdOrSlug) return branchesData[0];
  const canonicalId = normalizeBranchId(branchIdOrSlug);
  return branchesData.find((b) => b.id === canonicalId) || branchesData[0];
};

/**
 * Check if a branch exists by ID or slug.
 * @param {string} branchIdOrSlug
 * @returns {boolean}
 */
export const isValidBranch = (branchIdOrSlug) => {
  if (!branchIdOrSlug) return false;
  const clean = String(branchIdOrSlug).toLowerCase().trim();
  return branchesData.some(
    (b) => b.id === clean || b.code.toLowerCase() === clean || b.slugs.includes(clean)
  );
};
