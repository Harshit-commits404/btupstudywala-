
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

import MtUnit1Content from './multimedia-technologies/MtUnit1Content';
import MtUnit2Content from './multimedia-technologies/MtUnit2Content';
import MtUnit3Content from './multimedia-technologies/MtUnit3Content';
import MtUnit4Content from './multimedia-technologies/MtUnit4Content';

import IsUnit1Content from './information-security/IsUnit1Content';
import IsUnit2Content from './information-security/IsUnit2Content';
import IsUnit3Content from './information-security/IsUnit3Content';
import IsUnit4Content from './information-security/IsUnit4Content';
import IsUnit5Content from './information-security/IsUnit5Content';

import { chaptersData } from '../data/chaptersData';

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

  // Information Security (Semester 5)
  'information-security': {
    'unit-1': IsUnit1Content,
    'unit-2': IsUnit2Content,
    'unit-3': IsUnit3Content,
    'unit-4': IsUnit4Content,
    'unit-5': IsUnit5Content,
    // Topic & section ID direct mappings to ensure unit resolution
    'info-sec-intro': IsUnit1Content,
    'pain-aspects': IsUnit1Content,
    'os-security': IsUnit1Content,
    'auth-logs': IsUnit1Content,
    'audit-file-protection': IsUnit1Content,
    'protocol-weaknesses': IsUnit2Content,
    'device-weaknesses': IsUnit2Content,
    'protocol-solutions': IsUnit2Content,
    'device-solutions': IsUnit2Content,
    'crypto-basics': IsUnit3Content,
    'pki': IsUnit3Content,
    'secure-software': IsUnit3Content,
    'firewall': IsUnit4Content,
    'ids-ips': IsUnit4Content,
    'vpn-concentrator': IsUnit4Content,
    'content-screening': IsUnit4Content,
    'security-standards': IsUnit5Content,
    'laws': IsUnit5Content,
    'audit-policies': IsUnit5Content,
    'dr-bcp': IsUnit5Content,
  },

  // Multimedia Technologies (Semester 5)
  'multimedia-technologies': {
    'unit-1': MtUnit1Content,
    'unit-2': MtUnit2Content,
    'unit-3': MtUnit3Content,
    'unit-4': MtUnit4Content,
    // Topic & section ID direct mappings to ensure unit resolution
    'multimedia-foundation': MtUnit1Content,
    'multimedia-hardware': MtUnit1Content,
    'multimedia-software': MtUnit1Content,
    'multimedia-os': MtUnit1Content,
    'multimedia-communication': MtUnit1Content,
    'compression-intro': MtUnit2Content,
    'lossless-methods': MtUnit2Content,
    'image-video': MtUnit2Content,
    'audio-formats': MtUnit2Content,
    'dtp-tools': MtUnit3Content,
    'multimedia-animation': MtUnit3Content,
    '2d-3d-flash': MtUnit3Content,
    'graphic-design': MtUnit4Content,
    'digital-images': MtUnit4Content,
    'imaging-in-multimedia': MtUnit4Content,
  },
};

/**
 * Helper to get content component strictly scoped by subjectId and chapterId.
 * ALWAYS scopes lookup by subjectId so one subject never leaks into another.
 */
export function getChapterContent(subjectId, chapterId) {
  // 1. Direct subject-scoped lookup
  if (subjectId && contentRegistry[subjectId]) {
    const subjectContent = contentRegistry[subjectId];

    if (chapterId && subjectContent[chapterId]) {
      return subjectContent[chapterId];
    }

    // Try finding parent unit via chaptersData section mapping
    const subjectChapters = chaptersData[subjectId];
    if (subjectChapters && chapterId) {
      const parentUnit = subjectChapters.find((ch) =>
        ch.sections?.some(
          (s) => s.id === chapterId || s.id.toLowerCase() === chapterId.toLowerCase()
        )
      );
      if (parentUnit && subjectContent[parentUnit.id]) {
        return subjectContent[parentUnit.id];
      }
    }

    // Default to the first unit of THIS specific subject if available
    const firstKey = Object.keys(subjectContent)[0];
    if (firstKey) {
      return subjectContent[firstKey];
    }
  }

  // 2. Legacy fallback ONLY if no subjectId was provided AND chapterId matches physics chapter 1
  if (!subjectId && (chapterId === 'units-and-dimensions' || chapterId === 'ch-1')) {
    return AppliedPhysicsCh1Content;
  }

  // 3. Fallback: null if content is not available for this subject (NEVER return Physics for other subjects!)
  return null;
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
  IsUnit1Content,
  IsUnit2Content,
  IsUnit3Content,
  IsUnit4Content,
  IsUnit5Content,
  MtUnit1Content,
  MtUnit2Content,
  MtUnit3Content,
  MtUnit4Content,
};
