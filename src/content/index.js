import AppliedPhysicsCh1Content from './applied-physics/AppliedPhysicsCh1Content';

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

import IsUnit1Content from './information-security/IsUnit1Content';
import IsUnit2Content from './information-security/IsUnit2Content';
import IsUnit3Content from './information-security/IsUnit3Content';
import IsUnit4Content from './information-security/IsUnit4Content';
import IsUnit5Content from './information-security/IsUnit5Content';

import MtUnit1Content from './multimedia-technologies/MtUnit1Content';
import MtUnit2Content from './multimedia-technologies/MtUnit2Content';
import MtUnit3Content from './multimedia-technologies/MtUnit3Content';
import MtUnit4Content from './multimedia-technologies/MtUnit4Content';

// Registry of all study content mapped by subjectId and chapterId
export const contentRegistry = {
  // Applied Physics 1 (Default / Existing)
  'applied-physics-1': {
    'units-and-dimensions': AppliedPhysicsCh1Content,
    'ch-1': AppliedPhysicsCh1Content,
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

  // Information Security
  'information-security': {
    'unit-1': IsUnit1Content,
    'unit-2': IsUnit2Content,
    'unit-3': IsUnit3Content,
    'unit-4': IsUnit4Content,
    'unit-5': IsUnit5Content,
  },

  // Multimedia Technologies
  'multimedia-technologies': {
    'unit-1': MtUnit1Content,
    'unit-2': MtUnit2Content,
    'unit-3': MtUnit3Content,
    'unit-4': MtUnit4Content,
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
  AppliedPhysicsCh1Content,
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
