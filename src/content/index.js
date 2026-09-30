
import CsUnit1Content from './cs/CsUnit1Content';
import CsUnit2Content from './cs/CsUnit2Content';
import CsUnit3Content from './cs/CsUnit3Content';
import CsUnit4Content from './cs/CsUnit4Content';
import CsUnit5Content from './cs/CsUnit5Content';

import ItaiUnit1Content from './itai/ItaiUnit1Content';
import ItaiUnit2Content from './itai/ItaiUnit2Content';
import ItaiUnit3Content from './itai/ItaiUnit3Content';
import ItaiUnit4Content from './itai/ItaiUnit4Content';
import ItaiUnit5Content from './itai/ItaiUnit5Content';

import FeeeUnit1Content from './feee/FeeeUnit1Content';
import FeeeUnit2Content from './feee/FeeeUnit2Content';
import FeeeUnit3Content from './feee/FeeeUnit3Content';
import FeeeUnit4Content from './feee/FeeeUnit4Content';
import FeeeUnit5Content from './feee/FeeeUnit5Content';
import FeeeUnit6Content from './feee/FeeeUnit6Content';

import AppliedPhysicsCh1Content from './applied-physics/AppliedPhysicsCh1Content';
import AppliedPhysicsCh2Content from './applied-physics/AppliedPhysicsCh2Content';
import AppliedPhysicsCh3Content from './applied-physics/AppliedPhysicsCh3Content';
import AppliedPhysicsCh4Content from './applied-physics/AppliedPhysicsCh4Content';
import AppliedPhysicsCh5Content from './applied-physics/AppliedPhysicsCh5Content';
import AppliedPhysicsCh6Content from './applied-physics/AppliedPhysicsCh6Content';
import AppliedPhysicsCh7Content from './applied-physics/AppliedPhysicsCh7Content';

import Maths1Unit1Content from './mathematics-1/Maths1Unit1Content';
import Maths1Unit2Content from './mathematics-1/Maths1Unit2Content';
import Maths1Unit3Content from './mathematics-1/Maths1Unit3Content';
import Maths1Unit4Content from './mathematics-1/Maths1Unit4Content';
import Maths1Unit5Content from './mathematics-1/Maths1Unit5Content';

import AppliedChemistryUnit1Content from './applied-chemistry/AppliedChemistryUnit1Content';
import AppliedChemistryUnit2Content from './applied-chemistry/AppliedChemistryUnit2Content';
import AppliedChemistryUnit3Content from './applied-chemistry/AppliedChemistryUnit3Content';
import AppliedChemistryUnit4Content from './applied-chemistry/AppliedChemistryUnit4Content';
import AppliedChemistryUnit5Content from './applied-chemistry/AppliedChemistryUnit5Content';

import DbmsUnit1Content from './dbms/DbmsUnit1Content';
import DbmsUnit2Content from './dbms/DbmsUnit2Content';
import DbmsUnit3Content from './dbms/DbmsUnit3Content';
import DbmsUnit4Content from './dbms/DbmsUnit4Content';
import DbmsUnit5Content from './dbms/DbmsUnit5Content';

import OsUnit1Content from './os/OsUnit1Content';
import OsUnit2Content from './os/OsUnit2Content';
import OsUnit3Content from './os/OsUnit3Content';
import OsUnit4Content from './os/OsUnit4Content';
import OsUnit5Content from './os/OsUnit5Content';

import CnUnit1Content from './cn/CnUnit1Content';
import CnUnit2Content from './cn/CnUnit2Content';
import CnUnit3Content from './cn/CnUnit3Content';
import CnUnit4Content from './cn/CnUnit4Content';
import CnUnit5Content from './cn/CnUnit5Content';


// Registry of all study content mapped by subjectId and chapterId
export const contentRegistry = {
  // Communication Skills
  'communication-skills-english': {
    'unit-1': CsUnit1Content,
    'unit-2': CsUnit2Content,
    'unit-3': CsUnit3Content,
    'unit-4': CsUnit4Content,
    'unit-5': CsUnit5Content,
  },

  // IT and AI
  'introduction-to-it': {
    'unit-1': ItaiUnit1Content,
    'unit-2': ItaiUnit2Content,
    'unit-3': ItaiUnit3Content,
    'unit-4': ItaiUnit4Content,
    'unit-5': ItaiUnit5Content,
  },

  // FEEE
  'fundamental-electrical-electronics': {
    'unit-1': FeeeUnit1Content,
    'unit-2': FeeeUnit2Content,
    'unit-3': FeeeUnit3Content,
    'unit-4': FeeeUnit4Content,
    'unit-5': FeeeUnit5Content,
    'unit-6': FeeeUnit6Content,
  },

  // Applied Physics 1 (Default / Existing)
  'applied-physics-1': {
    'units-and-dimensions': AppliedPhysicsCh1Content,
    'ch-1': AppliedPhysicsCh1Content,
    'force-and-motion': AppliedPhysicsCh2Content,
    'work-power-and-energy': AppliedPhysicsCh3Content,
    'circular-motion': AppliedPhysicsCh4Content,
    'rotational-motion': AppliedPhysicsCh5Content,
    'properties-of-matter': AppliedPhysicsCh6Content,
    'heat-and-thermometry': AppliedPhysicsCh7Content,
  },

  // Mathematics 1
  'mathematics-1': {
    'trigonometry': Maths1Unit1Content,
    'differential-calculus': Maths1Unit2Content,
    'partial-fractions': Maths1Unit3Content,
    'binomial-theorem': Maths1Unit4Content,
    'complex-numbers': Maths1Unit5Content,
  },

  // Applied Chemistry
  'applied-chemistry': {
    'atomic-structure-chemical-bonding-and-solutions': AppliedChemistryUnit1Content,
    'water': AppliedChemistryUnit2Content,
    'engineering-materials': AppliedChemistryUnit3Content,
    'chemistry-of-fuels-and-lubricants': AppliedChemistryUnit4Content,
    'electro-chemistry': AppliedChemistryUnit5Content,
  },

  // DBMS (Database Management System)
  'dbms': {
    'unit-1': DbmsUnit1Content,
    'unit-2': DbmsUnit2Content,
    'unit-3': DbmsUnit3Content,
    'unit-4': DbmsUnit4Content,
    'unit-5': DbmsUnit5Content,
  },

  // Operating System
  'operating-system': {
    'unit-1': OsUnit1Content,
    'unit-2': OsUnit2Content,
    'unit-3': OsUnit3Content,
    'unit-4': OsUnit4Content,
    'unit-5': OsUnit5Content,
  },

  // Computer Network
  'computer-network': {
    'unit-1': CnUnit1Content,
    'unit-2': CnUnit2Content,
    'unit-3': CnUnit3Content,
    'unit-4': CnUnit4Content,
    'unit-5': CnUnit5Content,
  },
};

/**
 * Helper to get content component by subjectId and chapterId.
 * Falls back to AppliedPhysicsCh1Content if not found to ensure graceful rendering.
 */
export function getChapterContent(subjectId, chapterId) {
  if (contentRegistry[subjectId] && contentRegistry[subjectId][chapterId]) {
    return contentRegistry[subjectId][chapterId];
  }
  // If only chapterId matched directly (e.g. legacy /chapter/ch-1 URL)
  if (chapterId === 'units-and-dimensions' || chapterId === 'ch-1') {
    return AppliedPhysicsCh1Content;
  }
  return AppliedPhysicsCh1Content;
}

export {
  CsUnit1Content,
  CsUnit2Content,
  CsUnit3Content,
  CsUnit4Content,
  CsUnit5Content,
  ItaiUnit1Content,
  ItaiUnit2Content,
  ItaiUnit3Content,
  ItaiUnit4Content,
  ItaiUnit5Content,
  FeeeUnit1Content,
  FeeeUnit2Content,
  FeeeUnit3Content,
  FeeeUnit4Content,
  FeeeUnit5Content,
  FeeeUnit6Content,

  AppliedPhysicsCh1Content,
  AppliedPhysicsCh2Content,
  AppliedPhysicsCh3Content,
  AppliedPhysicsCh4Content,
  AppliedPhysicsCh5Content,
  AppliedPhysicsCh6Content,
  AppliedPhysicsCh7Content,
  Maths1Unit1Content,
  Maths1Unit2Content,
  Maths1Unit3Content,
  Maths1Unit4Content,
  Maths1Unit5Content,
  AppliedChemistryUnit1Content,
  AppliedChemistryUnit2Content,
  AppliedChemistryUnit3Content,
  AppliedChemistryUnit4Content,
  AppliedChemistryUnit5Content,
  DbmsUnit1Content,
  DbmsUnit2Content,
  DbmsUnit3Content,
  DbmsUnit4Content,
  DbmsUnit5Content,
  OsUnit1Content,
  OsUnit2Content,
  OsUnit3Content,
  OsUnit4Content,
  OsUnit5Content,
  CnUnit1Content,
  CnUnit2Content,
  CnUnit3Content,
  CnUnit4Content,
  CnUnit5Content,
};
